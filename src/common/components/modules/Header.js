import React from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.div`
  height: 3.5rem;
  flex-wrap: wrap;
  justify-content: space-between;
  vertical-align: center;
  display: inline-flex;
  width: 100%;
  text-align: center;
  position: relative;
  top: 50%;
  transform: translateY(-50%);
`;
const Header = () => {
  return (
    <HeaderContainer>
      <img src='assets/bi_navigation.svg' alt='로고'/>
      <span>
        {'로그인 없이 편하게 이용하세요'}
      </span>  
    </HeaderContainer>
  )
}
export default Header;