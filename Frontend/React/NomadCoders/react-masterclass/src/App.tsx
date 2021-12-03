import styled, { keyframes } from "styled-components";
import Circle from "./Circle";

function App() {
  return (
    <div>
        <Circle bgColor="teal" borderColor="yellow" />
        <Circle bgColor="tomato" text="Im here" />
    </div>
  );
}

export default App;
