import { useState } from "react";
import Counter from "./components/Counter";
import CounterFromParent from "./components/CounterFromParent";
import Heading from "./components/Heading";
import Section from "./components/Section";
import List from "./components/List";

function App() {
  const [count, setCount] = useState<number>(0);

  return (
    <>
      <Heading title={"Typescript React Project"} />
      <Section title={"Different Title"}>This is my Section.</Section>
      <Counter />
      <CounterFromParent setCount={setCount}>
        Count is {count}
      </CounterFromParent>
      <List
        items={["☕ Coffee", "🌮 Tacos", "💻 Code"]}
        itemRender={(item: string) => <span className="bold gold">{item}</span>}
      />
    </>
  );
}

export default App;
