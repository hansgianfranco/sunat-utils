import { calculateRUCDigit } from "../ruc/calculateDigit";

type RUCOptions = {
  strict?: boolean;
};

const VALID_PREFIXES = ["10", "15", "17", "20"];

export const isValidRUC = (ruc: string, options?: RUCOptions): boolean => {
  if (!/^\d{11}$/.test(ruc)) return false;

  const base = ruc.slice(0, 10);
  const digit = Number(ruc[10]);

  const isValidDigit = calculateRUCDigit(base) === digit;

  if (!options?.strict) return isValidDigit;

  const prefix = ruc.slice(0, 2);
  return isValidDigit && VALID_PREFIXES.includes(prefix);
};