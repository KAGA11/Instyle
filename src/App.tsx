import React from 'react';
import styled from 'styled-components';
import Header from './Components/Header';
import Carousel from './Components/Carousel';

const StyledContainer = styled.div`
  position: relative;
`;

const Video = styled.video`
  width: 100%;
  height: 600px;
  object-fit: cover;
`

const Title = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform:translate(-50%, -50%);
  color: white;
`

const App: React.FC = () => {
  return (
    <>
      <Header />

      <StyledContainer>
        <Video src="https://vod.freecaster.com/louisvuitton/9dcb4bda-19be-42d3-9268-c6048d437b92/NufSgNo5GUNFZz8JcT2Fqp0W_11.mp4"  autoPlay loop muted ></Video>
        <Title>
          <h1>Instyle product 2024</h1>
        </Title>
      </StyledContainer>

      <Carousel />

    </>
  );
};

export default App;