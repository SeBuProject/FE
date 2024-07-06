import React from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.div`
  height: 3.5rem;
  flex-wrap: wrap;
  justify-content: space-between;
  vertical-align: middle;
  display: inline-flex;
  width: 100%;
  text-align: center;
  padding: 0 1.25rem;
  
  @media(max-width: 767px){
    padding: 0 0;
    display: flex;
    justify-content: space-evenly;
  }
`;

const BarContainer = styled.span`
  vertical-align: middle;
  line-height: 3.5rem;
  font-weight: 400;
  font-style: normal;
  font-family: 'Pretendard';
  color: ${({ theme }) => theme.color.gray7};

  @media(max-width: 767px){
    line-height: 2.5rem;
    font-size: 0.9rem;
    margin-right: 0.4rem;
  }
`;
const Header = () => {
  return (
    <HeaderContainer>
      <img src='assets/bi_navigation.svg' alt='로고' />
      <BarContainer>
        {'로그인 없이 편하게 이용하세요'}
      </BarContainer>
    </HeaderContainer>
  )
}
export default Header;