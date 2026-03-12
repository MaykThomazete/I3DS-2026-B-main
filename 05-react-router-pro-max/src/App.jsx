

import './App.css'
import Sobre from './pages/Sobre';
import Home from './pages/Home';
import Contato from './pages/Contato';
import NaoEncontrado from './pages/NaoEncontrado';
import { Route,Routes } from 'react-router';
import Header from './components/header/Header';
import Rodape from './components/rodape/rodape';
function App() {
 

  return (
    <>
    <Header />
     <Routes> {/*identifica todas as rotas do sistemas*/ }
      <Route path="/" element={<Home />} />
       <Route path="/sobre"element={<Sobre />}/>
       <Route path="/contato"element={<Contato />}/>
     </Routes>
     <Rodape Link={"https://github.com/MaykThomazete"}>Mayk</Rodape>
    </>
  );
}

export default App;
