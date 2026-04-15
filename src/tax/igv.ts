const IGV_RATE = 0.18;

export const addIGV = (amount: number): number => {
  return +(amount * (1 + IGV_RATE)).toFixed(2);
};

export const removeIGV = (amount: number): number => {
  return +(amount / (1 + IGV_RATE)).toFixed(2);
};

export const getIGVBreakdown = (amount: number) => {
  const base = removeIGV(amount);
  const igv = +(amount - base).toFixed(2);

  return { base, igv, total: amount };
};