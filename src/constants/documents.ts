export const DOCUMENT_TYPES = {
  "01": "Factura",
  "03": "Boleta de Venta",
  "07": "Nota de Crédito",
  "08": "Nota de Débito",
  "09": "Guía de Remisión",
  "11": "Recibo por Honorarios",
  "12": "Ticket",
  "13": "Documento Bancario",
  "14": "Recibo de Servicios Públicos",
  "20": "Comprobante de Retención",
  "31": "Guía de Remisión Remitente",
  "32": "Guía de Remisión Transportista",
  "40": "Comprobante de Percepción",
} as const;

export type DocumentType = keyof typeof DOCUMENT_TYPES;

export const getDocumentName = (type: string): string => {
  if (type in DOCUMENT_TYPES) {
    return DOCUMENT_TYPES[type as DocumentType];
  }
  return "Desconocido";
};