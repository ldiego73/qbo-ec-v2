export function getPriceWithCurrency(price) {
  price = price || 0; 
  return new Intl.NumberFormat("es-PE", {
    style: "currency",
    currency: "PEN",
  }).format(price);
}
