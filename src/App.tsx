import "./App.css";
import { Header } from "./components/header";
import { Button } from "./components/button";
import { TextInput } from "./components/text-input";

function App() {
  return (
    <>
      <Header>MedExpress</Header>
      <TextInput
        name="test"
        label="test"
        placeholder="type something"
        id="test"
        maxLength={4}
      >
        input
      </TextInput>
      <Button>Start consultation</Button>
    </>
  );
}

export default App;
