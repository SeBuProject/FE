import React from 'react';
import styled from 'styled-components';
const ChangerContainer = styled.div`
  background-color: ${({ theme }) => theme.color.gray20};
`;
const Changer = () => {
  return (
    <ChangerContainer>
      Changer
    </ChangerContainer>
  )
}
export default Changer;