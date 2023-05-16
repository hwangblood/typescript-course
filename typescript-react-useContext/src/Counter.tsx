import { ChangeEvent, ReactNode, useReducer } from "react";

type CounterProps = {
  children: (num: number) => ReactNode;
};

const Counter = ({ children }: CounterProps) => {
  return (
    <>
      <h1>{children(state.count)}</h1>
      <div>
        <button onClick={increment}>+</button>
        <button onClick={decrement}>-</button>
      </div>

      <input
        type="text"
        value={state.text}
        placeholder="Enter something..."
        onChange={handleTextInput}
      />
      <h2>{state.text}</h2>
    </>
  );
};

export default Counter;
