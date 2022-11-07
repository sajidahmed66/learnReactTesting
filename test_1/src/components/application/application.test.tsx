import { Application } from "./application";
import { render, screen } from "@testing-library/react";

describe("Application", () => {
  test("renders correctly", () => {
    render(<Application />);
    const mainHeading = screen.getByRole("heading", {
      name: "Job application form",
      level: 1,
    });
    expect(mainHeading).toBeInTheDocument();
    const sectionHeading = screen.getByRole("heading", {
      level: 2,
    });
    expect(sectionHeading).toBeInTheDocument();

    const paragraphElement = screen.getByText("All fields are mandatory");
    expect(paragraphElement).toBeInTheDocument();

    const nameElement = screen.getByRole("textbox", { name: "Name" });
    expect(nameElement).toBeInTheDocument();

    const nameElement2 = screen.getByLabelText("Name");
    expect(nameElement2).toBeInTheDocument();

    const bioElement = screen.getByRole("textbox", { name: "Bio" });
    expect(bioElement).toBeInTheDocument();

    const dropDownRole = screen.getByRole("combobox");
    expect(dropDownRole).toBeInTheDocument();

    const submitbutton = screen.getByRole("button");
    expect(submitbutton).toBeInTheDocument();
  });
});
