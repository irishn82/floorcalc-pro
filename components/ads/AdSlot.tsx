type AdSlotProps = {
  placement: string;
};

export function AdSlot({ placement }: AdSlotProps) {
  return <div data-ad-placement={placement} className="hidden" aria-hidden="true" />;
}
