/**
 * Creet should render the text hello, and if a name is passed into the component then
 * it should render hello followed by the name
 * */

import { render, screen } from "@testing-library/react";
import Greet from "./Greet";

describe("Greet", () => {
  test(" renders correctly", () => {
    render(<Greet />);
    const testElement = screen.getByText(/hello/i);
    expect(testElement).toBeInTheDocument();
  });

  // describe("nested", () => {
  //   test(" renders correctly with name prop", () => {
  //     render(<Greet name="mogid" />);
  //     const textElement = screen.getByText("Hello mogid");
  //     expect(textElement).toBeInTheDocument();
  //   });
  // });
});
