import { ChangeEvent, useContext } from "react";
import { CounterContext } from "../context/CounterContext";

type UseCounterTextHookType = {
  text: string;
  handleTextInput: (e: ChangeEvent<HTMLInputElement>) => void;
};

const useCounterText = (): UseCounterTextHookType => {
  const {
    state: { text },
    handleTextInput,
  } = useContext(CounterContext);
  return { text, handleTextInput };
};
export default useCounterText;
