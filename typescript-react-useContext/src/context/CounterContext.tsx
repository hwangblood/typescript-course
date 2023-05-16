import {
  createContext,
  ChangeEvent,
  useReducer,
  useCallback,
  ReactElement,
} from "react";

type StateType = {
  count: number;
  text: string;
};

export const initState: StateType = { count: 0, text: "Hello" };

const enum REDUCER_ACTION_TYPE {
  INCREMENT,
  DECREMENT,
  NEW_INPUT,
}

type ReducerAction = {
  type: REDUCER_ACTION_TYPE;
  payload?: string;
};

const reducer = (state: StateType, action: ReducerAction): StateType => {
  switch (action.type) {
    case REDUCER_ACTION_TYPE.INCREMENT:
      return { ...state, count: state.count + 1 };
    case REDUCER_ACTION_TYPE.DECREMENT:
      return { ...state, count: state.count - 1 };
    case REDUCER_ACTION_TYPE.NEW_INPUT:
      return { ...state, text: action.payload ?? "" };
    default:
      throw new Error("Unknown action type: " + action.type);
  }
};

const useCounterContext = (initState: StateType) => {
  const [state, dispatch] = useReducer(reducer, initState);

  const increment = useCallback(
    () => dispatch({ type: REDUCER_ACTION_TYPE.INCREMENT }),
    []
  );

  const decrement = useCallback(
    () => dispatch({ type: REDUCER_ACTION_TYPE.DECREMENT }),
    []
  );

  const handleTextInput = useCallback(
    (e: ChangeEvent<HTMLInputElement>) =>
      dispatch({
        type: REDUCER_ACTION_TYPE.NEW_INPUT,
        payload: e.target.value,
      }),
    []
  );

  return { state, increment, decrement, handleTextInput };
};

type UseCounterContextType = ReturnType<typeof useCounterContext>;

const initContextState: UseCounterContextType = {
  state: initState,
  increment: () => {},
  decrement: () => {},
  handleTextInput: (e: ChangeEvent<HTMLInputElement>) => {},
};

export const CounterContext =
  createContext<UseCounterContextType>(initContextState);

type ChildrenType = {
  children?: ReactElement | undefined;
};

// * Spreading the ...initState into the Provider parameters is not really necessary. It does help document but really just creates extra boilerplate. You can pull it in from the lexical scope of the Provider since both are defined in the same file. This will also eliminate the need to use the initState in the App component. initState will simply be passed to useCounterContext in the Provider value.
export const CounterProvider = ({
  children /* , ...initState */,
}: ChildrenType): ReactElement => {
  return (
    <CounterContext.Provider value={useCounterContext(initState)}>
      {children}
    </CounterContext.Provider>
  );
};
