"use client";

import { useMemo, useState } from "react";
import { NumberInput } from "@/components/NumberInput";
import { ResultBox } from "@/components/ResultBox";
import { SelectInput } from "@/components/SelectInput";
import type { CalculatorType } from "@/data/types";
import {
  calculateCarpetSeams,
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

function SquareFootageCalculator() {
  const [nextRoom, setNextRoom] = useState(2);
  const [rooms, setRooms] = useState<RoomInput[]>([
    { id: "room-1", name: "Room 1", length: 12, width: 10 }
  ]);

  const result = useMemo(() => calculateRooms(rooms), [rooms]);

  function updateRoom(id: string, field: keyof RoomInput, value: string | number) {
    setRooms((current) =>
      current.map((room) => (room.id === id ? { ...room, [field]: value } : room))
    );
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
    <div className="space-y-6">
      <div className="space-y-4">
        {rooms.map((room) => (
          <div key={room.id} className="rounded-lg border border-line bg-field p-4">
            <div className="grid gap-4 sm:grid-cols-[1.1fr_1fr_1fr_auto] sm:items-end">
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
              <button
                type="button"
                className="rounded-md border border-line bg-white px-4 py-2.5 text-sm font-bold text-slate-700 transition hover:border-red-200 hover:bg-red-50 hover:text-red-700"
                onClick={() => removeRoom(room.id)}
              >
                Remove
              </button>
            </div>
            <p className="mt-3 text-sm font-semibold text-slate-600">
              {room.name || "Room"}:{" "}
              <span className="text-ink">
                {result.roomResults.find((item) => item.id === room.id)?.squareFeet ?? 0} sq ft
              </span>
            </p>
          </div>
        ))}
      </div>

      <div className="flex flex-col gap-4 sm:flex-row">
        <button
          type="button"
          className="rounded-md bg-ink px-5 py-3 text-sm font-bold text-white transition hover:bg-slate-800"
          onClick={addRoom}
        >
          Add Room
        </button>
      </div>

      <ResultBox
        title="Total square footage"
        value={`${result.totalSquareFeet.toLocaleString()} sq ft`}
        detail="Use this measured total as the base amount before adding waste or converting to cartons."
      >
        <div className="overflow-hidden rounded-md border border-line bg-white">
          <table className="w-full text-left text-sm">
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
                  <td className="px-3 py-2 font-semibold text-ink">{room.squareFeet}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </ResultBox>
    </div>
  );
}

function WasteCalculator() {
  const [baseSquareFeet, setBaseSquareFeet] = useState(500);
  const [wastePercentage, setWastePercentage] = useState("10");
  const result = calculateWaste(baseSquareFeet, Number(wastePercentage));

  return (
    <div className="space-y-6">
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
      <ResultBox
        title="Total material needed"
        value={`${result.totalSquareFeet.toLocaleString()} sq ft`}
        detail={`${result.extraSquareFeet.toLocaleString()} sq ft is added for ${wastePercentage}% waste.`}
      />
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
    <div className="space-y-6">
      <div className="grid gap-4 sm:grid-cols-2">
        <NumberInput label="Number of stairs" value={stairCount} onChange={setStairCount} step={1} />
        <NumberInput label="Tread depth" value={treadDepth} onChange={setTreadDepth} suffix="in" />
        <NumberInput label="Riser height" value={riserHeight} onChange={setRiserHeight} suffix="in" />
        <NumberInput label="Stair width" value={stairWidth} onChange={setStairWidth} suffix="in" />
      </div>
      <ResultBox
        title="Estimated stair flooring"
        value={`${result.squareFeet.toLocaleString()} sq ft`}
        detail="Landings, stair noses, returns, and product-specific stair parts can change the final material order."
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
    <div className="space-y-6">
      <div className="grid gap-4 sm:grid-cols-3">
        <NumberInput label="Room length" value={roomLength} onChange={setRoomLength} suffix="ft" />
        <NumberInput label="Room width" value={roomWidth} onChange={setRoomWidth} suffix="ft" />
        <SelectInput
          label="Carpet roll width"
          value={rollWidth}
          onChange={setRollWidth}
          options={[
            { label: "12 ft", value: "12" },
            { label: "15 ft", value: "15" }
          ]}
        />
      </div>
      <ResultBox
        title="Seam estimate"
        value={result.seamLikelihood}
        detail={`${result.drops} drop${result.drops === 1 ? "" : "s"} estimated with about ${result.estimatedMaterialSquareFeet.toLocaleString()} sq ft of roll area before additional waste.`}
      />
    </div>
  );
}

function PatternRepeatCalculator() {
  const [roomSquareFeet, setRoomSquareFeet] = useState(500);
  const [repeatSize, setRepeatSize] = useState(24);
  const [baseWastePercentage, setBaseWastePercentage] = useState("10");
  const result = calculatePatternRepeat(roomSquareFeet, repeatSize, Number(baseWastePercentage));

  return (
    <div className="space-y-6">
      <div className="grid gap-4 sm:grid-cols-3">
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
      <ResultBox
        title="Adjusted material estimate"
        value={`${result.totalSquareFeet.toLocaleString()} sq ft`}
        detail={`Estimated waste is ${result.adjustedWastePercentage}% total: ${baseWastePercentage}% base waste plus ${result.repeatAdjustmentPercentage}% for pattern repeat.`}
      />
    </div>
  );
}

function TransitionCalculator() {
  const [openingCount, setOpeningCount] = useState(5);
  const [averageOpeningWidth, setAverageOpeningWidth] = useState(3);
  const result = calculateTransitions(openingCount, averageOpeningWidth);

  return (
    <div className="space-y-6">
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
        value={`${result.linearFeet.toLocaleString()} linear ft`}
        detail="Round up to available trim lengths and separate different profile types before ordering."
      />
    </div>
  );
}
