import {
  useEffect,
  useState,
  useCallback,
  useMemo,
  MouseEvent,
  KeyboardEvent,
  useRef,
} from "react";

interface User {
  id: number;
  username: string;
}

type fibFunc = (n: number) => number;

const fib: fibFunc = (n: number) => {
  if (n < 2) return n;
  return fib(n - 1) + fib(n - 2);
};

const App = () => {
  const [count, setCount] = useState<number>(0);
  const [users, setUsers] = useState<User[] | null>(null);

  const inputRef = useRef<HTMLInputElement>(null);
  useEffect(() => {
    console.log("inputRef before referencing");
    console.log(inputRef?.current);
    console.log(inputRef?.current?.value);
  }, []);

  useEffect(
    () => {
      // this effect will run when the component mounts
      console.log("mounting");
      console.log(`Users: ${users}`);

      // clean up function
      return () => console.log("unmounting");
    },
    // if the users array changes, the effect will run again
    [users]
  );

  // useCallback memorize a function, so it's not always recreated
  const addTwo = useCallback(
    (
      e: MouseEvent<HTMLButtonElement> | KeyboardEvent<HTMLButtonElement>
    ): void => {
      setCount((prev) => prev + 1);
      console.log({ e });
    },
    []
  );

  const [myNum, setMyNum] = useState<number>(3);
  const result = useMemo<number>(() => fib(myNum), [myNum]);

  const [inputValue, setInputValue] = useState<string>("");
  const handleInput = (value: string) => {
    setInputValue(value);
    console.log(inputRef.current?.value); // after applying a ref, ts knowns it is not null
  };

  return (
    <div className="App">
      <h1>{count}</h1>
      <button onClick={addTwo}>Add</button>
      <h2>{result}</h2>
      <button onClick={() => setMyNum((prev) => prev + 2)}>change</button>
      <div>
        <input
          type="text"
          placeholder="Enter something..."
          value={inputValue}
          ref={inputRef}
          onChange={(e) => handleInput(e.target.value)}
        />
      </div>
    </div>
  );
};

export default App;
