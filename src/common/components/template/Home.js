import React from 'react';
import Center from '../elements/Center';
import Changer from '../modules/Changer';
import Picture from '../modules/Picture';
import Using from '../modules/Using';
import styled from 'styled-components';
import Header from '../modules/Header';

const HomeContainer = styled.div`
  width: 64rem;
  text-align: center;
`;
const Home = () => {
  return(
    <HomeContainer>
      <Header/>
      <Changer/>
      <Picture/>
      <Using/>
    </HomeContainer>
  )
}
export default Home;