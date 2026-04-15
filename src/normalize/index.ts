export const normalizeRUC = (input: string): string => {
  return input.replace(/\D/g, "").slice(0, 11);
};

export const normalizeDNI = (input: string): string => {
  return input.replace(/\D/g, "").slice(0, 8);
};