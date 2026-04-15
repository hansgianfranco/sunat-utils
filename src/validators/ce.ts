export const isValidCE = (ce: string): boolean => {
  return /^[a-zA-Z0-9]{9,12}$/.test(ce);
};