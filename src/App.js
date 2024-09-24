//Css
import './App.css';

//components
import Mapa from './components/Mapa';
import Main from './components/Main';

// icon quadrados
import { FaSquareFull } from "react-icons/fa";

//Hooks
import { useState } from 'react';

//logo
import logo from './img/logo.png'

//import lista cidades
import cidades from './components/Cidades';

const App = () => {
  //state do input
  const [nameCidade, setNameCidade] = useState('')
  //states dos objetos
  const [munclicado, setmunclicado] = useState('')
  const [concorrentes,setConcorretes] = useState([])
  const [texto,setTexto] = useState('')




  const filterCidades = nameCidade
    ? cidades.filter(cidade =>
      cidade.Municipio.toLowerCase().includes(nameCidade.toLowerCase())
    )
    : [];
  return (
    <div className="App">
      <header>
        <nav>
          <img onClick={() => window.open('https://marquesconsult.com.br/', '_blank')} className='logo' src={logo} alt="" />
        </nav>
      </header>
      <main>
        <div className='containermapa'>
          <Mapa setTexto={setTexto} texto={texto} setConcorretes={setConcorretes} concorrentes={concorrentes} nameCidade={nameCidade} setNameCidade={setNameCidade} filterCidades={filterCidades} munclicado={munclicado} setmunclicado={setmunclicado} ></Mapa>
        </div>
        <Main setTexto={setTexto} texto={texto} setConcorretes={setConcorretes} concorrentes={concorrentes} nameCidade={nameCidade} setNameCidade={setNameCidade} filterCidades={filterCidades} munclicado={munclicado}  setmunclicado={setmunclicado}></Main>
      </main>
      <div className='descricao'>
            <div className='bloco1'>
              <span className='spam-1'><FaSquareFull /><p>Municipios onde a Marques atua.</p></span>
              <span className='spam-2'><FaSquareFull /><p>Municipios onde a Marques ainda não atua.</p></span>
              <span className='spam-3'><FaSquareFull /><p>Municipio Selecionado.</p></span>
              </div>
            <div className='bloco2'>{texto}</div>
            <div className='bloco3'><h1>Concorrentes:</h1>
            {concorrentes.map((concorrente, index) => (
              <p key={index}>{concorrente}</p>
            ))}</div>
          </div>
    </div>
  )
}

export default App
