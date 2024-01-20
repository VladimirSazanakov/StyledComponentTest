import React from 'react';
import logo from './logo.svg';
import Title from './components/Title';
import './App.css';
import styled from 'styled-components';
import Flex from './components/Flex';

const AppWrapper = styled.div`
width: 100%;
min-height: 100vh;
padding: 2rem;
background: black;
color: white;
`

function App() {
  return (
    <AppWrapper>
      <Flex justify="center">
        <Title>Styled component Test</Title>
      </Flex>
    </AppWrapper>
  );
}

export default App;
