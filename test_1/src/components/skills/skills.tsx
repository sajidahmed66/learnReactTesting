import { useEffect, useState } from "react";
import { SkillProps } from "./skills.types";

export const Skills = (props: SkillProps) => {
  const { skills } = props;
  const [isloggedIn, setIsLoggedIn] = useState<boolean>(false);

  return (
    <>
      <ul>
        {skills.map((skill) => (
          <li key={skill}>{skill}</li>
        ))}
      </ul>
      {isloggedIn ? (
        <button>Start Learnig</button>
      ) : (
        <button
          onClick={() => {
            setIsLoggedIn(true);
          }}
        >
          Log In
        </button>
      )}
    </>
  );
};
