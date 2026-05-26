import type { ReactNode } from "react";
import type { Guide } from "@/data/types";
import {
  CarpetSeamDiagram,
  ExpansionGapDiagram,
  FlooringDirectionDiagram,
  MoistureBarrierLayerDiagram,
  SubfloorFlatnessDiagram,
  TransitionTypeDiagram
} from "@/components/visuals/FlooringDiagrams";

type GuideUtilityVisualProps = {
  guide: Guide;
};

function VisualShell({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div className="mt-5 rounded-lg border border-line bg-field p-3.5 shadow-sm">
      <h2 className="text-base font-black text-ink">{title}</h2>
      <div className="mt-3">{children}</div>
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

function TransitionTable() {
  const rows = [
    ["T-mold", "Similar-height floors", "Doorways where both sides need movement space"],
    ["Reducer", "Height changes", "New floor meeting lower tile, vinyl, concrete, or carpet"],
    ["End cap", "Finished edge", "Sliding doors, fireplaces, cabinets, or carpet edges"],
    ["Stair nose", "Step edge", "Stair treads, landings, and exposed stair edges"]
  ];

  return <ComparisonTable columns={["Profile", "Best for", "Typical use"]} rows={rows} />;
}

function EngineeredConcreteVisual() {
  const rows = [
    ["Floating", "Approved underlayment and expansion space", "Can help with acoustic requirements; may be easier to repair"],
    ["Glue-down", "Compatible adhesive, slab prep, and moisture testing", "Can feel more bonded; prep and moisture control are critical"]
  ];

  return (
    <div className="grid gap-3">
      <MoistureBarrierLayerDiagram />
      <ComparisonTable columns={["Method", "Must verify", "Practical note"]} rows={rows} />
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
      <FlooringDirectionDiagram />
      <ComparisonTable columns={["Layout factor", "Direction consideration", "Why it matters"]} rows={rows} />
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
        <p className="mt-3 text-xs leading-5 text-slate-500">
          Visual example only. Final layout depends on product requirements, field conditions, and installer judgment.
        </p>
      </div>
      <ComparisonTable columns={["Product type", "Acclimation concern", "Planning note"]} rows={rows} />
    </div>
  );
}

function ProblemCauseVisual({ rows, includeExpansion = false }: { rows: string[][]; includeExpansion?: boolean }) {
  return (
    <div className="grid gap-3">
      {includeExpansion ? <ExpansionGapDiagram /> : null}
      <ComparisonTable columns={["Cause", "Likely symptom", "What to check"]} rows={rows} />
    </div>
  );
}

function TileLayoutVisual() {
  return (
    <div className="rounded-md border border-line bg-white p-3">
      <div
        className="grid h-32 grid-cols-5 gap-1 rounded border border-accent-100 bg-accent-50 p-2"
        aria-label="Tile layout planning example with centered cut line"
      >
        {Array.from({ length: 20 }).map((_, index) => (
          <span key={index} className={index % 5 === 2 ? "rounded-sm bg-accent-100" : "rounded-sm bg-white"} />
        ))}
      </div>
      <p className="mt-2 text-xs leading-5 text-slate-500">
        Visual example only. Final layout depends on product requirements, field conditions, and installer judgment.
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

  if (["moisture-barrier-engineered-hardwood-over-concrete", "can-you-install-lvp-over-concrete"].includes(guide.slug)) {
    return (
      <VisualShell title="Moisture and substrate layer example">
        <MoistureBarrierLayerDiagram />
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

  if (
    [
      "subfloor-flatness-requirements-lvp",
      "how-flat-should-a-subfloor-be-for-laminate",
      "how-flat-should-a-floor-be-for-tile"
    ].includes(guide.slug)
  ) {
    return (
      <VisualShell title="Subfloor flatness concept">
        <SubfloorFlatnessDiagram />
      </VisualShell>
    );
  }

  if (guide.slug === "why-is-my-laminate-floor-separating") {
    return (
      <VisualShell title="Laminate separation troubleshooting view">
        <ProblemCauseVisual
          includeExpansion
          rows={[
            ["Uneven subfloor", "Gap returns in the same area", "Check for bounce, low spots, or humps"],
            ["Moisture or humidity", "Swollen edges, seasonal movement", "Look for leaks, wet cleaning, or room humidity swings"],
            ["Pinned floating floor", "Gaps away from tight trim or transitions", "Check expansion space and fixed objects"],
            ["Damaged locking joint", "Joint will not stay closed", "Inspect plank edges before forcing repair"]
          ]}
        />
      </VisualShell>
    );
  }

  if (guide.slug === "why-is-my-lvp-floor-separating") {
    return (
      <VisualShell title="LVP separation troubleshooting view">
        <ProblemCauseVisual
          includeExpansion
          rows={[
            ["Locking stress", "End gaps or joints reopening", "Inspect locking edges and nearby flex"],
            ["Uneven subfloor", "Gap returns in one traffic path", "Check for low spots, humps, and hollow movement"],
            ["Pinned floating floor", "Gaps near cabinets or transitions", "Check expansion space and fixed objects"],
            ["Moisture", "Swollen edges or lifting", "Look for slab moisture, leaks, or wet cleaning"]
          ]}
        />
      </VisualShell>
    );
  }

  if (guide.slug === "why-is-my-laminate-floor-buckling") {
    return (
      <VisualShell title="Laminate buckling troubleshooting view">
        <ProblemCauseVisual
          includeExpansion
          rows={[
            ["Moisture", "Raised seams, swollen edges", "Check leaks, doors, cleaning, and subfloor moisture"],
            ["Blocked expansion", "Peaking or buckling near walls", "Inspect perimeter gaps, trim, and transitions"],
            ["Fixed objects", "Pressure away from cabinets or islands", "Check whether the floating floor is pinned"],
            ["Wrong underlayment", "Soft feel or movement", "Verify approved pad and no doubled layers"]
          ]}
        />
      </VisualShell>
    );
  }

  if (guide.slug === "why-is-my-hardwood-floor-gapping") {
    return (
      <VisualShell title="Hardwood gapping troubleshooting view">
        <ProblemCauseVisual
          rows={[
            ["Seasonal dryness", "Small gaps in winter", "Track indoor humidity and whether gaps close later"],
            ["Poor acclimation", "Gaps soon after install", "Review jobsite conditions and moisture readings"],
            ["Moisture imbalance", "Gaps plus cupping or crowning", "Check crawlspace, slab, leaks, and HVAC"],
            ["Product behavior", "Wider gaps in solid wood", "Compare solid vs engineered expectations"]
          ]}
        />
      </VisualShell>
    );
  }

  if (guide.slug === "why-is-my-carpet-wrinkling-or-buckling") {
    return (
      <VisualShell title="Carpet wrinkling troubleshooting view">
        <ProblemCauseVisual
          rows={[
            ["Loose stretch", "Ripples across open room", "Ask whether power stretching was used"],
            ["Padding issue", "Soft movement or premature wrinkles", "Check pad thickness, density, and condition"],
            ["Furniture movement", "Wrinkles along traffic paths", "Look for dragged furniture or rolling loads"],
            ["Backing failure", "Bubbles, soft spots, or crunching", "Have backing and delamination evaluated"]
          ]}
        />
      </VisualShell>
    );
  }

  if (guide.slug === "why-is-my-tile-cracking") {
    return (
      <VisualShell title="Tile cracking troubleshooting view">
        <ProblemCauseVisual
          rows={[
            ["Subfloor movement", "Cracks or grout lines repeating", "Check framing, deflection, and underlayment"],
            ["Poor coverage", "Hollow sound near cracks", "Tap nearby tiles and check for loose areas"],
            ["Slab crack", "Crack follows a straight line", "Inspect concrete and isolation requirements"],
            ["Expansion movement", "Cracks near edges or sunny areas", "Review movement joints and perimeter gaps"]
          ]}
        />
      </VisualShell>
    );
  }

  if (["flooring-transition-guide", "t-mold-vs-reducer-vs-end-cap", "why-is-my-transition-strip-moving"].includes(guide.slug)) {
    return (
      <VisualShell title="Transition profile quick comparison">
        <div className="grid gap-3">
          <TransitionTypeDiagram />
          <TransitionTable />
        </div>
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

  if (["carpet-seam-direction-guide", "what-direction-should-carpet-run", "why-are-my-carpet-seams-visible", "what-is-pattern-match-in-carpet"].includes(guide.slug)) {
    return (
      <VisualShell title="Carpet seam planning example">
        <CarpetSeamDiagram />
      </VisualShell>
    );
  }

  if (
    [
      "why-is-my-floor-clicking",
      "why-is-my-lvp-floor-clicking",
      "why-is-my-lvp-lifting",
      "laminate-floor-separating-what-to-check-first",
      "why-does-my-floor-feel-hollow",
      "glue-down-vs-floating-floor"
    ].includes(guide.slug)
  ) {
    return (
      <VisualShell title="Floating floor movement concept">
        <ExpansionGapDiagram />
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
