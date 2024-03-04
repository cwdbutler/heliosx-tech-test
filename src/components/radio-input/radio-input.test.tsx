import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { RadioInput } from ".";

const mockOptions = [
  { value: "option 1", label: "Option 1", id: "option-1" },
  { value: "option 2", label: "Option 2", id: "option-2" },
];

const mockRequiredProps = {
  name: "fieldName",
  id: "test-id",
  label: "Select an option",
  options: mockOptions,
};

describe("RadioInput", () => {
  it("renders the options with the required props", async () => {
    render(<RadioInput {...mockRequiredProps} />);

    // testing each option has the role radio and has a label
    expect(
      screen.getByRole("radio", { name: mockOptions[0].label })
    ).toBeVisible();
    expect(screen.getByLabelText(mockOptions[0].label)).toBeVisible();

    expect(
      screen.getByRole("radio", { name: mockOptions[1].label })
    ).toBeVisible();
    expect(screen.getByLabelText(mockOptions[1].label)).toBeVisible();
  });

  it("allows the user to select an option via mouse and keyboard", async () => {
    const user = userEvent.setup();
    render(<RadioInput {...mockRequiredProps} />);

    const option1 = screen.getByLabelText(mockOptions[0].label);
    const option2 = screen.getByLabelText(mockOptions[1].label);

    await user.click(option1);
    expect(option1).toBeChecked();
    expect(option2).not.toBeChecked();

    await user.click(option2);
    expect(option1).not.toBeChecked();
    expect(option2).toBeChecked();

    await user.keyboard("{arrowup}");
    expect(option1).toBeChecked();
    expect(option2).not.toBeChecked();

    await user.keyboard("{arrowdown}");
    expect(option1).not.toBeChecked();
    expect(option2).toBeChecked();
  });

  it.skip("allows additional input props to be passed, e.g. defaultValue etc.", () => {
    const mockDefaultValue = "option 2";
    render(
      <RadioInput {...mockRequiredProps} defaultValue={mockDefaultValue} />
    );

    const option1 = screen.getByLabelText(mockOptions[0].label);
    const option2 = screen.getByLabelText(mockOptions[1].label);

    expect(option2).toBeChecked();
    expect(option1).not.toBeChecked();
  });
});
