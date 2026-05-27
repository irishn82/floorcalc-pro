"use client";

import { useMemo, useState } from "react";
import { NumberInput } from "@/components/NumberInput";
import { ResultBox } from "@/components/ResultBox";
import { SelectInput } from "@/components/SelectInput";
import type { CalculatorType } from "@/data/types";
import {
  calculateCarpetSeams,
  calculateCartons,
  calculatePatternRepeat,
  calculateRooms,
  type RoomInput,
  calculateStairFlooring,
  calculateTransitions,
  calculateWaste
} from "@/lib/calculators/flooring";

type ToolCalculatorProps = {
  type: CalculatorType;
};

type CartonInputProps = {
  value: string;
  onChange: (value: string) => void;
};

type CartonResultProps = {
  materialSquareFeet: number;
  squareFeetPerCarton: number;
  context: string;
};

type ResultMetricProps = {
  label: string;
  value: string;
};

type OptionalMeasurementInputProps = {
  label: string;
  value: string;
  onChange: (value: string) => void;
  suffix: string;
  placeholder?: string;
};

type CarpetSeamLayoutVisualizerProps = {
  roomLength: number;
  roomWidth: number;
  rollWidth: number;
  drops: ReturnType<typeof calculateCarpetSeams>["dropWidths"];
  seamCount: number;
  patternRepeatLength: number;
  patternRepeatWidth: number;
};

const cartonHelpText =
  "Carton and box coverage varies by product. Verify the square footage on the product label or spec sheet before ordering.";

export function ToolCalculator({ type }: ToolCalculatorProps) {
  switch (type) {
    case "square-footage":
      return <SquareFootageCalculator />;
    case "waste":
      return <WasteCalculator />;
    case "stairs":
      return <StairCalculator />;
    case "carpet-seam":
      return <CarpetSeamCalculator />;
    case "pattern-repeat":
      return <PatternRepeatCalculator />;
    case "transition":
      return <TransitionCalculator />;
  }
}

function formatNumber(value: number) {
  return value.toLocaleString(undefined, { maximumFractionDigits: 1 });
}

function parseOptionalNumber(value: string) {
  return Number(value) || 0;
}

function ResultMetric({ label, value }: ResultMetricProps) {
  return (
    <div className="rounded-md border border-line bg-white p-3">
      <dt className="text-xs font-bold uppercase tracking-wide text-slate-500">{label}</dt>
      <dd className="mt-1 text-base font-black text-ink">{value}</dd>
    </div>
  );
}

function ResultMetrics({ items }: { items: ResultMetricProps[] }) {
  return (
    <dl className="grid gap-3 sm:grid-cols-2">
      {items.map((item) => (
        <ResultMetric key={item.label} label={item.label} value={item.value} />
      ))}
    </dl>
  );
}

function CartonInput({ value, onChange }: CartonInputProps) {
  return (
    <label className="block">
      <span className="text-sm font-semibold text-slate-700">Sq ft per carton/box (optional)</span>
      <div className="mt-2 flex overflow-hidden rounded-md border border-line bg-white focus-within:border-accent-500 focus-within:ring-2 focus-within:ring-accent-100">
        <input
          className="min-w-0 flex-1 border-0 px-3 py-2.5 text-ink outline-none"
          type="number"
          min={0}
          step={0.01}
          inputMode="decimal"
          placeholder="Example: 23.64"
          value={value}
          onChange={(event) => onChange(event.target.value)}
        />
        <span className="grid min-w-[4rem] place-items-center border-l border-line bg-field px-3 text-sm font-semibold text-slate-500">
          sq ft
        </span>
      </div>
      <p className="mt-2 text-xs leading-5 text-slate-500">{cartonHelpText}</p>
    </label>
  );
}

