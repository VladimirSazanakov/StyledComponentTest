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
color: ${props => props.color || props.theme.colors.primary};
resize: none;
&: focus {
  outline: none;
}
`

const Console = (props) => {

  const [lines, setLines] = useState(['/homes/Vladimir>']);

  const onKeyPress = e => {
    if (e.keyCode == 13) {
      setLines([...lines, '/homes/Vladimir>']);
    }
  }

  console.log(props.theme);

  return (
    <Flex>
      <Flex direction='column' margin="0 10px">
        {lines.map(line => <Line color={props.color}>{line}</Line>)}
      </Flex>
      <StyledConsole onKeyDown={onKeyPress} {...props} />

    </Flex>
  )
};

export default Console;