import styled from "styled-components";

interface CircleProps {
    bgColor: string;
}

const Container = styled.div<CircleProps>`
    width: 200px;
    height: 200px;
    background-color: ${props => props.bgColor};
    border-radius: 100px;
`;

function Circle({ bgColor }: CircleProps) {
    return <Container bgColor={bgColor}/>;
}

export default Circle;


interface PlayerShape {
    name: string;
    age: number;
}

const sayHello = (playerObj: PlayerShape) =>
    `Hello ${playerObj.name} you are ${playerObj.age} years old.`;

sayHello({name:'ubar', age:12});
sayHello({name: 'asdf', age:123});
