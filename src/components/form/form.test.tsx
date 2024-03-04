/* eslint-disable no-console */
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Form } from ".";

const mockRequiredProps = {
  name: "test-form",
  title: "Consultation form",
  fields: [
    {
      id: "field 1",
      name: "field 1",
      label: "field 1",
    },
    { id: "field 2", name: "field 2", label: "field 2" },
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

  describe("Navigation", () => {
    it("shows a 'Next' button which allows the user to progress, until the last field is reached, where it renders a submit button with the provided text", async () => {
      const user = userEvent.setup();
      render(<Form {...mockRequiredProps} />);
      const form = screen.getByRole("form", { name: mockRequiredProps.name });
      const nextButton = screen.getByRole("button", { name: "Next" });
      const firstInputLabel = mockRequiredProps.fields[0].label;
      const secondInputLabel = mockRequiredProps.fields[1].label;
      const thirdInputLabel = mockRequiredProps.fields[2].label;

      expect(form).toBeVisible();
      expect(screen.getByLabelText(firstInputLabel)).toBeVisible();
      expect(screen.queryByLabelText(secondInputLabel)).not.toBeInTheDocument();
      expect(screen.queryByLabelText(thirdInputLabel)).not.toBeInTheDocument();

      await user.click(nextButton);

      expect(form).toBeVisible();
      expect(screen.getByLabelText(secondInputLabel)).toBeVisible();
      expect(screen.queryByLabelText(firstInputLabel)).not.toBeInTheDocument();
      expect(screen.queryByLabelText(thirdInputLabel)).not.toBeInTheDocument();

      await user.click(nextButton);

      // final step
      expect(form).toBeVisible();
      expect(screen.getByLabelText(thirdInputLabel)).toBeVisible();
      expect(screen.queryByLabelText(firstInputLabel)).not.toBeInTheDocument();
      expect(screen.queryByLabelText(secondInputLabel)).not.toBeInTheDocument();
      expect(
        screen.queryByRole("button", { name: "Next" })
      ).not.toBeInTheDocument();
      expect(
        screen.getByRole("button", {
          name: mockRequiredProps.submitButtonText,
        })
      ).toBeVisible();
    });

    it("shows a 'Back' button which takes the user back to the previous field and persists the inputted value", async () => {
      const user = userEvent.setup();
      render(<Form {...mockRequiredProps} />);
      const form = screen.getByRole("form", { name: mockRequiredProps.name });
      const nextButton = screen.getByRole("button", { name: "Next" });
      const firstInputLabel = mockRequiredProps.fields[0].label;

      expect(form).toBeVisible();
      // back button should not be visible on first step
      expect(
        screen.queryByRole("button", { name: "Back" })
      ).not.toBeInTheDocument();

      const mockInputValue = "hello";
      await user.type(screen.getByLabelText(firstInputLabel), mockInputValue);
      await user.click(nextButton);

      expect(form).toBeVisible();
      const backButton = screen.getByRole("button", { name: "Back" });
      expect(backButton).toBeVisible();
      expect(screen.queryByText(mockInputValue)).not.toBeInTheDocument();

      await user.click(backButton);

      expect(form).toBeVisible();
      expect(
        screen.queryByRole("button", { name: "Back" })
      ).not.toBeInTheDocument();
      expect(screen.getByLabelText(firstInputLabel)).toHaveValue(
        mockInputValue
      );
    });

    it("submits the form on the last field and shows the completed text, and logs the values to the console", async () => {
      const user = userEvent.setup();
      console.log = jest.fn();
      render(<Form {...mockRequiredProps} />);
      const form = screen.getByRole("form", { name: mockRequiredProps.name });
      const nextButton = screen.getByRole("button", { name: "Next" });
      const firstInputLabel = mockRequiredProps.fields[0].label;
      const secondInputLabel = mockRequiredProps.fields[1].label;
      const thirdInputLabel = mockRequiredProps.fields[2].label;

      const mockInputValue1 = "hello";
      const mockInputValue2 = "world";
      const mockInputValue3 = "goodbye";

      expect(form).toBeVisible();
      expect(
        screen.queryByRole("button", { name: "Back" })
      ).not.toBeInTheDocument();

      await user.type(screen.getByLabelText(firstInputLabel), mockInputValue1);
      await user.click(nextButton);
      await user.type(screen.getByLabelText(secondInputLabel), mockInputValue2);
      await user.click(nextButton);
      await user.type(screen.getByLabelText(thirdInputLabel), mockInputValue3);
      expect(console.log).not.toHaveBeenCalled();
      await user.click(
        screen.getByRole("button", { name: mockRequiredProps.submitButtonText })
      );

      expect(screen.queryByRole("form")).not.toBeInTheDocument();
      expect(screen.getByText(mockRequiredProps.completedText)).toBeVisible();
      expect(console.log).toHaveBeenCalledWith({
        [mockRequiredProps.fields[0].name]: mockInputValue1,
        [mockRequiredProps.fields[1].name]: mockInputValue2,
        [mockRequiredProps.fields[2].name]: mockInputValue3,
      });
      expect(console.log).toHaveBeenCalledTimes(1);
    });

    it.todo("warns the user about navigating away when the form is incomplete");
  });

  describe("Validation", () => {
    it.todo(
      "shows an error message when the field is required and the next button is clicked without a value"
    );
    it.todo(
      "shows an error message when the field is required and the form is submitted without a value"
    );
    it.todo("shows an error message when the input is in an invalid format");
    it.todo("prevents the form from being submitted when there are errors");
  });
});
