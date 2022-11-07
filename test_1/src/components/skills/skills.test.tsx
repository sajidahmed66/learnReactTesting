import { render, screen } from "@testing-library/react";
import { Skills } from "./skills";

describe("Skills component", () => {
  const skills = ["HTML", "CSS", "CSS2", "CSS3", "fhajhkfhak"];
  test("rendes correctly", () => {
    render(<Skills skills={skills} />);
    const listelement = screen.getByRole("list");
    expect(listelement).toBeInTheDocument();
  });
  test("rendes a list of skills", () => {
    render(<Skills skills={skills} />);
    const listChildElement = screen.getAllByRole("listitem");
    expect(listChildElement).toHaveLength(skills.length);
  });
  test("renders login button correctly", () => {
    render(<Skills skills={skills} />);
    const loginButtonEle = screen.getByRole("button", {
      name: "Log In",
    });
    expect(loginButtonEle).toBeInTheDocument();
  });
  test("renders Start Learnig button correctly", () => {
    render(<Skills skills={skills} />);
    const learningButtonEle = screen.queryByRole("button", {
      name: "Start Learnig",
    });
    expect(learningButtonEle).not.toBeInTheDocument();
  });
  test("start learning button is eventually rendered", async () => {
    render(<Skills skills={skills} />);
    const startlearningButtonEle = await screen.findByRole(
      "button",
      {
        name: "Start Learnig",
      },
      {
        timeout: 2000,
      }
    );
    expect(startlearningButtonEle).toBeInTheDocument();
  });
});
