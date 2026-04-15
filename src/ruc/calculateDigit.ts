export const calculateRUCDigit = (base: string): number => {
  if (!/^\d{10}$/.test(base)) {
    throw new Error("Invalid RUC base: expected 10 numeric digits");
  }

  const factors = [5,4,3,2,7,6,5,4,3,2];

  const digits = base.split("").map(Number);

  const sum = digits.reduce(
    (acc, num, i) => acc + num * factors[i],
    0
  );

  return (11 - (sum % 11)) % 10;
};