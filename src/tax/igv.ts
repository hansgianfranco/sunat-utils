const DEFAULT_IGV = 0.18;

export const addIGV = (amount: number, rate = DEFAULT_IGV) => {
  return amount * (1 + rate);
};

export const removeIGV = (amount: number, rate = DEFAULT_IGV) => {
  return amount / (1 + rate);
};

export const getIGVBreakdown = (amount: number, rate = DEFAULT_IGV) => {
  const igv = amount - removeIGV(amount, rate);
  const net = removeIGV(amount, rate);

  return {
    net,
    igv,
    total: amount
  };
};

export const calculateIGVRate = (amount: number, rate = DEFAULT_IGV) => {
  return amount * rate;
};

export const splitIGV = (amount: number, rate = DEFAULT_IGV) => {
  const net = removeIGV(amount, rate);
  return {
    net,
    igv: amount - net,
    total: amount
  };
};

export const netToGross = (net: number, rate = DEFAULT_IGV) =>
  net * (1 + rate);

export const grossToNet = (gross: number, rate = DEFAULT_IGV) =>
  gross / (1 + rate);