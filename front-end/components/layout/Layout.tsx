import styled from 'styled-components';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';

const Container = styled.div`
  height: 100vh;    
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 61px 1fr 40px;  
  grid-template-areas:
    'header'
    'main'
    'footer'
  `;

const Layout = (props: any) => {
  return (
    <Container>
      <Header></Header>
      <Main>{props.children}</Main>
      <Footer></Footer>
  </Container>
  )
}

export default Layout;
