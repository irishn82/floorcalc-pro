export const ADMIN_SESSION_COOKIE = "floorcalc_admin_session";
export const ADMIN_SESSION_MAX_AGE_SECONDS = 60 * 60 * 8;

type CookieOptions = {
  httpOnly: boolean;
  secure: boolean;
  sameSite: "lax";
  path: string;
  maxAge?: number;
  expires?: Date;
};

type CookieWriter = {
  set: (name: string, value: string, options: CookieOptions) => void;
};

const encoder = new TextEncoder();

function getAdminPassword() {
  return process.env.ADMIN_PASSWORD;
}

function getSessionSecret() {
  return process.env.ADMIN_SESSION_SECRET;
}

export function isAdminAuthConfigured() {
  return Boolean(getAdminPassword() && getSessionSecret());
}

function constantTimeEqual(a: string, b: string) {
  const maxLength = Math.max(a.length, b.length, 1);
  let diff = a.length ^ b.length;

  for (let index = 0; index < maxLength; index += 1) {
    diff |= (a.charCodeAt(index) || 0) ^ (b.charCodeAt(index) || 0);
  }

  return diff === 0;
}

async function hmacHex(secret: string, value: string) {
  const key = await crypto.subtle.importKey(
    "raw",
    encoder.encode(secret),
    { name: "HMAC", hash: "SHA-256" },
    false,
    ["sign"]
  );
  const signature = await crypto.subtle.sign("HMAC", key, encoder.encode(value));

  return [...new Uint8Array(signature)].map((byte) => byte.toString(16).padStart(2, "0")).join("");
}

export async function validateAdminPassword(password: string) {
  const expectedPassword = getAdminPassword();

  if (!expectedPassword) {
    return false;
  }

  return constantTimeEqual(password, expectedPassword);
}

export function getAdminSessionCookieOptions(): CookieOptions {
  return {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/admin",
    maxAge: ADMIN_SESSION_MAX_AGE_SECONDS
  };
}

export function getExpiredAdminSessionCookieOptions(): CookieOptions {
  return {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/admin",
    expires: new Date(0),
    maxAge: 0
  };
}

export async function createAdminSession() {
  const secret = getSessionSecret();

  if (!secret) {
    throw new Error("ADMIN_SESSION_SECRET is not configured.");
  }

  const issuedAt = Date.now().toString();
  const payload = `v1:${issuedAt}`;
  const signature = await hmacHex(secret, payload);

  return `${payload}:${signature}`;
}

export async function validateAdminSession(sessionValue: string | null | undefined) {
  const secret = getSessionSecret();

  if (!secret || !sessionValue) {
    return false;
  }

  const [version, issuedAt, signature] = sessionValue.split(":");

  if (version !== "v1" || !issuedAt || !signature) {
    return false;
  }

  const issuedAtMs = Number(issuedAt);
  if (!Number.isFinite(issuedAtMs)) {
    return false;
  }

  const ageSeconds = Math.floor((Date.now() - issuedAtMs) / 1000);
  if (ageSeconds < 0 || ageSeconds > ADMIN_SESSION_MAX_AGE_SECONDS) {
    return false;
  }

  const expectedSignature = await hmacHex(secret, `${version}:${issuedAt}`);
  return constantTimeEqual(signature, expectedSignature);
}

export async function setAdminSessionCookie(cookieWriter: CookieWriter) {
  const session = await createAdminSession();
  cookieWriter.set(ADMIN_SESSION_COOKIE, session, getAdminSessionCookieOptions());
}

export function clearAdminSessionCookie(cookieWriter: CookieWriter) {
  cookieWriter.set(ADMIN_SESSION_COOKIE, "", getExpiredAdminSessionCookieOptions());
}
