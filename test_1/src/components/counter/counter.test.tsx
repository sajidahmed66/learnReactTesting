import { render, screen } from "@testing-library/react";
import { Counter } from "./counter";
import user from "@testing-library/user-event";

describe("counter conponent tests ", () => {
  test("component renders correctly", () => {
    render(<Counter />);
    const countElement = screen.getByRole("heading");
    expect(countElement).toBeInTheDocument();
    const btnElement = screen.getByRole("button", {
      name: "Increment",
    });

    expect(btnElement).toBeInTheDocument();
  });
  test("renders a count of zero", () => {
    render(<Counter />);
    const countElement = screen.getByRole("heading");
    expect(countElement).toHaveTextContent("0");
  });

  //testing user interaction
  test("renders a count of one after clicking the count button", async () => {
    user.setup();
    render(<Counter />);
    const btnElement = screen.getByRole("button", {
      name: "Increment",
    });
    await user.click(btnElement);
    const countElement = screen.getByRole("heading");
    expect(countElement).toHaveTextContent("1");
  });
  test("renders a count of two after clicking the count btn twice", async () => {
    user.setup();
    render(<Counter />);
    const btnElement = screen.getByRole("button", {
      name: "Increment",
    });
    await user.click(btnElement);
    await user.click(btnElement);
    const countElement = screen.getByRole("heading");
    expect(countElement).toHaveTextContent("2");
  });

  test("renders a count of ten after clicking the set button", async () => {
    user.setup();
    render(<Counter />);
    const amountInputelement = screen.getByRole("spinbutton");
    await user.type(amountInputelement, "10");
    expect(amountInputelement).toHaveValue(10);
    const setbtnElement = screen.getByRole("button", {
      name: "set",
    });
    await user.click(setbtnElement);
    const countElement = screen.getByRole("heading");
    expect(countElement).toHaveTextContent("10");
  });

  test("elements are focused in rightorder", async () => {
    user.setup();
    render(<Counter />);
    const amountInput = screen.getByRole("spinbutton");
    const setbtnElement = screen.getByRole("button", {
      name: "set",
    });
    const incrementbtnElement = screen.getByRole("button", {
      name: "Increment",
    });
    await user.tab();
    expect(incrementbtnElement).toHaveFocus();
    await user.tab();
    expect(amountInput).toHaveFocus();
    await user.tab();
    expect(setbtnElement).toHaveFocus();
  });
});
