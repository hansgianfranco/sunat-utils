export const isValidDNI = (dni: string): boolean => {
  return /^\d{8}$/.test(dni);
};