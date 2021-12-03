import styled, { keyframes } from "styled-components";
import { useState } from "react";

const Container = styled.div`
  background-color: ${props => props.theme.bgColor};
`;
const H1 = styled.h1`
  color: ${(props) => props.theme.textColor};
`;

function App() {

  return (
    <Container>
      <H1>protected</H1>
    </Container>
  );
}

export default App;
