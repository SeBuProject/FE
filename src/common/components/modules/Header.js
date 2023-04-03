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
`;

const BarContainer = styled.span`
  vertical-align: middle;
  line-height: 3.5rem;
  font-weight: 400;
  font-style: normal;
  font-family: 'Pretendard Variable';
  color: ${({ theme }) => theme.color.gray7};
`;
const Header = () => {
  return (
    <HeaderContainer>
      <img src='assets/bi_navigation.svg' alt='로고'/>
      <BarContainer>
        {'로그인 없이 편하게 이용하세요'}
      </BarContainer>  
    </HeaderContainer>
  )
}
export default Header;