type DetractionType =
  | "transporte"
  | "servicios"
  | "construccion";

const DETRACTION_RATES: Record<DetractionType, number> = {
  transporte: 0.04,
  servicios: 0.12,
  construccion: 0.10,
};

export const calculateDetraction = (
  amount: number,
  type: DetractionType
) => {
  const rate = DETRACTION_RATES[type];
  const detraction = +(amount * rate).toFixed(2);

  return {
    rate,
    detraction,
    net: +(amount - detraction).toFixed(2),
  };
};