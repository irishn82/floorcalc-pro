import type { ReactNode } from "react";
import type { Guide } from "@/data/types";

type GuideUtilityVisualProps = {
  guide: Guide;
};

function VisualShell({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div className="mt-6 rounded-lg border border-line bg-field p-4 shadow-sm">
      <h2 className="text-base font-black text-ink">{title}</h2>
      <div className="mt-3">{children}</div>
    </div>
  );
}

function TransitionTable() {
  const rows = [
    ["T-mold", "Similar-height floors", "Doorways where both sides need movement space"],
    ["Reducer", "Height changes", "New floor meeting lower tile, vinyl, concrete, or carpet"],
    ["End cap", "Finished edge", "Sliding doors, fireplaces, cabinets, or carpet edges"],
    ["Stair nose", "Step edge", "Stair treads, landings, and exposed stair edges"]
  ];

  return (
    <div className="overflow-hidden rounded-md border border-line bg-white">
      <div className="grid grid-cols-[0.8fr_1fr_1.2fr] border-b border-line bg-accent-50 text-xs font-bold uppercase tracking-wide text-accent-800">
        <div className="p-2">Profile</div>
        <div className="p-2">Best for</div>
        <div className="p-2">Typical use</div>
      </div>
      {rows.map(([profile, bestFor, use]) => (
        <div key={profile} className="grid grid-cols-[0.8fr_1fr_1.2fr] border-b border-line text-sm last:border-b-0">
          <div className="p-2 font-bold text-ink">{profile}</div>
          <div className="p-2 text-slate-600">{bestFor}</div>
          <div className="p-2 text-slate-600">{use}</div>
        </div>
      ))}
    </div>
  );
}

