import { CardProduct } from "@components/card/product";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import React from "react";

describe("Component Card Product", () => {
  let product = {};

  beforeEach(() => {
    product = {
      image: "Image 0",
      category: "Category 0",
      group: "Group 0",
      name: "Product 0",
      priceOld: 100,
      price: 50,
    };
  });

  it("Render correctly", () => {
    const { container } = render(<CardProduct product={product} />);

    expect(container).toBeInTheDocument();
  });

  it("Validate props", () => {
    render(<CardProduct product={product} />);

    expect(screen.getByText(product.category)).toHaveTextContent(product.category);
  });

  it("Image clicked", () => {
    const { container } = render(<CardProduct product={product} />);

    userEvent.click(screen.getByTestId("card-product-image"));

    expect(container).toBeInTheDocument();
  });

});
