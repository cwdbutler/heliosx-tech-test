import { render, screen } from "@testing-library/react";
import { Footer } from ".";

describe("Footer", () => {
  it("renders the children", () => {
    const mockText1 = "hi";
    const mockText2 = "bye";

    render(
      <Footer>
        <div>{mockText1}</div>
        <div>{mockText2}</div>
      </Footer>
    );
    expect(screen.getByText(mockText1)).toBeVisible();
    expect(screen.getByText(mockText2)).toBeVisible();
  });
});
