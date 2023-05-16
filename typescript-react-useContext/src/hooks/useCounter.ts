import { useContext } from "react";
import { CounterContext } from "../context/CounterContext";

type UseCounterHookType = {
  count: number;
  increment: () => void;
  decrement: () => void;
};

const useCounter = (): UseCounterHookType => {
  const {
    state: { count },
    increment,
    decrement,
  } = useContext(CounterContext);
  return { count, increment, decrement };
};

export default useCounter;
