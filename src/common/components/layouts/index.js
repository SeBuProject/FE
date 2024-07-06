import styled from 'styled-components';

const Wrapper = styled.main`
  width: 100%;
  height: 100%;
  position: fixed;
  overflow-y: auto;
  flex-flow: wrap;
  left: 0;
  bottom: 0;

  @media screen and (max-width: 768px){
    html{
      font-size: 9.5px;
      flex-direction: column;
    }
    div{
      font-size: 8.5px;
      flex-direction: column;
    }
    p{
      font-size: 8.5px;
      flex-direction: column;
    }
  }

  @media screen and (max-width: 430px){
    html{
      font-size: 8.5px;
      flex-direction: column;
    }
    div{
      font-size: 1rem;
      flex-direction: column;
    }
    p{
      font-size: 1rem;
      flex-direction: column;
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