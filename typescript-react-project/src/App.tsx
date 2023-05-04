import Counter from "./components/Counter";
import Heading from "./components/Heading";
import Section from "./components/Section";

function App() {
  return (
    <>
      <Heading title={"Typescript React Project"} />
      <Section title={"Different Title"}>This is my Section.</Section>
      <Counter />
    </>
  );
}

export default App;
