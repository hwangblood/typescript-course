import { ReactNode, useState, useReducer } from "react";

type CounterProps = {
  children: (num: number) => ReactNode;
};

const initState = { count: 0 };

const enum REDUCER_ACTION_TYPE {
  INCREMENT,
  DECREMENT,
}

const Counter = ({ children }: CounterProps) => {
  const [count, setCount] = useState<number>(0);

  const increment = () => setCount((prev) => prev + 1);
  const decrement = () => setCount((prev) => prev - 1);

  return (
    <>
      <h1>{children(count)}</h1>
      <div>
        <button onClick={increment}>+</button>
        <button onClick={decrement}>-</button>
      </div>
    </>
  );
};

export default Counter;
