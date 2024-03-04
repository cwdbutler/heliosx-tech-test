import { render, screen } from "@testing-library/react";
// import userEvent from "@testing-library/user-event";
import { Form } from ".";

const mockRequiredProps = {
  name: "test-form",
  title: "Consultation form",
  fields: [
    {
      id: "field 1",
      name: "field 1",
      label: "field 1",
      placeholder: "type something",
    },
    { id: "field 2", name: "field 2", label: "field 2", maxLength: 5 },
    { id: "field 3", name: "field 3", label: "field 3" },
  ],
  submitButtonText: "Submit",
  completedText:
    "Thank you for completing the consultation. We will be in touch shortly.",
};

describe("Form", () => {
  it("renders a form with and only shows the first field initially", () => {
    render(<Form {...mockRequiredProps} />);

    const form = screen.getByRole("form", { name: mockRequiredProps.name });
    expect(form).toBeVisible();
    expect(
      screen.getByRole("heading", { name: mockRequiredProps.title })
    ).toBeVisible();
    expect(
      screen.getByLabelText(mockRequiredProps.fields[0].label)
    ).toBeVisible();
    expect(
      screen.queryByLabelText(mockRequiredProps.fields[1].label)
    ).not.toBeInTheDocument();
    expect(
      screen.queryByLabelText(mockRequiredProps.fields[2].label)
    ).not.toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Next" })).toBeVisible();
    expect(
      screen.queryByRole("button", { name: mockRequiredProps.submitButtonText })
    ).not.toBeInTheDocument();
  });
});
