import { useState } from "react";

export const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>{count}</h1>
      <button
        onClick={() => {
          setCount((prv) => prv + 1);
        }}
      >
        Increment
      </button>
    </div>
  );
};
