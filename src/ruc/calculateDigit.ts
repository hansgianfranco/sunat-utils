export const calculateRUCDigit = (base: string): number => {
  if (!/^\d{10}$/.test(base)) {
    throw new Error("Base RUC must be 10 digits");
  }

  const factors = [5,4,3,2,7,6,5,4,3,2];

  const sum = base
    .split("")
    .reduce((acc, num, i) => acc + Number(num) * factors[i], 0);

  const remainder = sum % 11;
  const result = 11 - remainder;

  if (result === 10) return 0;
  if (result === 11) return 1;

  return result;
};