function OptionalMeasurementInput({
  label,
  value,
  onChange,
  suffix,
  placeholder = "Optional"
}: OptionalMeasurementInputProps) {
  return (
    <label className="block">
      <span className="text-sm font-semibold text-slate-700">{label}</span>
      <div className="mt-2 flex overflow-hidden rounded-md border border-line bg-white focus-within:border-accent-500 focus-within:ring-2 focus-within:ring-accent-100">
        <input
          className="min-w-0 flex-1 border-0 px-3 py-2.5 text-ink outline-none"
          type="number"
          min={0}
          step={0.1}
          inputMode="decimal"
          placeholder={placeholder}
          value={value}
          onChange={(event) => onChange(event.target.value)}
        />
        <span className="grid min-w-[3.5rem] place-items-center border-l border-line bg-field px-3 text-sm font-semibold text-slate-500">
          {suffix}
        </span>
      </div>
    </label>
  );
}

function CartonResult({ materialSquareFeet, squareFeetPerCarton, context }: CartonResultProps) {
  const cartonsNeeded = calculateCartons(materialSquareFeet, squareFeetPerCarton);

  if (!cartonsNeeded) {
    return null;
  }

  return (
    <div className="rounded-md border border-accent-100 bg-white p-4">
      <p className="text-sm font-bold text-ink">Cartons/boxes needed: {cartonsNeeded.toLocaleString()}</p>
      <p className="mt-2 text-xs leading-5 text-slate-500">
        Based on {formatNumber(materialSquareFeet)} sq ft and {formatNumber(squareFeetPerCarton)} sq ft per carton/box.
        {context}
      </p>
    </div>
  );
}