function ComparisonTable({ columns, rows }: { columns: string[]; rows: string[][] }) {
  return (
    <div className="overflow-x-auto rounded-md border border-line bg-white">
      <table className="w-full min-w-[34rem] text-left text-sm">
        <thead className="bg-accent-50 text-xs font-bold uppercase tracking-wide text-accent-800">
          <tr>
            {columns.map((column) => (
              <th key={column} className="p-2">
                {column}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-line">
          {rows.map((row) => (
            <tr key={row.join("-")} className="align-top">
              {row.map((cell, index) => (
                <td key={cell} className={index === 0 ? "p-2 font-bold text-ink" : "p-2 leading-5 text-slate-600"}>
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function EngineeredConcreteVisual() {
  const rows = [
    ["Floating", "Approved underlayment and expansion space", "Can help with acoustic requirements; may be easier to repair"],
    ["Glue-down", "Compatible adhesive, slab prep, and moisture testing", "Can feel more bonded; prep and moisture control are critical"]
  ];

  return (
    <div className="grid gap-3">
      <div className="rounded-md border border-line bg-white p-3">
        <div className="space-y-2" aria-label="Concrete slab to engineered hardwood layer diagram">
          {[
            ["Engineered hardwood", "Finished wood surface"],
            ["Approved adhesive, underlayment, or moisture system", "Product-specific layer"],
            ["Concrete slab", "Flat, clean, and moisture-tested"]
          ].map(([label, detail], index) => (
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
      </div>
      <ComparisonTable columns={["Method", "Must verify", "Practical note"]} rows={rows} />
    </div>
  );
}

function PlankDirectionVisual() {
  return (
    <div className="grid gap-3 sm:grid-cols-2">
      {[
        ["Long wall layout", "Planks run with the longest visual line"],
        ["Hallway flow", "Planks follow the main walking path"]
      ].map(([label, caption]) => (
        <div key={label} className="rounded-md border border-line bg-white p-3">
          <div className="grid h-28 grid-cols-6 gap-1 rounded border border-accent-100 bg-accent-50 p-2">
            {Array.from({ length: 18 }).map((_, index) => (
              <span key={index} className="rounded-sm bg-white shadow-[inset_0_0_0_1px_rgba(31,111,235,0.12)]" />
            ))}
          </div>
          <p className="mt-2 text-sm font-bold text-ink">{label}</p>
          <p className="mt-1 text-xs leading-5 text-slate-600">{caption}</p>
        </div>
      ))}
    </div>
  );
}

function DirectionDecisionVisual() {
  const rows = [
    ["Longest sight line", "Usually run with the main view", "Helps connected rooms feel intentional"],
    ["Hallway flow", "Often run down the hallway", "Avoids a chopped-up look and many short pieces"],
    ["Natural light", "Consider running with strong light", "May make plank edges less noticeable"],
    ["Direction changes", "Use a doorway or transition", "Plan trim and expansion requirements early"]
  ];

  return (
    <div className="grid gap-3">
      <PlankDirectionVisual />
      <ComparisonTable columns={["Layout factor", "Direction consideration", "Why it matters"]} rows={rows} />
    </div>
  );
}

function SeamVisual() {
  return (
    <div className="rounded-md border border-line bg-white p-3">
      <div className="relative h-36 overflow-hidden rounded border border-accent-100 bg-accent-50">
        <div className="absolute inset-y-0 left-0 w-1/3 border-r-2 border-dashed border-accent-600 bg-white/70" />
        <div className="absolute inset-y-0 left-1/3 w-1/3 border-r-2 border-dashed border-accent-600 bg-white/35" />
        <div className="absolute left-3 top-3 rounded bg-white px-2 py-1 text-xs font-bold text-slate-700 shadow-sm">Carpet drops</div>
        <div className="absolute bottom-3 right-3 rounded bg-accent-700 px-2 py-1 text-xs font-bold text-white">Planning visual only</div>
      </div>
      <p className="mt-2 text-xs leading-5 text-slate-600">
        Seam visibility depends on roll width, light, traffic, pile direction, pattern match, and installer layout.
      </p>
    </div>
  );
}

function LaminateSeparationVisual() {
  const rows = [
    ["Uneven subfloor", "Gap returns in the same area", "Check for bounce, low spots, or humps"],
    ["Moisture or humidity", "Swollen edges, seasonal movement", "Look for leaks, wet cleaning, or room humidity swings"],
    ["Pinned floating floor", "Gaps away from tight trim or transitions", "Check expansion space and fixed objects"],
    ["Damaged locking joint", "Joint will not stay closed", "Inspect plank edges before forcing repair"]
  ];

  return (
    <div className="grid gap-3">
      <ExpansionGapVisual />
      <ComparisonTable columns={["Common cause", "Likely symptom", "What to check"]} rows={rows} />
    </div>
  );
}

function ExpansionGapVisual() {
  return (
    <div className="rounded-md border border-line bg-white p-3">
      <div className="grid grid-cols-[2.5rem_1fr_2.5rem] items-stretch rounded border border-line bg-field">
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
    </div>
  );
}

function HardwoodAcclimationVisual() {
  const rows = [
    ["Solid hardwood", "Often more sensitive to moisture movement", "Moisture readings and stable HVAC are especially important"],
    ["Engineered hardwood", "Usually more dimensionally stable, but not immune", "Follow the exact product storage and acclimation instructions"]
  ];

  return (
    <div className="grid gap-3">
      <div className="rounded-md border border-line bg-white p-3">
        <div className="grid gap-2 sm:grid-cols-3" aria-label="Hardwood acclimation timeline diagram">
          {[
            ["1", "Home stabilized", "HVAC running and wet work complete"],
            ["2", "Material stored correctly", "Cartons handled per product instructions"],
            ["3", "Readings verified", "Flooring and subfloor within required range"]
          ].map(([step, title, detail]) => (
            <div key={step} className="rounded border border-accent-100 bg-accent-50 p-3">
              <span className="grid h-7 w-7 place-items-center rounded-full bg-accent-700 text-xs font-black text-white">
                {step}
              </span>
              <p className="mt-2 text-sm font-bold text-ink">{title}</p>
              <p className="mt-1 text-xs leading-5 text-slate-600">{detail}</p>
            </div>
          ))}
        </div>
      </div>
      <ComparisonTable columns={["Product type", "Acclimation concern", "Planning note"]} rows={rows} />
    </div>
  );
}

function TileLayoutVisual() {
  return (
    <div className="rounded-md border border-line bg-white p-3">
      <div className="grid h-36 grid-cols-5 gap-1 rounded border border-accent-100 bg-accent-50 p-2">
        {Array.from({ length: 20 }).map((_, index) => (
          <span key={index} className={index % 5 === 2 ? "rounded-sm bg-accent-100" : "rounded-sm bg-white"} />
        ))}
      </div>
      <p className="mt-2 text-xs leading-5 text-slate-600">
        Center lines and cuts should be checked before setting tile, especially around doorways and focal walls.
      </p>
    </div>
  );
}

export function GuideUtilityVisual({ guide }: GuideUtilityVisualProps) {
  if (guide.slug === "can-engineered-hardwood-go-over-concrete") {
    return (
      <VisualShell title="Engineered hardwood over concrete planning view">
        <EngineeredConcreteVisual />
      </VisualShell>
    );
  }

  if (guide.slug === "how-long-should-hardwood-acclimate") {
    return (
      <VisualShell title="Hardwood acclimation planning view">
        <HardwoodAcclimationVisual />
      </VisualShell>
    );
  }

  if (guide.slug === "why-is-my-laminate-floor-separating") {
    return (
      <VisualShell title="Laminate separation troubleshooting view">
        <LaminateSeparationVisual />
      </VisualShell>
    );
  }

  if (["flooring-transition-guide", "t-mold-vs-reducer-vs-end-cap", "why-is-my-transition-strip-moving"].includes(guide.slug)) {
    return (
      <VisualShell title="Transition profile quick comparison">
        <TransitionTable />
      </VisualShell>
    );
  }

  if (["which-direction-should-flooring-run", "flooring-direction-mistakes", "luxury-vinyl-over-tile"].includes(guide.slug)) {
    return (
      <VisualShell title="Layout direction examples">
        <DirectionDecisionVisual />
      </VisualShell>
    );
  }

  if (["carpet-seam-direction-guide", "what-direction-should-carpet-run", "why-are-my-carpet-seams-visible"].includes(guide.slug)) {
    return (
      <VisualShell title="Carpet seam planning example">
        <SeamVisual />
      </VisualShell>
    );
  }

  if (
    [
      "why-is-my-floor-clicking",
      "why-is-my-lvp-floor-clicking",
      "why-is-my-lvp-lifting",
      "why-is-my-laminate-floor-separating",
      "laminate-floor-separating-what-to-check-first",
      "why-does-my-floor-feel-hollow",
      "subfloor-flatness-requirements-lvp",
      "glue-down-vs-floating-floor"
    ].includes(guide.slug)
  ) {
    return (
      <VisualShell title="Floating floor movement concept">
        <ExpansionGapVisual />
      </VisualShell>
    );
  }

  if (["tile-layout-planning-guide", "what-size-grout-line-should-i-use", "can-you-install-tile-over-tile"].includes(guide.slug)) {
    return (
      <VisualShell title="Tile layout planning example">
        <TileLayoutVisual />
      </VisualShell>
    );
  }

  return null;
}
