import styled from 'styled-components';
import React from 'react';
const CenterContainer = styled.div`
  text-align: center;
  align-items: center;
  width: 100%;
`;

const Center = ({ children }) => {
  return(
    <CenterContainer>
      {children}
    </CenterContainer>
  )
}
export default Center;