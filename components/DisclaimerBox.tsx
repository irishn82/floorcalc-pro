import type { ReactNode } from "react";

type DisclaimerBoxProps = {
  children: ReactNode;
};

export function DisclaimerBox({ children }: DisclaimerBoxProps) {
  return (
    <div className="rounded-lg border border-amber-200 bg-amber-50 p-4 text-sm leading-6 text-amber-950">
      <strong className="font-bold">Estimate disclaimer: </strong>
      {children}
    </div>
  );
}
