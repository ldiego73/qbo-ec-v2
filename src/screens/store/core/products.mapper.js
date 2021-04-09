export function mapToModel(dto) {
  return {
    id: dto.id,
    name: dto.name,
    category: dto.group,
    priceOld: dto.price_old ? dto.price_old : "",
    price: dto.price,
    image: `https://ec-qbo.herokuapp.com/products/${dto.image}`,
  };
}
