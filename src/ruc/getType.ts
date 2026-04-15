export type RUCType =
  | "persona_natural"
  | "empresa"
  | "entidad_publica"
  | "otro";

export const getRUCType = (ruc: string): RUCType | null => {
  if (ruc.length !== 11) return null;

  const prefix = ruc.slice(0, 2);

  if (prefix === "10") return "persona_natural";
  if (prefix === "20") return "empresa";
  if (prefix === "15") return "entidad_publica";

  return "otro";
};