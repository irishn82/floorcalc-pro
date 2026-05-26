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
    <div className="overflow-x-auto rounded-lg border border-line bg-white shadow-sm">
      <table className="w-full min-w-[36rem] text-left text-sm">
        <thead className="bg-accent-50 text-xs font-bold uppercase tracking-wide text-accent-800">
          <tr>
            <th className="p-3">Possible cause</th>
            <th className="p-3">Likely symptom</th>
            <th className="p-3">What to check</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-line">
          {rows.map((row) => (
            <tr key={`${row.cause}-${row.symptom}`} className="align-top">
              <td className="p-3 font-bold text-ink">{row.cause}</td>
              <td className="p-3 leading-6 text-slate-600">{row.symptom}</td>
              <td className="p-3 leading-6 text-slate-600">{row.check}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
