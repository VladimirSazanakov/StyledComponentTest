import React from "react";
import styled from "styled-components";

const StyledTitle = styled.h1`
color: white;
margin-bottom: 1em;
`

const Title = ({ children }) => {
  return <StyledTitle>
    {children}
  </StyledTitle>
}

export default Title;