import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { TextInput } from ".";

const mockRequiredProps = {
  name: "fieldName",
  id: "test-id",
};

describe("TextInput", () => {
  it("renders an input with the required props and allows additional <input> element props", async () => {
    const user = userEvent.setup();
    const mockPlaceholder = "type something";
    const mockMaxLength = 5;

    render(
      <TextInput
        {...mockRequiredProps}
        placeholder={mockPlaceholder}
        maxLength={mockMaxLength}
      />
    );

    const input = screen.getByRole("textbox");
    expect(input).toBeVisible();
    expect(input).toHaveAttribute("id", mockRequiredProps.id);
    expect(input).toHaveAttribute("maxlength", mockMaxLength.toString());
    expect(screen.getByPlaceholderText(mockPlaceholder)).toBeVisible();

    await user.type(input, "123456");
    expect(input).toHaveValue("12345");
    // not much use testing every single <input> prop, just a few to show that the api is exposed
  });

  it("renders a label if passed", () => {
    const mockLabel = "test label";

    // when label is not passed
    const { rerender } = render(<TextInput {...mockRequiredProps} />);
    expect(screen.queryByLabelText(mockLabel)).not.toBeInTheDocument();

    // when label is passed
    rerender(<TextInput {...mockRequiredProps} label={mockLabel} />);
    expect(screen.getByLabelText(mockLabel)).toBeVisible();
  });
});
