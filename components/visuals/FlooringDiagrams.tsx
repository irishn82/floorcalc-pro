import type { ReactNode } from "react";

const visualNote =
  "Visual example only. Final layout depends on product requirements, field conditions, and installer judgment.";

function DiagramCard({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div className="rounded-md border border-line bg-white p-3">
      <h3 className="text-sm font-black text-ink">{title}</h3>
      <div className="mt-3">{children}</div>
      <p className="mt-3 text-xs leading-5 text-slate-500">{visualNote}</p>
    </div>
  );
}

function TransitionProfileSketch({ profile }: { profile: string }) {
  const rightFloorY = profile === "Reducer" ? 92 : 74;
  const isEndCap = profile === "End cap";
  const isStairNose = profile === "Stair nose";

  return (
    <svg viewBox="0 0 260 130" role="img" aria-label={`${profile} transition profile concept`} className="h-auto w-full">
      <rect x="10" y="10" width="240" height="110" rx="10" fill="#eff6ff" stroke="#d5deea" />
      {isStairNose ? (
        <>
          <rect x="34" y="44" width="108" height="26" rx="3" fill="#ffffff" stroke="#bdd3f8" />
          <rect x="142" y="70" width="84" height="30" rx="3" fill="#ffffff" stroke="#bdd3f8" />
          <path d="M126 44 H156 Q174 44 174 62 V96" fill="none" stroke="#1f6feb" strokeWidth="9" strokeLinecap="round" strokeLinejoin="round" />
          <text x="78" y="34" fill="#334155" fontSize="12" fontWeight="700">tread</text>
          <text x="170" y="113" fill="#334155" fontSize="12" fontWeight="700">riser</text>
        </>
      ) : (
        <>
          <rect x="30" y="74" width="90" height="26" rx="3" fill="#ffffff" stroke="#bdd3f8" />
          {!isEndCap ? <rect x="140" y={rightFloorY} width="90" height={100 - rightFloorY} rx="3" fill="#ffffff" stroke="#bdd3f8" /> : null}
          {profile === "T-mold" ? (
            <path d="M92 60 H168 M130 60 V98" fill="none" stroke="#1f6feb" strokeWidth="9" strokeLinecap="round" />
          ) : profile === "Reducer" ? (
            <path d="M102 70 C125 72 138 84 160 94" fill="none" stroke="#1f6feb" strokeWidth="9" strokeLinecap="round" />
          ) : (
            <path d="M118 58 V100 M118 58 H150" fill="none" stroke="#1f6feb" strokeWidth="9" strokeLinecap="round" strokeLinejoin="round" />
          )}
        </>
      )}
    </svg>
  );
}

export function TransitionTypeDiagram() {
  const profiles = [
    ["T-mold", "same height"],
    ["Reducer", "height change"],
    ["End cap", "finished edge"],
    ["Stair nose", "step edge"]
  ];

  return (
    <div className="grid gap-3 sm:grid-cols-2">
      {profiles.map(([name, use]) => (
        <DiagramCard key={name} title={name}>
          <TransitionProfileSketch profile={name} />
          <p className="mt-2 text-xs font-bold uppercase tracking-wide text-accent-700">{use}</p>
        </DiagramCard>
      ))}
    </div>
  );
}

export function SubfloorFlatnessDiagram() {
  return (
    <DiagramCard title="Flatness concept">
      <svg viewBox="0 0 520 180" role="img" aria-label="Subfloor flatness example showing a straightedge over high and low spots" className="h-auto w-full">
        <rect x="16" y="18" width="488" height="144" rx="12" fill="#eff6ff" stroke="#d5deea" />
        <path d="M50 118 C110 88 150 146 210 114 S310 82 370 116 S440 145 476 104" fill="none" stroke="#64748b" strokeWidth="8" strokeLinecap="round" />
        <line x1="54" y1="76" x2="472" y2="76" stroke="#1f6feb" strokeWidth="6" strokeLinecap="round" />
        <path d="M166 82 v46" stroke="#d97706" strokeWidth="3" strokeDasharray="6 6" />
        <path d="M312 82 v35" stroke="#d97706" strokeWidth="3" strokeDasharray="6 6" />
        <text x="54" y="54" fill="#0d1624" fontSize="18" fontWeight="700">Straightedge</text>
        <text x="138" y="150" fill="#334155" fontSize="15">low/high spots need field verification</text>
      </svg>
    </DiagramCard>
  );
}

