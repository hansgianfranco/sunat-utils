const isValidDNIFormat = (dni: string): boolean => {
  return /^\d{8}$/.test(dni);
};
export const isValidDNI = (dni: string): boolean => {
  if (!isValidDNIFormat(dni)) return false;

  if (/^(\d)\1+$/.test(dni)) return false;

  return true;
};