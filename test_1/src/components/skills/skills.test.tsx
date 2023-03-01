import { render, screen } from "@testing-library/react";
import { Skills } from "./skills";
import user from "@testing-library/user-event";
// grouping the test cases with describe function
describe("Skills component", () => {
  const skills = ["HTML", "CSS", "CSS2", "CSS3", "fhajhkfhak"]; // fake data
  // single test
  test("rendes correctly", () => {
    render(<Skills skills={skills} />);
    const listelement = screen.getByRole("list");
    expect(listelement).toBeInTheDocument();
  });

  test("rendes a list of skills", () => {
    render(<Skills skills={skills} />);
    const listelementChildren = screen.getAllByRole("listitem");
    expect(listelementChildren).toHaveLength(skills.length);
  });

  test("renders a button currectly", () => {
    render(<Skills skills={skills} />);
    const loginbtnElement = screen.getByRole("button", {
      name: "Log In",
    });
    expect(loginbtnElement).toBeInTheDocument();
  });
  test("start learning button is not renderd", () => {
    render(<Skills skills={skills} />);
    const startLearningbtn = screen.queryByRole("button", {
      name: "Start Learnig",
    });
    expect(startLearningbtn).not.toBeInTheDocument();
  });
  // test("start learning button will eventually rendered ", async () => {
  //   render(<Skills skills={skills} />);
  //   const startLearningbtn2 = await screen.findByRole(
  //     "button",
  //     {
  //       name: "Start Learnig",
  //     },
  //     {
  //       timeout: 2000,
  //     }
  //   );
  //   expect(startLearningbtn2).toBeInTheDocument();
  // });
  test("start learning will render after button event", async () => {
    user.setup();
    render(<Skills skills={skills} />);
    const loginbtnElement = screen.getByRole("button", {
      name: "Log In",
    });
    await user.click(loginbtnElement);
    const startLearningbtn = screen.queryByRole("button", {
      name: "Start Learnig",
    });
    expect(startLearningbtn).toBeInTheDocument();
  });
});
