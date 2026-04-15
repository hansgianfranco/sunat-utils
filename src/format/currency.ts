export const formatCurrency = (
  amount: number,
  currency = "PEN",
  locale = "es-PE"
) => {
  return new Intl.NumberFormat(locale, {
    style: "currency",
    currency
  }).format(amount);
};

export const formatInvoiceNumber = (doc: string) => {
  return doc.replace(/(\w{4})-(\d+)/, (_, a, b) => {
    return `${a}-${b.padStart(8, "0")}`;
  });
};