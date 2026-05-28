export type CauseSymptomCheckRow = {
  cause: string;
  symptom: string;
  check: string;
};

type CauseSymptomCheckTableProps = {
  rows: CauseSymptomCheckRow[];
};

export function CauseSymptomCheckTable({ rows }: CauseSymptomCheckTableProps) {
  if (rows.length === 0) {
    return null;
  }

  return (
    <>
      <div className="grid gap-3 sm:hidden">
        {rows.map((row) => (
          <article key={`${row.cause}-${row.symptom}`} className="rounded-lg border border-line bg-white p-3 shadow-sm">
            <p className="text-sm font-black text-ink">{row.cause}</p>
            <dl className="mt-3 space-y-2 text-sm leading-6">
              <div>
                <dt className="text-[0.65rem] font-bold uppercase tracking-wide text-accent-700">Likely symptom</dt>
                <dd className="mt-0.5 text-slate-600">{row.symptom}</dd>
              </div>
              <div>
                <dt className="text-[0.65rem] font-bold uppercase tracking-wide text-accent-700">What to check</dt>
                <dd className="mt-0.5 text-slate-600">{row.check}</dd>
              </div>
            </dl>
          </article>
        ))}
      </div>
      <div className="hidden overflow-hidden rounded-lg border border-line bg-white shadow-sm sm:block">
        <table className="w-full table-fixed text-left text-sm">
          <thead className="bg-accent-50 text-xs font-bold uppercase tracking-wide text-accent-800">
            <tr>
              <th className="break-words p-3">Possible cause</th>
              <th className="break-words p-3">Likely symptom</th>
              <th className="break-words p-3">What to check</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-line">
            {rows.map((row) => (
              <tr key={`${row.cause}-${row.symptom}`} className="align-top">
                <td className="break-words p-3 font-bold text-ink">{row.cause}</td>
                <td className="break-words p-3 leading-6 text-slate-600">{row.symptom}</td>
                <td className="break-words p-3 leading-6 text-slate-600">{row.check}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
