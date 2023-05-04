import { useEffect, useState } from "react";

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

  return <div className="App">App</div>;
};

export default App;
