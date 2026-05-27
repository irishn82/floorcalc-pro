import type { ReactNode } from "react";

const visualNote =
  "Visual example only. Final layout depends on product requirements, field conditions, and installer judgment.";

function DiagramCard({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div className="min-w-0 overflow-hidden rounded-md border border-line bg-white p-3">
      <h3 className="text-sm font-black text-ink">{title}</h3>
      <div className="mt-3 min-w-0 overflow-hidden">{children}</div>
      <p className="mt-3 text-xs leading-5 text-slate-500">{visualNote}</p>
    </div>
  );
}

function DiagramCaption({ children }: { children: ReactNode }) {
  return <p className="mt-2 text-xs leading-5 text-slate-600">{children}</p>;
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
      </svg>
      <DiagramCaption>Straightedge concept: low spots and high spots should be checked against the product tolerance.</DiagramCaption>
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

export function ConcreteSlabConditionDiagram() {
  return (
    <DiagramCard title="Concrete slab planning concept">
      <svg viewBox="0 0 520 210" role="img" aria-label="Concrete slab with moisture, flatness, and underlayment planning points" className="h-auto w-full">
        <rect x="18" y="18" width="484" height="174" rx="12" fill="#eff6ff" stroke="#d5deea" />
        <rect x="52" y="112" width="416" height="38" rx="5" fill="#cbd5e1" />
        <path d="M70 112 C126 92 154 132 214 112 S320 88 382 112 S444 134 466 110" fill="none" stroke="#64748b" strokeWidth="5" strokeLinecap="round" />
        <line x1="68" y1="82" x2="452" y2="82" stroke="#1f6feb" strokeWidth="5" strokeLinecap="round" />
        <path d="M150 148 v-42 M260 148 v-54 M370 148 v-38" stroke="#1f6feb" strokeWidth="3" strokeDasharray="5 6" />
      </svg>
      <DiagramCaption>Check slab flatness, moisture, surface condition, and approved underlayment before covering concrete.</DiagramCaption>
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

export function SqueakMovementDiagram() {
  return (
    <DiagramCard title="Squeak movement concept">
      <svg viewBox="0 0 520 210" role="img" aria-label="Subfloor movement concept showing panel flex over joists" className="h-auto w-full">
        <rect x="18" y="18" width="484" height="174" rx="12" fill="#eff6ff" stroke="#d5deea" />
        <rect x="62" y="84" width="396" height="26" rx="4" fill="#ffffff" stroke="#bdd3f8" />
        <path d="M82 84 C150 118 220 58 288 92 S386 116 438 84" fill="none" stroke="#1f6feb" strokeWidth="5" strokeLinecap="round" />
        <rect x="92" y="116" width="36" height="50" rx="3" fill="#94a3b8" />
        <rect x="242" y="116" width="36" height="50" rx="3" fill="#94a3b8" />
        <rect x="392" y="116" width="36" height="50" rx="3" fill="#94a3b8" />
        <path d="M252 58 v26 M252 58 l-11 12 M252 58 l11 12" stroke="#d97706" strokeWidth="4" strokeLinecap="round" />
      </svg>
      <DiagramCaption>Movement, rubbing, or flex in the floor system can create noise. Wood subfloors and floating floors need different checks.</DiagramCaption>
    </DiagramCard>
  );
}

export function CrownCuppingDiagram() {
  return (
    <div className="grid gap-3 sm:grid-cols-2">
      {[
        ["Cupping", "edges higher than center", "M70 82 C126 116 188 116 244 82"],
        ["Crowning", "center higher than edges", "M70 108 C126 72 188 72 244 108"]
      ].map(([title, caption, path]) => (
        <DiagramCard key={title} title={title}>
          <svg viewBox="0 0 310 150" role="img" aria-label={`${title} board shape concept`} className="h-auto w-full">
            <rect x="18" y="18" width="274" height="114" rx="10" fill="#eff6ff" stroke="#d5deea" />
            <path d={path} fill="none" stroke="#1f6feb" strokeWidth="12" strokeLinecap="round" />
            <line x1="70" y1="118" x2="244" y2="118" stroke="#94a3b8" strokeWidth="4" strokeDasharray="6 7" />
          </svg>
          <p className="mt-2 text-xs font-bold uppercase tracking-wide text-accent-700">{caption}</p>
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
      </div>
      <DiagramCaption>Dashed lines show possible seams between carpet drops. Final seams depend on roll width, light, traffic, pile direction, pattern match, and installer layout.</DiagramCaption>
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
      <div className="mt-2 grid grid-cols-3 gap-2 text-center text-[0.65rem] font-bold uppercase tracking-wide text-slate-500">
        <span>Wall</span>
        <span>Movement gap</span>
        <span>Wall</span>
      </div>
    </DiagramCard>
  );
}
