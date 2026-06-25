import Link from "next/link";
import { FlooringIcon } from "@/components/FlooringIcon";
import type { Guide } from "@/data/types";

type VerificationItem = {
  title: string;
  body: string;
};

function guideText(guide: Guide) {
  return `${guide.slug} ${guide.title} ${guide.description} ${(guide.materialTypes ?? []).join(" ")}`.toLowerCase();
}

function getVerificationItems(guide: Guide): VerificationItem[] {
  const text = guideText(guide);
  const items: VerificationItem[] = [
    {
      title: "Manufacturer instructions reviewed",
      body: "Use the written product instructions as the deciding source for repair method, underlayment, expansion, moisture, and flatness requirements."
    },
    {
      title: "Field conditions documented",
      body: "Take photos, note when the symptom started, and map where clicking, separation, swelling, hollow sound, or movement appears."
    }
  ];

  if (text.includes("moisture") || text.includes("concrete") || text.includes("slab") || text.includes("humidity")) {
    items.push({
      title: "Moisture conditions checked",
      body: "Do not assume a universal safe number. Compare room, subfloor, slab, adhesive, and product requirements before repair or installation."
    });
  }

  if (text.includes("flat") || text.includes("subfloor") || text.includes("hollow") || text.includes("bounce")) {
    items.push({
      title: "Subfloor support verified",
      body: "Look for low spots, humps, loose panels, deflection, soft underlayment, or hollow areas before blaming the finished floor."
    });
  }

  if (text.includes("separat") || text.includes("click") || text.includes("buckl") || text.includes("peak") || text.includes("lift")) {
    items.push({
      title: "Movement and pinch points checked",
      body: "Inspect expansion space, transitions, door jambs, cabinets, islands, trim, and fixed objects before forcing joints closed or flat."
    });
  }

  if (text.includes("laminate") || text.includes("lvp") || text.includes("vinyl")) {
    items.push({
      title: "Locking joints inspected",
      body: "Check for crushed, chipped, swollen, dirty, or partially engaged locking edges before tapping, gluing, or replacing boards."
    });
  }

  if (text.includes("hardwood") || text.includes("engineered")) {
    items.push({
      title: "Wood movement context checked",
      body: "Compare indoor humidity, acclimation, substrate moisture, and seasonal movement before sanding, filling, or replacing boards."
    });
  }

  if (text.includes("tile") || text.includes("crack")) {
    items.push({
      title: "Movement source checked",
      body: "Cracks and hollow tile can involve substrate movement, mortar coverage, deflection, or slab cracks; avoid treating the surface only."
    });
  }

  if (text.includes("carpet") || text.includes("seam")) {
    items.push({
      title: "Carpet system checked",
      body: "Review seam direction, roll width, pattern match, cushion, stretch, lighting, and traffic before judging seam visibility or wrinkles."
    });
  }

  return items.slice(0, 6);
}

export function FieldVerificationChecklist({ guide }: { guide: Guide }) {
  const items = getVerificationItems(guide);

  return (
    <section className="mt-5 rounded-lg border border-accent-100 bg-accent-50 p-4 shadow-sm">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <p className="text-xs font-bold uppercase tracking-wide text-accent-700">Before you choose a fix</p>
          <h2 className="mt-1 inline-flex items-center gap-2 text-lg font-black text-ink">
            <span className="grid h-8 w-8 place-items-center rounded-lg border border-accent-100 bg-white text-accent-700">
              <FlooringIcon name="shield" className="h-4 w-4" />
            </span>
            Verify the field conditions first
          </h2>
          <p className="mt-2 max-w-3xl text-sm leading-6 text-slate-700">
            Use this as a quick pre-repair check. A likely cause is not a confirmed diagnosis until product requirements and jobsite conditions are verified.
          </p>
        </div>
        <Link
          href="/decision-trees"
          className="inline-flex shrink-0 rounded-md border border-accent-200 bg-white px-3 py-2 text-sm font-bold text-accent-700 transition hover:border-accent-300 hover:text-accent-600"
        >
          Guided help
        </Link>
      </div>
      <div className="mt-4 grid gap-2 sm:grid-cols-2">
        {items.map((item) => (
          <div key={item.title} className="rounded-md border border-accent-100 bg-white p-3">
            <h3 className="text-sm font-black text-ink">{item.title}</h3>
            <p className="mt-1.5 text-sm leading-6 text-slate-600">{item.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
