import './App.css';
import Container from './components/Container/Container.jsx';
import Title from './components/Title/Title.jsx';
import Form from './components/Form/Form.jsx';
import Btn from './components/Btn/Btn.jsx';
import Map from './components/Map/Map.jsx';
import Footer from './components/Footer/Footer.jsx';
import { ReactComponent as SmileOrangee } from "./images/smiles/1.svg";
import { ReactComponent as SmileOrange } from "./images/smiles/2.svg";
import { ReactComponent as Smile } from "./images/smiles/3.svg";

function App() {
  return (
    <Container>
      <SmileOrangee width="88.32px" height="85.84px" />
      <Title title='Reach out to us!' />
      <Form />
      <Btn btntitle='Send message' />
      <Map />
      <SmileOrange width="88.32px" height="85.84px" />
      <Smile width="214px" height="208px" />
      <Footer />
    </Container>
  );
}

export default App;
