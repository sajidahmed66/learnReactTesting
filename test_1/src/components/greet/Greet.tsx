import { GreetProps } from "./Greet.types";

const Greet = (props: GreetProps) => {
  return <div>Hello {props.name} </div>;
};

export default Greet;
