import { useState } from 'react';
import './App.css';
import Login from './components/Login';

function App() {

  const [colaboradores, setColaboradores] = useState([])

  const aoNovoColaboradorAdicionado = (colaborador) => {
    console.log(colaborador)
    setColaboradores([...colaboradores, colaborador])
  }

  return (
    <div className="App">
      <Login aoColaboradorCadastrado={colaborador => aoNovoColaboradorAdicionado(colaborador)} />
    </div>
  );
}

export default App;
