import react from "react";

import {Container} from 'react-bootstrap';
import Header from './components/Header'
import Footer from './components/Footer'
import HomeScren from './screens/HomeScreen';

function App() {
  return (
    <>
    <Header/>
    <main className="py-3">
    <Container>
      <HomeScren/>
    </Container>
    </main>
    <Footer/>
    </>
  );
}

export default App;
