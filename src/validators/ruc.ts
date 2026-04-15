const VALID_PREFIXES = ["10", "20", "15", "17"];

const isValidRUCFormat = (ruc: string): boolean => {
  return /^\d{11}$/.test(ruc);
};

export const isValidRUC = (ruc: string): boolean => {
  if (!isValidRUCFormat(ruc)) return false;

  if (!VALID_PREFIXES.includes(ruc.slice(0, 2))) return false;

  const factors = [5,4,3,2,7,6,5,4,3,2];
  const digits = ruc.split("").map(Number);

  const sum = digits
    .slice(0, 10)
    .reduce((acc, num, i) => acc + num * factors[i], 0);

  const checkDigit = (11 - (sum % 11)) % 10;

  return checkDigit === digits[10];
};