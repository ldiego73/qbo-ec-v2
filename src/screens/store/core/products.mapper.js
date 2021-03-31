import { getPriceWithCurrency } from "../../../utils";
export function mapToModel(dto) {
  return {
    id: dto.id,
    name: dto.name,
    category: dto.group,
    priceOld: dto.price_old ? getPriceWithCurrency(dto.price_old) : "",
    price: getPriceWithCurrency(dto.price),
    image: `https://ec-qbo.herokuapp.com/products/${dto.image}`,
  };
}
