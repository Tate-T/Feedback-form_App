// import Container from './components/Container/Container.jsx';
// import Title from './components/Title/Title.jsx';
// import Btn from './components/Btn/Btn.jsx';
// import Map from './components/Map/Map.jsx';
import Form from './components/Form/Form.jsx';
import Footer from './components/Footer/Footer.jsx';
import { ReactComponent as SmileOrangee } from "./images/smiles/1.svg";
import { ReactComponent as SmileOrange } from "./images/smiles/2.svg";
import { ReactComponent as Smile } from "./images/smiles/3.svg";
import { ReactComponent as MapImage } from "./images/map.svg";

import styled from 'styled-components';

function App() {

  const Container = styled.div`
  height: 1128px;
`;

  const Title = styled.h1`
  font-family: 'Apercu Arabic Pro';
  font-style: normal;
  font-size: 40px;
  font-weight: 400;
  line-height: 1.30;
  color: #3E3E3E;
`;


  // const Map = styled.iframe`
  // border: 0;
  // border-radius: 100%;
  // height: 976px;
  // width: 976px;
  // `;

  return (
    <Container>
      <SmileOrangee width="88.32px" height="85.84px" style={{ marginLeft: '29px', marginTop: '23px' }} />
      <div style={{ marginLeft: '150px' }}>
        <Title>Reach out to us!</Title>
        {/* <Title title='Reach out to us!' /> */}
        <Form />
        {/* <Btn btntitle='Send message' /> */}
      </div>
      {/* <Map>
        <iframe
          title="map"
          ssrc="https://www.google.com/maps/place/East+New+York,+%D0%91%D1%80%D1%83%D0%BA%D0%BB%D1%96%D0%BD,+%D0%9D%D1%8C%D1%8E-%D0%99%D0%BE%D1%80%D0%BA,+%D0%A1%D0%BF%D0%BE%D0%BB%D1%83%D1%87%D0%B5%D0%BD%D1%96+%D0%A8%D1%82%D0%B0%D1%82%D0%B8+%D0%90%D0%BC%D0%B5%D1%80%D0%B8%D0%BA%D0%B8/@40.6958789,-74.0172129,10.83z/data=!4m5!3m4!1s0x89c25d065dd654f3:0xea460699be6d9dd4!8m2!3d40.6590529!4d-73.8759245"
          allowfullscreen=""
          loading="lazy"
        ></iframe>
      </Map> */}
      <MapImage width="976px" height="976px" style={{
        position: "absolute",
        top: "0%",
        left: "50%"
      }} />
      <Smile width="214px" height="208px" style={{
        position: "absolute",
        top: "105%",
        left: "60%"
      }} />
      <SmileOrange width="88.32px" height="85.84px" style={{
        position: "absolute",
        top: "100%",
        left: "60%"
      }} />
      <Footer />
    </Container>
  );
}

export default App;
