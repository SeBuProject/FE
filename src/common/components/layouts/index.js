import styled from 'styled-components';

const Wrapper = styled.main`
  width: 100%;
  height: 100%;
  position: fixed;
  overflow-y: auto;
  flex-flow: wrap;

  @media(max-width: 768px){
    .html{
      font-size: 8px;
    }
  }

  @media(max-width: 430px){
    .html{
      font-size: 2px;
    }
  }
`;

const Layout = ({ children }) => {
  return (
    <Wrapper>
      {children}
    </Wrapper>
  )
};

export default Layout;