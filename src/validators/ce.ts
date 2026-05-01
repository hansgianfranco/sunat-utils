const isValidCEFormat = (ce: string): boolean => {
  return /^[A-Za-z0-9]{9,12}$/.test(ce);
};

export const isValidCE = (ce: string): boolean => {
  if (!isValidCEFormat(ce)) return false;

  if (/^[A-Za-z]+$/.test(ce)) return false;

  if (/^(.)\1+$/.test(ce)) return false;

  return true;
};