export function MoistureBarrierLayerDiagram() {
  const layers = [
    ["Finish flooring", "LVP, engineered wood, laminate, or tile system"],
    ["Approved system layer", "underlayment, adhesive, membrane, or vapor retarder"],
    ["Prepared substrate", "flat, clean, dry-enough concrete or subfloor"]
  ];

  return (
    <DiagramCard title="Layer planning concept">
      <div className="space-y-2" aria-label="Flooring layers over prepared substrate">
        {layers.map(([label, detail], index) => (
          <div
            key={label}
            className={`rounded border p-3 ${
              index === 0
                ? "border-accent-200 bg-white"
                : index === 1
                  ? "border-accent-100 bg-accent-50"
                  : "border-slate-200 bg-slate-100"
            }`}
          >
            <p className="text-sm font-bold text-ink">{label}</p>
            <p className="mt-1 text-xs leading-5 text-slate-600">{detail}</p>
          </div>
        ))}
      </div>
    </DiagramCard>
  );
}

export function FlooringDirectionDiagram() {
  return (
    <div className="grid gap-3 sm:grid-cols-2">
      {[
        ["Open room sight line", "planks run with the longest visual line"],
        ["Hallway flow", "planks follow the main walking path"]
      ].map(([label, caption], visualIndex) => (
        <DiagramCard key={label} title={label}>
          <div
            className={`grid h-28 rounded border border-accent-100 bg-accent-50 p-2 ${
              visualIndex === 0 ? "grid-cols-8 gap-x-1" : "grid-cols-4 gap-x-1"
            }`}
            aria-label={`${label} plank direction example`}
          >
            {Array.from({ length: visualIndex === 0 ? 24 : 16 }).map((_, index) => (
              <span key={index} className="rounded-sm bg-white shadow-[inset_0_0_0_1px_rgba(31,111,235,0.12)]" />
            ))}
          </div>
          <p className="mt-2 text-xs leading-5 text-slate-600">{caption}</p>
        </DiagramCard>
      ))}
    </div>
  );
}

export function CarpetSeamDiagram() {
  return (
    <DiagramCard title="Carpet drop and seam concept">
      <div className="relative h-36 overflow-hidden rounded border border-accent-100 bg-accent-50" aria-label="Carpet drops with likely seam lines">
        <div className="absolute inset-y-0 left-0 w-1/3 border-r-2 border-dashed border-accent-700 bg-white/70" />
        <div className="absolute inset-y-0 left-1/3 w-1/3 border-r-2 border-dashed border-accent-700 bg-white/35" />
        <div className="absolute left-3 top-3 rounded bg-white px-2 py-1 text-xs font-bold text-slate-700 shadow-sm">carpet drops</div>
        <div className="absolute bottom-3 right-3 rounded bg-accent-700 px-2 py-1 text-xs font-bold text-white">planning visual</div>
      </div>
      <p className="mt-2 text-xs leading-5 text-slate-600">Seams depend on roll width, light, traffic, pile direction, pattern match, and installer layout.</p>
    </DiagramCard>
  );
}

export function ExpansionGapDiagram() {
  return (
    <DiagramCard title="Floating floor movement concept">
      <div className="grid grid-cols-[2.5rem_1fr_2.5rem] items-stretch rounded border border-line bg-field" aria-label="Floating floor expansion gap concept">
        <div className="bg-slate-200" />
        <div className="grid h-24 grid-cols-5 gap-1 p-3">
          {Array.from({ length: 5 }).map((_, index) => (
            <span key={index} className="rounded-sm bg-white shadow-[inset_0_0_0_1px_rgba(13,22,36,0.12)]" />
          ))}
        </div>
        <div className="bg-slate-200" />
      </div>
      <div className="mt-2 flex justify-between text-xs font-bold uppercase tracking-wide text-slate-500">
        <span>Wall</span>
        <span>Expansion space</span>
        <span>Wall</span>
      </div>
    </DiagramCard>
  );
}
