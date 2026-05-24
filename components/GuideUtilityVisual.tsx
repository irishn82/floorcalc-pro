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
  if (["flooring-transition-guide", "t-mold-vs-reducer-vs-end-cap", "why-is-my-transition-strip-moving"].includes(guide.slug)) {
    return (
      <VisualShell title="Transition profile quick comparison">
        <TransitionTable />
      </VisualShell>
    );
  }

  if (["which-direction-should-flooring-run", "luxury-vinyl-over-tile"].includes(guide.slug)) {
    return (
      <VisualShell title="Layout direction examples">
        <PlankDirectionVisual />
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
