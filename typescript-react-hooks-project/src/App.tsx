import {
  useEffect,
  useState,
  useCallback,
  MouseEvent,
  KeyboardEvent,
} from "react";

interface User {
  id: number;
  username: string;
}

const App = () => {
  const [count, setCount] = useState<number>(0);
  const [users, setUsers] = useState<User[] | null>(null);

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

  return (
    <div className="App">
      <h1>{count}</h1>
      <button onClick={addTwo}>Add</button>
    </div>
  );
};

export default App;
