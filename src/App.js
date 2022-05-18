import './App.css';
import JogoDaForca from './components/JogoDaForca';
import Header from './components/Header';
import Rodape from './components/Rodape';

function App() {
  return (
    <div className="App">
      <Header />
      <JogoDaForca />
      <Rodape />
    </div>
  );
}

export default App;
