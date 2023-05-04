import { ReactNode } from "react";

type CounterFromParentProps = {
  setCount: React.Dispatch<React.SetStateAction<number>>;
  children: ReactNode;
};

const CounterFromParent = ({ setCount, children }: CounterFromParentProps) => {
  return (
    <>
      <h1>{children}</h1>
      <button onClick={() => setCount((prevCount) => prevCount - 1)}>-</button>
      <button onClick={() => setCount((prevCount) => prevCount + 1)}>+</button>
    </>
  );
};

export default CounterFromParent;
