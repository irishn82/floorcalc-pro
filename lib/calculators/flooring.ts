export type RoomInput = {
  id: string;
  name: string;
  length: number;
  width: number;
};

export type RoomResult = RoomInput & {
  squareFeet: number;
};

export function roundTo(value: number, places = 1) {
  const multiplier = 10 ** places;
  return Math.round(value * multiplier) / multiplier;
}

function positive(value: number) {
  return Number.isFinite(value) ? Math.max(0, value) : 0;
}

export function calculateRoomSquareFeet(length: number, width: number) {
  return roundTo(positive(length) * positive(width), 1);
}

export function calculateRooms(rooms: RoomInput[]) {
  const roomResults: RoomResult[] = rooms.map((room) => ({
    ...room,
    squareFeet: calculateRoomSquareFeet(room.length, room.width)
  }));

  const totalSquareFeet = roundTo(
    roomResults.reduce((sum, room) => sum + room.squareFeet, 0),
    1
  );

  return { roomResults, totalSquareFeet };
}

export function calculateWaste(baseSquareFeet: number, wastePercentage: number) {
  const base = positive(baseSquareFeet);
  const percent = positive(wastePercentage);
  const extraSquareFeet = roundTo(base * (percent / 100), 1);
  const totalSquareFeet = roundTo(base + extraSquareFeet, 1);

  return { extraSquareFeet, totalSquareFeet };
}

export function calculateCartons(materialSquareFeet: number, squareFeetPerCarton: number) {
  const material = positive(materialSquareFeet);
  const cartonCoverage = positive(squareFeetPerCarton);

  if (material === 0 || cartonCoverage === 0) {
    return null;
  }

  return Math.ceil(material / cartonCoverage);
}

export function calculateStairFlooring(
  stairCount: number,
  treadDepthInches: number,
  riserHeightInches: number,
  stairWidthInches: number
) {
  const count = positive(stairCount);
  const coveredInches = positive(treadDepthInches) + positive(riserHeightInches);
  const squareInches = count * coveredInches * positive(stairWidthInches);
  const squareFeet = roundTo(squareInches / 144, 1);

  return { squareFeet };
}

export function calculateCarpetSeams(
  roomLengthFeet: number,
  roomWidthFeet: number,
  rollWidthFeet: number
) {
  const length = positive(roomLengthFeet);
  const width = positive(roomWidthFeet);
  const roll = positive(rollWidthFeet) || 12;
  const drops = width > 0 ? Math.ceil(width / roll) : 0;
  const estimatedMaterialSquareFeet = roundTo(drops * roll * length, 1);
  const seams = Math.max(0, drops - 1);
  const seamLikelihood = seams === 0 ? "No seam likely" : seams === 1 ? "One seam likely" : `${seams} seams likely`;

  return { drops, seams, seamLikelihood, estimatedMaterialSquareFeet };
}

export function calculatePatternRepeat(
  roomSquareFeet: number,
  repeatSizeInches: number,
  baseWastePercentage: number
) {
  const repeat = positive(repeatSizeInches);
  const repeatAdjustmentPercentage = repeat === 0 ? 0 : Math.min(12, Math.ceil(repeat / 12) * 2);
  const adjustedWastePercentage = positive(baseWastePercentage) + repeatAdjustmentPercentage;
  const extraSquareFeet = roundTo(positive(roomSquareFeet) * (adjustedWastePercentage / 100), 1);
  const totalSquareFeet = roundTo(positive(roomSquareFeet) + extraSquareFeet, 1);

  return {
    repeatAdjustmentPercentage,
    adjustedWastePercentage,
    extraSquareFeet,
    totalSquareFeet
  };
}

export function calculateTransitions(openingCount: number, averageOpeningWidthFeet: number) {
  const linearFeet = roundTo(positive(openingCount) * positive(averageOpeningWidthFeet), 1);

  return { linearFeet };
}
