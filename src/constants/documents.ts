export const DOCUMENT_TYPES = {
  "01": "Factura",
  "03": "Boleta de Venta",
  "07": "Nota de Crédito",
  "08": "Nota de Débito",
} as const;

export type DocumentType = keyof typeof DOCUMENT_TYPES;

export const getDocumentName = (type: DocumentType) => {
  return DOCUMENT_TYPES[type];
};