import './App.css';
import Container from './components/Container/Container.jsx';
import Title from './components/Title/Title.jsx';
import Form from './components/Form/Form.jsx';
import Btn from './components/Btn/Btn.jsx';
import Map from './components/Map/Map.jsx';
import Footer from './components/Footer/Footer.jsx';

function App() {
  return (
    <Container>
      <Title title='Reach out to us!' />
      <Form />
      <Btn />
      <Map />
      <Footer btntitle='Send message' />
    </Container>
  );
}

export default App;
