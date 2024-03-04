import { render, screen } from "@testing-library/react";
// import userEvent from "@testing-library/user-event";
import { TextInput } from ".";

const mockRequiredProps = {
  name: "fieldName",
  id: "test-id",
};

describe("TextInput", () => {
  it("renders an input with the required props and allows additional <input> element props", () => {
    const mockPlaceholder = "type something";

    render(<TextInput {...mockRequiredProps} placeholder={mockPlaceholder} />);

    const input = screen.getByRole("textbox");
    expect(input).toBeVisible();
    expect(input).toHaveAttribute("id", mockRequiredProps.id);
    expect(screen.getByPlaceholderText(mockPlaceholder)).toBeVisible();
  });

  it("renders a label if passed", () => {
    const label = "test label";

    // when label is not passed
    const { rerender } = render(<TextInput {...mockRequiredProps} />);
    expect(screen.queryByLabelText(label)).not.toBeInTheDocument();

    // when label is passed
    rerender(<TextInput {...mockRequiredProps} label={label} />);
    expect(screen.getByLabelText(label)).toBeVisible();
  });
});
