import React from "react";
import { useState } from "react";
import styled from 'styled-components';
import Flex from "./Flex";
import Line from "./Line";

const StyledConsole = styled.textarea`
width: 100%;
height: 70vh;
background: black;
font-size: 24px;
border: none;
color: ${({ color }) => color ? color : 'white'};
resize: none;
&: focus {
  outline: none;
}
`

const Console = ({ color, ...props }) => {

  const [lines, setLines] = useState(['/homes/Vladimir>']);

  const onKeyPress = e => {
    if (e.keyCode == 13) {
      setLines([...lines, '/homes/Vladimir>']);
    }
  }

  return (
    <Flex>
      <Flex direction='column' margin="0 10px">
        {lines.map(line => <Line color={color}>{line}</Line>)}
      </Flex>
      <StyledConsole onKeyDown={onKeyPress} color={color} {...props} />

    </Flex>
  )
};

export default Console;