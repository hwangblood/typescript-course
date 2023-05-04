import { useState } from "react";

interface User {
  id: number;
  username: string;
}
const App = () => {
  const [count, setCount] = useState<number>(0);
  const [users, setUsers] = useState<User[] | null>(null);

  return <div className="App">App</div>;
};

export default App;
