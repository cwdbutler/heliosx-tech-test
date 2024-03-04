import { render, screen } from "@testing-library/react";
import { Header } from ".";

describe("Header", () => {
  it("renders the title and logo", () => {
    const mockTitle = "hi";

    render(<Header>{mockTitle}</Header>);
    expect(
      screen.getByRole("heading", { level: 1, name: mockTitle })
    ).toBeVisible();
    expect(screen.getByAltText("Dermatica logo")).toBeVisible();
  });
});
