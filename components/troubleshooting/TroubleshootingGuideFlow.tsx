import { CauseSymptomCheckTable, type CauseSymptomCheckRow } from "@/components/troubleshooting/CauseSymptomCheckTable";
import { WhatToCheckFirst } from "@/components/troubleshooting/WhatToCheckFirst";
import { WhenToCallAPro } from "@/components/troubleshooting/WhenToCallAPro";

type TroubleshootingGuideFlowProps = {
  causeRows: CauseSymptomCheckRow[];
  whatToCheckFirst: string[];
  whenToCallAPro: string[];
};

export function TroubleshootingGuideFlow({
  causeRows,
  whatToCheckFirst,
  whenToCallAPro
}: TroubleshootingGuideFlowProps) {
  return (
    <div className="mt-6 space-y-4 rounded-lg border border-line bg-field p-4 shadow-sm">
      <div>
        <p className="text-xs font-bold uppercase tracking-wide text-accent-700">Troubleshooting flow</p>
        <h2 className="mt-1 text-xl font-black tracking-normal text-ink">Diagnose the problem before choosing a repair</h2>
        <p className="mt-2 text-sm leading-6 text-slate-600">
          Start with the pattern, check the most likely causes, then decide whether the repair is simple or needs an installer.
        </p>
      </div>
      <CauseSymptomCheckTable rows={causeRows} />
      <div className="grid gap-4 lg:grid-cols-2">
        <WhatToCheckFirst items={whatToCheckFirst} />
        <WhenToCallAPro items={whenToCallAPro} />
      </div>
    </div>
  );
}
