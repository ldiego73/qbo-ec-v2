export function getPriceWithCurrency(price) {
  const newPrice = price || 0;
  return new Intl.NumberFormat("es-PE", {
    style: "currency",
    currency: "PEN",
  }).format(newPrice);
}
