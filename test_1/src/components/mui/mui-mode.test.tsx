import { render, screen } from "../../utils/test-utils";
import { MuiMode } from "./MuiMode";

describe("MuiMode", () => {
  test("renders text correctly", () => {
    render(<MuiMode />);
    const headingelement = screen.getByRole("heading");
    expect(headingelement).toHaveTextContent("dark mode");
  });
});
