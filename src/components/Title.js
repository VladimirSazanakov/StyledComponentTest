import React from "react";
import styled from "styled-components";

const StyledTitle = styled.h1`
color: ${props => props.color || props.theme.colors.primary};
margin-bottom: 1em;
`

const Title = (props) => {
  return <StyledTitle {...props}>
    {props.children}
  </StyledTitle>
}

export default Title;