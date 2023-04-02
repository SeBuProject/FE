import styled from 'styled-components';

const Wrapper = styled.main`
  width: 100%;
  height: 100%;
  position: fixed;
  overflow: hidden;
`;

const Layout = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};

export default Layout;