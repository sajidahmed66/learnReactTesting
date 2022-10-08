import { GreetProps } from "./Greet.types";

const Greet = (props: GreetProps) => {
  return <div>Hello {props ? props.name : "Guest"} </div>;
};

export default Greet;
