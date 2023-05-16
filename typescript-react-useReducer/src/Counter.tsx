import { ReactNode, useState, useReducer } from "react";

const initState = { count: 0 };

const enum REDUCER_ACTION_TYPE {
  INCREMENT,
  DECREMENT,
}

type ReducerAction = {
  type: REDUCER_ACTION_TYPE;
};

const reducer = (
  state: typeof initState,
  action: ReducerAction
): typeof initState => {
  switch (action.type) {
    case REDUCER_ACTION_TYPE.INCREMENT:
      return { ...state, count: state.count + 1 };
    case REDUCER_ACTION_TYPE.DECREMENT:
      return { ...state, count: state.count - 1 };
    default:
      throw new Error("Unknown action type: " + action.type);
  }
};

type CounterProps = {
  children: (num: number) => ReactNode;
};

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