function CarpetSeamLayoutVisualizer({
  roomLength,
  roomWidth,
  rollWidth,
  drops,
  seamCount,
  patternRepeatLength,
  patternRepeatWidth
}: CarpetSeamLayoutVisualizerProps) {
  const safeLength = Math.max(roomLength, 1);
  const safeWidth = Math.max(roomWidth, 1);
  const maxRoomWidth = 320;
  const maxRoomHeight = 170;
  const scale = Math.min(maxRoomWidth / safeLength, maxRoomHeight / safeWidth);
  const roomSvgWidth = Math.max(120, safeLength * scale);
  const roomSvgHeight = Math.max(64, safeWidth * scale);
  const roomX = 58 + (maxRoomWidth - roomSvgWidth) / 2;
  const roomY = 38 + (maxRoomHeight - roomSvgHeight) / 2;
  const seamPositions = drops.slice(0, -1).map((drop) => roomY + (drop.endFeet / safeWidth) * roomSvgHeight);
  const hasPatternRepeat = patternRepeatLength > 0 || patternRepeatWidth > 0;

  return (
    <section className="rounded-lg border border-line bg-white p-4 shadow-sm">
      <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <h3 className="text-base font-black text-ink">Carpet seam layout visualizer</h3>
          <p className="mt-1 text-sm leading-6 text-slate-600">
            SVG planning view based on the selected room size and carpet roll width.
          </p>
        </div>
        <span className="inline-flex w-fit rounded-md border border-amber-200 bg-amber-50 px-2.5 py-1 text-xs font-bold uppercase tracking-wide text-amber-900">
          Planning visual only
        </span>
      </div>

      <div className="mt-4 grid gap-2 sm:grid-cols-2">
        <ResultMetric label="Room length" value={`${formatNumber(roomLength)} ft`} />
        <ResultMetric label="Room width" value={`${formatNumber(roomWidth)} ft`} />
        <ResultMetric label="Carpet roll width" value={`${formatNumber(rollWidth)} ft`} />
        <ResultMetric label="Estimated drop count" value={drops.length.toLocaleString()} />
      </div>

      <div className="mt-4 overflow-hidden rounded-md border border-line bg-field">
        <svg
          className="block h-auto w-full"
          role="img"
          aria-label="Planning visual only carpet seam layout diagram"
          viewBox="0 0 420 270"
          preserveAspectRatio="xMidYMid meet"
        >
          <rect width="420" height="270" fill="#f8fafc" />

          <rect x={roomX} y={roomY} width={roomSvgWidth} height={roomSvgHeight} rx="6" fill="#ffffff" stroke="#1f6feb" strokeWidth="2" />

          {drops.map((drop, index) => {
            const y = roomY + (drop.startFeet / safeWidth) * roomSvgHeight;
            const height = Math.max(1, (drop.widthFeet / safeWidth) * roomSvgHeight);

            return (
              <g key={drop.index}>
                <rect
                  x={roomX}
                  y={y}
                  width={roomSvgWidth}
                  height={height}
                  fill={index % 2 === 0 ? "#dcecff" : "#eff7ff"}
                  opacity="0.85"
                />
              </g>
            );
          })}

          {seamPositions.map((y, index) => (
            <g key={`seam-${index + 1}`}>
              <line x1={roomX} y1={y} x2={roomX + roomSvgWidth} y2={y} stroke="#dc2626" strokeWidth="2" strokeDasharray="6 5" />
            </g>
          ))}

          <line x1={roomX} y1={roomY + roomSvgHeight + 16} x2={roomX + roomSvgWidth} y2={roomY + roomSvgHeight + 16} stroke="#64748b" strokeWidth="1.5" />
          <line x1={roomX} y1={roomY + roomSvgHeight + 11} x2={roomX} y2={roomY + roomSvgHeight + 21} stroke="#64748b" strokeWidth="1.5" />
          <line x1={roomX + roomSvgWidth} y1={roomY + roomSvgHeight + 11} x2={roomX + roomSvgWidth} y2={roomY + roomSvgHeight + 21} stroke="#64748b" strokeWidth="1.5" />

          <line x1={roomX - 16} y1={roomY} x2={roomX - 16} y2={roomY + roomSvgHeight} stroke="#64748b" strokeWidth="1.5" />
          <line x1={roomX - 21} y1={roomY} x2={roomX - 11} y2={roomY} stroke="#64748b" strokeWidth="1.5" />
          <line x1={roomX - 21} y1={roomY + roomSvgHeight} x2={roomX - 11} y2={roomY + roomSvgHeight} stroke="#64748b" strokeWidth="1.5" />
        </svg>
      </div>

      <div className="mt-3 grid gap-2 text-xs leading-5 text-slate-600 sm:grid-cols-3">
        <p>
          <span className="mr-2 inline-block h-2.5 w-5 rounded-sm bg-[#dcecff]" aria-hidden="true" />
          Alternating bands represent estimated carpet drops.
        </p>
        <p>
          <span className="mr-2 inline-block h-0.5 w-5 border-t-2 border-dashed border-red-600 align-middle" aria-hidden="true" />
          Dashed red lines mark likely seam locations.
        </p>
        <p>
          {seamCount === 0
            ? "One carpet drop covers the room width in this planning view."
            : `${seamCount} seam line${seamCount === 1 ? "" : "s"} shown in this planning view.`}
        </p>
      </div>

      <p className="mt-3 text-sm leading-6 text-slate-600">
        This diagram assumes carpet drops run along the room length. It does not show exact installer-ready seam
        placement, doorway decisions, pattern matching, or pile direction.
      </p>
      {hasPatternRepeat ? (
        <p className="mt-3 rounded-md border border-amber-200 bg-amber-50 p-3 text-sm leading-6 text-amber-950">
          Pattern repeat entered: {patternRepeatLength > 0 ? `${formatNumber(patternRepeatLength)} in length` : "no length value"}
          {" and "}
          {patternRepeatWidth > 0 ? `${formatNumber(patternRepeatWidth)} in width` : "no width value"}. Pattern repeat may
          increase carpet material and affect seam planning. Confirm pattern matching with the carpet installer.
        </p>
      ) : null}
    </section>
  );
}

