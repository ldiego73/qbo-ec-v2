import { Title } from "@components/title";
import { render, screen } from "@testing-library/react";
import React from "react";

describe("Component Title", () => {
  it("Render correctly", () => {
    const { container } = render(<Title />);

    expect(container).toBeInTheDocument();
  });

  it("The value the title is 'Hello World'", () => {
    const value = "Hello World";

    render(<Title value={value} />);

    expect(screen.getByText(value)).toHaveTextContent(value);
  });

  it("The title with flex true", () => {
    const flex = true;

    render(<Title flex={flex} />);

    expect(screen.getByTestId("title")).toHaveStyle("flex: 1");
  });
});
