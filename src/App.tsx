import React from 'react';
import { Button } from 'antd';
import styled from 'styled-components';
import Header from './Components/Header';

const StyledContainer = styled.div`
  margin-top: 70px;
`;

const App: React.FC = () => {
  return (
    <>
      <Header />

      <StyledContainer>
        <h1>Hello, Vite + React + Ant Design + Styled Components!</h1>
        <Button type="primary">Ant Design Button</Button>
      </StyledContainer>
    </>
  );
};

export default App;