function SquareFootageCalculator() {
  const [nextRoom, setNextRoom] = useState(2);
  const [cartonSquareFeet, setCartonSquareFeet] = useState("");
  const [rooms, setRooms] = useState<RoomInput[]>([
    { id: "room-1", name: "Room 1", length: 12, width: 10 }
  ]);

  const result = useMemo(() => calculateRooms(rooms), [rooms]);
  const cartonCoverage = parseOptionalNumber(cartonSquareFeet);

  function updateRoom(id: string, field: keyof RoomInput, value: string | number) {
    setRooms((current) => current.map((room) => (room.id === id ? { ...room, [field]: value } : room)));
  }

  function addRoom() {
    const id = `room-${nextRoom}`;
    setRooms((current) => [...current, { id, name: `Room ${nextRoom}`, length: 10, width: 10 }]);
    setNextRoom((current) => current + 1);
  }

  function removeRoom(id: string) {
    setRooms((current) => current.filter((room) => room.id !== id));
  }

  return (
    <div className="space-y-7">
      <div className="space-y-4">
        {rooms.map((room, index) => {
          const roomSquareFeet = result.roomResults.find((item) => item.id === room.id)?.squareFeet ?? 0;

          return (
            <div key={room.id} className="rounded-lg border border-line bg-field p-4 sm:p-5">
              <div className="flex flex-col gap-3 border-b border-line pb-4 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <p className="text-sm font-bold text-ink">{room.name || `Room ${index + 1}`}</p>
                  <p className="mt-1 text-xs leading-5 text-slate-500">Measured area: {formatNumber(roomSquareFeet)} sq ft</p>
                </div>
                <button
                  type="button"
                  className="w-full rounded-md border border-line bg-white px-4 py-2 text-sm font-bold text-slate-700 transition hover:border-red-200 hover:bg-red-50 hover:text-red-700 sm:w-auto"
                  onClick={() => removeRoom(room.id)}
                >
                  Remove
                </button>
              </div>
              <div className="mt-4 grid gap-4 md:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)_minmax(0,1fr)]">
                <label className="block">
                  <span className="text-sm font-semibold text-slate-700">Room name</span>
                  <input
                    className="mt-2 w-full rounded-md border border-line bg-white px-3 py-2.5 text-ink outline-none transition focus:border-accent-500 focus:ring-2 focus:ring-accent-100"
                    value={room.name}
                    onChange={(event) => updateRoom(room.id, "name", event.target.value)}
                  />
                </label>
                <NumberInput
                  label="Length"
                  value={room.length}
                  onChange={(value) => updateRoom(room.id, "length", value)}
                  suffix="ft"
                />
                <NumberInput
                  label="Width"
                  value={room.width}
                  onChange={(value) => updateRoom(room.id, "width", value)}
                  suffix="ft"
                />
              </div>
            </div>
          );
        })}
      </div>

      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <button
          type="button"
          className="rounded-md bg-ink px-5 py-3 text-sm font-bold text-white transition hover:bg-slate-800"
          onClick={addRoom}
        >
          Add Room
        </button>
        <p className="text-sm leading-6 text-slate-500">Use this as the measured base before waste, trim, or installer adjustments.</p>
      </div>

      <div className="rounded-lg border border-line bg-white p-4">
        <CartonInput value={cartonSquareFeet} onChange={setCartonSquareFeet} />
      </div>

      <ResultBox
        title="Total square footage"
        value={`${formatNumber(result.totalSquareFeet)} sq ft`}
        detail="This is the measured base amount. Add waste before final hard surface carton counts or carpet roll planning."
      >
        <div className="space-y-4">
          <CartonResult
            materialSquareFeet={result.totalSquareFeet}
            squareFeetPerCarton={cartonCoverage}
            context=" This conversion is before waste; use the waste calculator for a final hard surface material order."
          />
          <div className="overflow-x-auto rounded-md border border-line bg-white">
            <table className="w-full min-w-[20rem] text-left text-sm">
              <thead className="bg-field text-slate-600">
                <tr>
                  <th className="px-3 py-2 font-bold">Room</th>
                  <th className="px-3 py-2 font-bold">Sq ft</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-line">
                {result.roomResults.map((room) => (
                  <tr key={room.id}>
                    <td className="px-3 py-2">{room.name || "Unnamed room"}</td>
                    <td className="px-3 py-2 font-semibold text-ink">{formatNumber(room.squareFeet)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </ResultBox>
    </div>
  );
}

function WasteCalculator() {
  const [baseSquareFeet, setBaseSquareFeet] = useState(500);
  const [wastePercentage, setWastePercentage] = useState("10");
  const [cartonSquareFeet, setCartonSquareFeet] = useState("");
  const result = calculateWaste(baseSquareFeet, Number(wastePercentage));
  const cartonCoverage = parseOptionalNumber(cartonSquareFeet);

  return (
    <div className="space-y-7">
      <div className="grid gap-4 sm:grid-cols-2">
        <NumberInput label="Base square footage" value={baseSquareFeet} onChange={setBaseSquareFeet} suffix="sq ft" />
        <SelectInput
          label="Waste percentage"
          value={wastePercentage}
          onChange={setWastePercentage}
          options={[
            { label: "5%", value: "5" },
            { label: "10%", value: "10" },
            { label: "15%", value: "15" },
            { label: "20%", value: "20" }
          ]}
        />
      </div>
      <div className="rounded-lg border border-line bg-white p-4">
        <CartonInput value={cartonSquareFeet} onChange={setCartonSquareFeet} />
      </div>
      <ResultBox
        title="Total material needed"
        value={`${formatNumber(result.totalSquareFeet)} sq ft`}
        detail="This estimate includes base square footage plus the selected waste allowance."
      >
        <div className="space-y-4">
          <ResultMetrics
            items={[
              { label: "Extra waste", value: `${formatNumber(result.extraSquareFeet)} sq ft` },
              { label: "Waste rate", value: `${wastePercentage}%` }
            ]}
          />
          <CartonResult
            materialSquareFeet={result.totalSquareFeet}
            squareFeetPerCarton={cartonCoverage}
            context=" Rounded up to the next whole carton or box."
          />
        </div>
      </ResultBox>
    </div>
  );
}

function StairCalculator() {
  const [stairCount, setStairCount] = useState(12);
  const [treadDepth, setTreadDepth] = useState(10);
  const [riserHeight, setRiserHeight] = useState(7);
  const [stairWidth, setStairWidth] = useState(36);
  const result = calculateStairFlooring(stairCount, treadDepth, riserHeight, stairWidth);

  return (
    <div className="space-y-7">
      <div className="grid gap-4 sm:grid-cols-2">
        <NumberInput label="Number of stairs" value={stairCount} onChange={setStairCount} step={1} />
        <NumberInput label="Tread depth" value={treadDepth} onChange={setTreadDepth} suffix="in" />
        <NumberInput label="Riser height" value={riserHeight} onChange={setRiserHeight} suffix="in" />
        <NumberInput label="Stair width" value={stairWidth} onChange={setStairWidth} suffix="in" />
      </div>
      <ResultBox
        title="Estimated stair flooring"
        value={`${formatNumber(result.squareFeet)} sq ft`}
        detail="This covers tread and riser face area only. Landings, stair noses, returns, runners, and product-specific stair parts can change the final material order."
      />
    </div>
  );
}

function CarpetSeamCalculator() {
  const [roomLength, setRoomLength] = useState(18);
  const [roomWidth, setRoomWidth] = useState(14);
  const [rollWidth, setRollWidth] = useState("12");
  const [patternRepeatLength, setPatternRepeatLength] = useState("");
  const [patternRepeatWidth, setPatternRepeatWidth] = useState("");
  const result = calculateCarpetSeams(roomLength, roomWidth, Number(rollWidth));
  const patternRepeatLengthValue = parseOptionalNumber(patternRepeatLength);
  const patternRepeatWidthValue = parseOptionalNumber(patternRepeatWidth);

  return (
    <div className="space-y-7">
      <div className="rounded-lg border border-line bg-field p-4 text-sm leading-6 text-slate-600">
        This tool is for broadloom carpet layout planning. It estimates carpet drops and seam likelihood, not exact final seam placement.
      </div>
      <div className="grid gap-4 sm:grid-cols-3">
        <NumberInput label="Carpeted room length" value={roomLength} onChange={setRoomLength} suffix="ft" />
        <NumberInput label="Carpeted room width" value={roomWidth} onChange={setRoomWidth} suffix="ft" />
        <SelectInput
          label="Carpet roll width"
          value={rollWidth}
          onChange={setRollWidth}
          options={[
            { label: "12 ft carpet roll", value: "12" },
            { label: "15 ft carpet roll", value: "15" }
          ]}
        />
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <OptionalMeasurementInput
          label="Pattern repeat length (optional)"
          value={patternRepeatLength}
          onChange={setPatternRepeatLength}
          suffix="in"
          placeholder="Example: 18"
        />
        <OptionalMeasurementInput
          label="Pattern repeat width (optional)"
          value={patternRepeatWidth}
          onChange={setPatternRepeatWidth}
          suffix="in"
          placeholder="Example: 12"
        />
      </div>
      <ResultBox
        title="Carpet seam estimate"
        value={result.seamLikelihood}
        detail="Final carpet seam placement depends on carpet roll width, room layout, pattern, lighting, traffic direction, pile direction, and installer judgment."
      >
        <ResultMetrics
          items={[
            { label: "Estimated carpet drops", value: result.drops.toLocaleString() },
            { label: "Estimated roll area", value: `${formatNumber(result.estimatedMaterialSquareFeet)} sq ft` }
          ]}
        />
      </ResultBox>
      <CarpetSeamLayoutVisualizer
        roomLength={roomLength}
        roomWidth={roomWidth}
        rollWidth={Number(rollWidth)}
        drops={result.dropWidths}
        seamCount={result.seams}
        patternRepeatLength={patternRepeatLengthValue}
        patternRepeatWidth={patternRepeatWidthValue}
      />
    </div>
  );
}

function PatternRepeatCalculator() {
  const [roomSquareFeet, setRoomSquareFeet] = useState(500);
  const [repeatSize, setRepeatSize] = useState(24);
  const [baseWastePercentage, setBaseWastePercentage] = useState("10");
  const [cartonSquareFeet, setCartonSquareFeet] = useState("");
  const result = calculatePatternRepeat(roomSquareFeet, repeatSize, Number(baseWastePercentage));
  const cartonCoverage = parseOptionalNumber(cartonSquareFeet);

  return (
    <div className="space-y-7">
      <div className="grid gap-4 lg:grid-cols-3">
        <NumberInput label="Room square footage" value={roomSquareFeet} onChange={setRoomSquareFeet} suffix="sq ft" />
        <NumberInput label="Pattern repeat size" value={repeatSize} onChange={setRepeatSize} suffix="in" />
        <SelectInput
          label="Base waste percentage"
          value={baseWastePercentage}
          onChange={setBaseWastePercentage}
          options={[
            { label: "5%", value: "5" },
            { label: "10%", value: "10" },
            { label: "15%", value: "15" },
            { label: "20%", value: "20" }
          ]}
        />
      </div>
      <div className="rounded-lg border border-line bg-white p-4">
        <CartonInput value={cartonSquareFeet} onChange={setCartonSquareFeet} />
      </div>
      <ResultBox
        title="Adjusted material estimate"
        value={`${formatNumber(result.totalSquareFeet)} sq ft`}
        detail="This estimate combines base waste with an additional pattern-repeat allowance for planning."
      >
        <div className="space-y-4">
          <ResultMetrics
            items={[
              { label: "Adjusted waste", value: `${result.adjustedWastePercentage}%` },
              { label: "Extra material", value: `${formatNumber(result.extraSquareFeet)} sq ft` },
              { label: "Base waste", value: `${baseWastePercentage}%` },
              { label: "Repeat allowance", value: `${result.repeatAdjustmentPercentage}%` }
            ]}
          />
          <CartonResult
            materialSquareFeet={result.totalSquareFeet}
            squareFeetPerCarton={cartonCoverage}
            context=" Use this only for hard surface patterned products sold by carton or box."
          />
        </div>
      </ResultBox>
    </div>
  );
}

function TransitionCalculator() {
  const [openingCount, setOpeningCount] = useState(5);
  const [averageOpeningWidth, setAverageOpeningWidth] = useState(3);
  const result = calculateTransitions(openingCount, averageOpeningWidth);

  return (
    <div className="space-y-7">
      <div className="grid gap-4 sm:grid-cols-2">
        <NumberInput label="Number of openings" value={openingCount} onChange={setOpeningCount} step={1} />
        <NumberInput
          label="Average opening width"
          value={averageOpeningWidth}
          onChange={setAverageOpeningWidth}
          suffix="ft"
        />
      </div>
      <ResultBox
        title="Estimated transition length"
        value={`${formatNumber(result.linearFeet)} linear ft`}
        detail="Round up to available trim lengths and separate T-molds, reducers, end caps, thresholds, and stair noses before ordering."
      />
    </div>
  );
}
