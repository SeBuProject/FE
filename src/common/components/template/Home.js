import React from 'react';
import Changer from '../modules/Changer';
import Picture from '../modules/Picture';
import Using from '../modules/Using';
import styled from 'styled-components';
import Header from '../modules/Header';

const HomeContainer = styled.div`
  width: 100%;
  max-width: 64rem;
  text-align: center;
  margin:0 auto;
`;

const ChangerContainer = styled.div`
  top: 3.5rem;
  background-color: ${({ theme }) => theme.color.gray20};
  height: 40rem;
  width: 100%;
  text-align: center;
  margin:0 auto;
`;

const Home = () => {
  return(
    <>
      <HomeContainer>
        <Header/>
      </HomeContainer>
      <ChangerContainer>
        <Changer/>
      </ChangerContainer>
      <HomeContainer>
        <Picture/>
        <Using/>
      </HomeContainer>
    </>
  )
}
export default Home;