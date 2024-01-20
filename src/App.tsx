import React from 'react';
import logo from './logo.svg';
import Title from './components/Title';
import './App.css';
import styled from 'styled-components';
import Flex from './components/Flex';
import Console from './components/Console';
import Button from './components/Button';

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
      <Flex direction="colum">
        <Console color="green" />
        <Button primary color='red' align="flex-end">Send</Button>

      </Flex>
    </AppWrapper>
  );
}

export default App;
