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
  const result = calculateCarpetSeams(roomLength, roomWidth, Number(rollWidth));

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
