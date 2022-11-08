import { render, screen } from "@testing-library/react";
import { Counter } from "./counter";

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
});
