import { render, screen } from "@testing-library/react";
import { Counter } from "./counter";
import user from "@testing-library/user-event";

describe("counter conponent tests ", () => {
  test("the counter component is rendering correctly", () => {
    render(<Counter />);
    const countelement = screen.getByRole("heading");
    expect(countelement).toBeInTheDocument();
  });
  test("renders the count of one after clicking the incerement button", async () => {
    user.setup();
    render(<Counter />);
    const incrementBtn = screen.getByRole("button", {
      name: "Increment",
    });
    await user.click(incrementBtn);
    const countelement = screen.getByRole("heading");
    expect(countelement).toHaveTextContent("1");
  });
  test("renders a count of two after clicking the count btn twice", async () => {
    user.setup();
    render(<Counter />);
    const btnElement = screen.getByRole("button", {
      name: "Increment",
    });
    await user.dblClick(btnElement);
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
