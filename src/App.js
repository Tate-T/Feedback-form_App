import './App.css';
import Container from './components/Container/Container.jsx';
// import Title from './components/Title/Title.jsx';
import Form from './components/Form/Form.jsx';
// import Btn from './components/Btn/Btn.jsx';
import Map from './components/Map/Map.jsx';
import Footer from './components/Footer/Footer.jsx';
import { ReactComponent as SmileOrangee } from "./images/smiles/1.svg";
import { ReactComponent as SmileOrange } from "./images/smiles/2.svg";
import { ReactComponent as Smile } from "./images/smiles/3.svg";

import styled from 'styled-components';

function App() {

  const Title = styled.h1`
  font-family: 'Apercu Arabic Pro';
  font-style: normal;
  font-size: 40px;
  font-weight: 400;
  line-height: 1.30;
  color: #3E3E3E;
`;

  const Btn = styled.button`
  margin-top: 23px;
  width: 218px;
  height: 73px;
  left: 150px;
  top: 681px;
  background: #FAD34F;
  border: 0px;
  border-radius: 500px;
  font-family: 'Apercu Arabic Pro';
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 18px;
  color: #FFFFFF;
  text-align: center;
`;

  return (
    <Container>
      <SmileOrangee width="88.32px" height="85.84px" style={{ marginLeft: '29px', marginTop: '23px' }} />
      <div style={{ marginLeft: '150px' }}>
        <Title>Reach out to us!</Title>
        {/* <Title title='Reach out to us!' /> */}
        <Form />
        {/* <Btn btntitle='Send message' /> */}
        <Btn>Send message</Btn>
      </div>
      <Map />
      <SmileOrange width="88.32px" height="85.84px" />
      <Smile width="214px" height="208px" />
      <Footer />
    </Container>
  );
}

export default App;
