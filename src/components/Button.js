import React from 'react';
import styled, { css, keyframes } from 'styled-components';

const rotateAnimation = keyframes`
0% {
  transform: rotateZ(0deg);
}
100% {
  transform: rotateZ(360deg);
}
`

const StyledButton = styled.button`
border: none;
padding: 10px 15px;
font-size: 18px;
cursor: pointer;
border-radius: 5px; 
&:focus {
  outline: none;
};
&: hover {
  animation: ${rotateAnimation} 1s infinite linear;
};
align-self: ${props => props.align || 'stretch'};
${props => props.primary && css`
  color: ${props => props.color || props.theme.colors.primary};
  background: ${props => props.background || 'white'}
`}
${props => props.outlined && css`
  color: ${props => props.color || props.theme.colors.primary};
  // border: 1px solid ${props => props.color || props.theme.colors.primary};
  border: 1px solid ${props.color || props.theme.colors.primary};
  background: transparent;
`}
`

const LargeButton = styled(StyledButton)`
font-size: 32px;
`

const Button = (props) => {
  console.log(props.theme);
  return < LargeButton {...props} />
}

export default Button;