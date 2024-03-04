import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Button } from ".";

describe("Button", () => {
  it("renders the children", () => {
    const mockChildren = "click me";

    render(<Button>{mockChildren}</Button>);
    expect(screen.getByRole("button", { name: mockChildren })).toBeVisible();
  });

  it("can take additional 'button' element props", async () => {
    const user = userEvent.setup();
    const mockOnClick = jest.fn();

    render(<Button onClick={mockOnClick}>hi</Button>);
    await user.click(screen.getByRole("button"));
    expect(mockOnClick).toHaveBeenCalledTimes(1);
  });
});
