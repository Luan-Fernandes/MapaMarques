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

const App = () => {
  const [nameCidade, setNameCidade] = useState('')
  const [munclicado, setmunclicado] = useState('')
  const cidades = [
    { id: 1, Municipio: 'Recife', Texto: 'Texto Recife.' },
    { id: 2, Municipio: 'Olinda', Texto: 'Texto Olinda.' },
    { id: 3, Municipio: 'Jaboatão dos Guararapes', Texto: 'Texto Jaboatão dos Guararapes.' },
    { id: 4, Municipio: 'Caruaru', Texto: 'Texto Caruaru.' },
    { id: 5, Municipio: 'Petrolina', Texto: 'Texto Petrolina.' },
    { id: 6, Municipio: 'Camaragibe', Texto: 'Texto Camaragibe.' },
    { id: 7, Municipio: 'São Lourenço da Mata', Texto: 'Texto São Lourenço da Mata.' },
    { id: 8, Municipio: 'Garanhuns', Texto: 'Texto Garanhuns.' },
    { id: 9, Municipio: 'Igarassu', Texto: 'Texto Igarassu.' },
    { id: 10, Municipio: 'Abreu e Lima', Texto: 'Texto Abreu e Lima.' },
    { id: 11, Municipio: 'Gravatá', Texto: 'Texto Gravatá.' },
    { id: 12, Municipio: 'Santa Cruz do Capibaribe', Texto: 'Texto Santa Cruz do Capibaribe.' },
    { id: 13, Municipio: 'Petrolândia', Texto: 'Texto Petrolândia.' },
    { id: 14, Municipio: 'Limoeiro', Texto: 'Texto Limoeiro.' },
    { id: 15, Municipio: 'Salgueiro', Texto: 'Texto Salgueiro.' },
    { id: 16, Municipio: 'Ouricuri', Texto: 'Texto Ouricuri.' },
    { id: 17, Municipio: 'Belém de Maria', Texto: 'Texto Belém de Maria.' },
    { id: 18, Municipio: 'Belo Jardim', Texto: 'Texto Belo Jardim.' },
    { id: 19, Municipio: 'Pão de Açúcar', Texto: 'Texto Pão de Açúcar.' },
    { id: 20, Municipio: 'Surubim', Texto: 'Texto Surubim.' },
    { id: 21, Municipio: 'Lagoa do Carro', Texto: 'Texto Lagoa do Carro.' },
    { id: 22, Municipio: 'Xexéu', Texto: 'Texto Xexéu.' },
    { id: 23, Municipio: 'Bezerros', Texto: 'Texto Bezerros.' },
    { id: 24, Municipio: 'São Bento do Una', Texto: 'Texto São Bento do Una.' },
    { id: 25, Municipio: 'Pernambuco', Texto: 'Texto Pernambuco.' },
    { id: 26, Municipio: 'Ferreiros', Texto: 'Texto Ferreiros.' },
    { id: 27, Municipio: 'Sertânia', Texto: 'Texto Sertânia.' },
    { id: 28, Municipio: 'Bodocó', Texto: 'Texto Bodocó.' },
    { id: 29, Municipio: 'São Caetano', Texto: 'Texto São Caetano.' },
    { id: 30, Municipio: 'Timbaúba', Texto: 'Texto Timbaúba.' },
    { id: 31, Municipio: 'Saloá', Texto: 'Texto Saloá.' },
    { id: 32, Municipio: 'Itamaracá', Texto: 'Texto Itamaracá.' },
    { id: 33, Municipio: 'Moreno', Texto: 'Texto Moreno.' },
    { id: 34, Municipio: 'Jataúba', Texto: 'Texto Jataúba.' },
    { id: 35, Municipio: 'Orobó', Texto: 'Texto Orobó.' },
    { id: 36, Municipio: 'Brejo da Madre de Deus', Texto: 'Texto Brejo da Madre de Deus.' },
    { id: 37, Municipio: 'João Alfredo', Texto: 'Texto João Alfredo.' },
    { id: 38, Municipio: 'Tabira', Texto: 'Texto Tabira.' },
    { id: 39, Municipio: 'Toritama', Texto: 'Texto Toritama.' },
    { id: 40, Municipio: 'Panelas', Texto: 'Texto Panelas.' },
    { id: 41, Municipio: 'Carpina', Texto: 'Texto Carpina.' },
    { id: 42, Municipio: 'Águas Belas', Texto: 'Texto Águas Belas.' },
    { id: 43, Municipio: 'Lagoa Grande', Texto: 'Texto Lagoa Grande.' },
    { id: 44, Municipio: 'Tacaratu', Texto: 'Texto Tacaratu.' },
    { id: 45, Municipio: 'Quipapá', Texto: 'Texto Quipapá.' },
    { id: 46, Municipio: 'Condado', Texto: 'Texto Condado.' },
    { id: 47, Municipio: 'Venturosa', Texto: 'Texto Venturosa.' },
    { id: 48, Municipio: 'Serrita', Texto: 'Texto Serrita.' },
    { id: 49, Municipio: 'São João', Texto: 'Texto São João.' },
    { id: 50, Municipio: 'Itambé', Texto: 'Texto Itambé.' },
    { id: 51, Municipio: 'Ouro Preto', Texto: 'Texto Ouro Preto.' },
    { id: 52, Municipio: 'Paudalho', Texto: 'Texto Paudalho.' },
    { id: 53, Municipio: 'Verdejante', Texto: 'Texto Verdejante.' },
    { id: 54, Municipio: 'Chã Grande', Texto: 'Texto Chã Grande.' },
    { id: 55, Municipio: 'Cabo de Santo Agostinho', Texto: 'Texto Cabo de Santo Agostinho.' },
    { id: 56, Municipio: 'São Vicente Ferrer', Texto: 'Texto São Vicente Ferrer.' },
    { id: 57, Municipio: 'Barra de Guabiraba', Texto: 'Texto Barra de Guabiraba.' },
    { id: 58, Municipio: 'Inajá', Texto: 'Texto Inajá.' },
    { id: 59, Municipio: 'Sítio do Moinho', Texto: 'Texto Sítio do Moinho.' },
    { id: 60, Municipio: 'Gravatá', Texto: 'Texto Gravatá.' },
    { id: 61, Municipio: 'Serrita', Texto: 'Texto Serrita.' },
    { id: 62, Municipio: 'Goiana', Texto: 'Texto Goiana.' },
    { id: 63, Municipio: 'Maraial', Texto: 'Texto Maraial.' },
    { id: 64, Municipio: 'São José do Belmonte', Texto: 'Texto São José do Belmonte.' },
    { id: 65, Municipio: 'Chã de Alegria', Texto: 'Texto Chã de Alegria.' },
    { id: 66, Municipio: 'Alagoinha', Texto: 'Texto Alagoinha.' },
    { id: 67, Municipio: 'Mirandiba', Texto: 'Texto Mirandiba.' },
    { id: 68, Municipio: 'Feira Nova', Texto: 'Texto Feira Nova.' },
    { id: 69, Municipio: 'Macaparana', Texto: 'Texto Macaparana.' },
    { id: 70, Municipio: 'Itaíba', Texto: 'Texto Itaíba.' },
    { id: 71, Municipio: 'São José da Coroa Grande', Texto: 'Texto São José da Coroa Grande.' },
    { id: 72, Municipio: 'Santa Maria do Cambucá', Texto: 'Texto Santa Maria do Cambucá.' },
    { id: 73, Municipio: 'Arcoverde', Texto: 'Texto Arcoverde.' },
    { id: 74, Municipio: 'Tabatinga', Texto: 'Texto Tabatinga.' },
    { id: 75, Municipio: 'Iguaracy', Texto: 'Texto Iguaracy.' },
    { id: 76, Municipio: 'Toritama', Texto: 'Texto Toritama.' },
    { id: 77, Municipio: 'Vitoria de Santo Antão', Texto: 'Texto Vitoria de Santo Antão.' },
    { id: 78, Municipio: 'Sao Joaquim do Monte', Texto: 'Texto São Joaquim do Monte.' },
    { id: 79, Municipio: 'Jurema', Texto: 'Texto Jurema.' },
    { id: 80, Municipio: 'Camaragibe', Texto: 'Texto Camaragibe.' },
    { id: 81, Municipio: 'Lagoa do Itaenga', Texto: 'Texto Lagoa do Itaenga.' },
    { id: 82, Municipio: 'Agrestina', Texto: 'Texto Agrestina.' },
    { id: 83, Municipio: 'Taquaritinga do Norte', Texto: 'Texto Taquaritinga do Norte.' },
    { id: 84, Municipio: 'São José da Mata', Texto: 'Texto São José da Mata.' },
    { id: 85, Municipio: 'Orobó', Texto: 'Texto Orobó.' },
    { id: 86, Municipio: 'São Vicente Ferrer', Texto: 'Texto São Vicente Ferrer.' },
    { id: 87, Municipio: 'São Pedro', Texto: 'Texto São Pedro.' },
    { id: 88, Municipio: 'Iguaracy', Texto: 'Texto Iguaracy.' },
    { id: 89, Municipio: 'Floresta', Texto: 'Texto Floresta.' },
    { id: 90, Municipio: 'Prazeres', Texto: 'Texto Prazeres.' },
    { id: 91, Municipio: 'Camutanga', Texto: 'Texto Camutanga.' },
    { id: 92, Municipio: 'Gado Bravo', Texto: 'Texto Gado Bravo.' },
    { id: 93, Municipio: 'Tupanatinga', Texto: 'Texto Tupanatinga.' },
    { id: 94, Municipio: 'Ibiporã', Texto: 'Texto Ibiporã.' },
    { id: 95, Municipio: 'Santa Terezinha', Texto: 'Texto Santa Terezinha.' },
    { id: 96, Municipio: 'Pombos', Texto: 'Texto Pombos.' },
    { id: 97, Municipio: 'Surubim', Texto: 'Texto Surubim.' },
    { id: 98, Municipio: 'Tupanatinga', Texto: 'Texto Tupanatinga.' },
    { id: 99, Municipio: 'São José da Coroa Grande', Texto: 'Texto São José da Coroa Grande.' },
    { id: 100, Municipio: 'Cabo de Santo Agostinho', Texto: 'Texto Cabo de Santo Agostinho.' },
    { id: 101, Municipio: 'Camaragibe', Texto: 'Texto Camaragibe.' },
    { id: 102, Municipio: 'Sertânia', Texto: 'Texto Sertânia.' },
    { id: 103, Municipio: 'Santa Cruz da Baixa Verde', Texto: 'Texto Santa Cruz da Baixa Verde.' },
    { id: 104, Municipio: 'São José do Egito', Texto: 'Texto São José do Egito.' },
    { id: 105, Municipio: 'Passira', Texto: 'Texto Passira.' },
    { id: 106, Municipio: 'Toritama', Texto: 'Texto Toritama.' },
    { id: 107, Municipio: 'Belém de São Francisco', Texto: 'Texto Belém de São Francisco.' },
    { id: 108, Municipio: 'Afogados da Ingazeira', Texto: 'Texto Afogados da Ingazeira.' },
    { id: 109, Municipio: 'São Lourenço da Mata', Texto: 'Texto São Lourenço da Mata.' },
    { id: 110, Municipio: 'Custódia', Texto: 'Texto Custódia.' },
    { id: 111, Municipio: 'Cabo de Santo Agostinho', Texto: 'Texto Cabo de Santo Agostinho.' },
    { id: 112, Municipio: 'Sao Joaquim do Monte', Texto: 'Texto São Joaquim do Monte.' },
    { id: 113, Municipio: 'Belo Jardim', Texto: 'Texto Belo Jardim.' },
    { id: 114, Municipio: 'Salgueiro', Texto: 'Texto Salgueiro.' },
    { id: 115, Municipio: 'São José do Egito', Texto: 'Texto São José do Egito.' },
    { id: 116, Municipio: 'Quixaba', Texto: 'Texto Quixaba.' },
    { id: 117, Municipio: 'Riacho das Almas', Texto: 'Texto Riacho das Almas.' },
    { id: 118, Municipio: 'São José do Belmonte', Texto: 'Texto São José do Belmonte.' },
    { id: 119, Municipio: 'Ibiporã', Texto: 'Texto Ibiporã.' },
    { id: 120, Municipio: 'Águas Belas', Texto: 'Texto Águas Belas.' },
    { id: 121, Municipio: 'Mirandiba', Texto: 'Texto Mirandiba.' },
    { id: 122, Municipio: 'Toritama', Texto: 'Texto Toritama.' },
    { id: 123, Municipio: 'Bodocó', Texto: 'Texto Bodocó.' },
    { id: 124, Municipio: 'Cabo de Santo Agostinho', Texto: 'Texto Cabo de Santo Agostinho.' },
    { id: 125, Municipio: 'Paranatama', Texto: 'Texto Paranatama.' },
    { id: 126, Municipio: 'Santo Amaro', Texto: 'Texto Santo Amaro.' },
    { id: 127, Municipio: 'Catende', Texto: 'Texto Catende.' },
    { id: 128, Municipio: 'São Pedro', Texto: 'Texto São Pedro.' },
    { id: 129, Municipio: 'Chã Grande', Texto: 'Texto Chã Grande.' },
    { id: 130, Municipio: 'São José da Coroa Grande', Texto: 'Texto São José da Coroa Grande.' },
    { id: 131, Municipio: 'Surubim', Texto: 'Texto Surubim.' },
    { id: 132, Municipio: 'Condado', Texto: 'Texto Condado.' },
    { id: 133, Municipio: 'Cabo de Santo Agostinho', Texto: 'Texto Cabo de Santo Agostinho.' },
    { id: 134, Municipio: 'Sanharó', Texto: 'Texto Sanharó.' },
    { id: 135, Municipio: 'São Pedro', Texto: 'Texto São Pedro.' },
    { id: 136, Municipio: 'Venturosa', Texto: 'Texto Venturosa.' },
    { id: 137, Municipio: 'Salgueiro', Texto: 'Texto Salgueiro.' },
    { id: 138, Municipio: 'São Lourenço da Mata', Texto: 'Texto São Lourenço da Mata.' },
    { id: 139, Municipio: 'Belém de São Francisco', Texto: 'Texto Belém de São Francisco.' },
    { id: 140, Municipio: 'Riacho das Almas', Texto: 'Texto Riacho das Almas.' },
    { id: 141, Municipio: 'Pombos', Texto: 'Texto Pombos.' },
    { id: 142, Municipio: 'Igarassu', Texto: 'Texto Igarassu.' },
    { id: 143, Municipio: 'Riacho das Almas', Texto: 'Texto Riacho das Almas.' },
    { id: 144, Municipio: 'Buíque', Texto: 'Texto Buíque.' },
    { id: 145, Municipio: 'Agrestina', Texto: 'Texto Agrestina.' },
    { id: 146, Municipio: 'Tamandaré', Texto: 'Texto Tamandaré.' },
    { id: 147, Municipio: 'Petrolândia', Texto: 'Texto Petrolândia.' },
    { id: 148, Municipio: 'Surubim', Texto: 'Texto Surubim.' },
    { id: 149, Municipio: 'Igarassu', Texto: 'Texto Igarassu.' },
    { id: 150, Municipio: 'Parnamirim', Texto: 'Texto Parnamirim.' },
    { id: 151, Municipio: 'Ibiporã', Texto: 'Texto Ibiporã.' },
    { id: 152, Municipio: 'Jataúba', Texto: 'Texto Jataúba.' },
    { id: 153, Municipio: 'Tabira', Texto: 'Texto Tabira.' },
    { id: 154, Municipio: 'São Vicente Ferrer', Texto: 'Texto São Vicente Ferrer.' },
    { id: 155, Municipio: 'São José do Belmonte', Texto: 'Texto São José do Belmonte.' },
    { id: 156, Municipio: 'Cabo de Santo Agostinho', Texto: 'Texto Cabo de Santo Agostinho.' },
    { id: 157, Municipio: 'Camaragibe', Texto: 'Texto Camaragibe.' },
    { id: 158, Municipio: 'São Joaquim do Monte', Texto: 'Texto São Joaquim do Monte.' },
    { id: 159, Municipio: 'Belém de Maria', Texto: 'Texto Belém de Maria.' },
    { id: 160, Municipio: 'Belo Jardim', Texto: 'Texto Belo Jardim.' },
    { id: 161, Municipio: 'São Pedro', Texto: 'Texto São Pedro.' },
    { id: 162, Municipio: 'São João', Texto: 'Texto São João.' },
    { id: 163, Municipio: 'São José do Egito', Texto: 'Texto São José do Egito.' },
    { id: 164, Municipio: 'Jaboatão dos Guararapes', Texto: 'Texto Jaboatão dos Guararapes.' },
    { id: 165, Municipio: 'Sertânia', Texto: 'Texto Sertânia.' },
    { id: 166, Municipio: 'Salgueiro', Texto: 'Texto Salgueiro.' },
    { id: 167, Municipio: 'Iguaracy', Texto: 'Texto Iguaracy.' },
    { id: 168, Municipio: 'Condado', Texto: 'Texto Condado.' },
    { id: 169, Municipio: 'Xexéu', Texto: 'Texto Xexéu.' },
    { id: 170, Municipio: 'São José da Mata', Texto: 'Texto São José da Mata.' },
    { id: 171, Municipio: 'Sítio do Moinho', Texto: 'Texto Sítio do Moinho.' },
    { id: 172, Municipio: 'Itaíba', Texto: 'Texto Itaíba.' },
    { id: 173, Municipio: 'Lagoa Grande', Texto: 'Texto Lagoa Grande.' },
    { id: 174, Municipio: 'Barra de Guabiraba', Texto: 'Texto Barra de Guabiraba.' },
    { id: 175, Municipio: 'São Lourenço da Mata', Texto: 'Texto São Lourenço da Mata.' },
    { id: 176, Municipio: 'Salgueiro', Texto: 'Texto Salgueiro.' },
    { id: 177, Municipio: 'Jataúba', Texto: 'Texto Jataúba.' },
    { id: 178, Municipio: 'Limoeiro', Texto: 'Texto Limoeiro.' },
    { id: 179, Municipio: 'São José do Egito', Texto: 'Texto São José do Egito.' },
    { id: 180, Municipio: 'Afogados da Ingazeira', Texto: 'Texto Afogados da Ingazeira.' },
    { id: 181, Municipio: 'Santo Amaro', Texto: 'Texto Santo Amaro.' },
    { id: 182, Municipio: 'Belo Jardim', Texto: 'Texto Belo Jardim.' },
    { id: 183, Municipio: 'Tacaratu', Texto: 'Texto Tacaratu.' },
    { id: 184, Municipio: 'Jaboatão dos Guararapes', Texto: 'Texto Jaboatão dos Guararapes.' },
    { id: 185, Municipio: 'Brejo da Madre de Deus', Texto: 'Texto Brejo da Madre de Deus.' },
    { id: 186, Municipio: 'Itambé', Texto: 'Texto Itambé.' },
    { id: 187, Municipio: 'Inajá', Texto: 'Texto Inajá.' },
];
  const filterCidades = nameCidade
    ? cidades.filter(cidade =>
      cidade.Municipio.toLowerCase().includes(nameCidade.toLowerCase())
    )
    : [];
  console.log(filterCidades)
  return (
    <div className="App">
      <header>
        <nav>
          <img onClick={() => window.open('https://marquesconsult.com.br/', '_blank')} className='logo' src={logo} alt="" />
        </nav>
      </header>
      <main>
        <div className='containermapa'>
          <Mapa nameCidade={nameCidade} setNameCidade={setNameCidade} filterCidades={filterCidades} munclicado={munclicado} setmunclicado={setmunclicado} ></Mapa>
        </div>
        <Main nameCidade={nameCidade} setNameCidade={setNameCidade} filterCidades={filterCidades} munclicado={munclicado}  setmunclicado={setmunclicado}></Main>
      </main>
      <div className='descricao'>
            <div className='bloco1'>
              <span className='spam-1'><FaSquareFull /><p>Municipios onde a Marques atua.</p></span>
              <span className='spam-2'><FaSquareFull /><p>Municipios onde a Marques ainda não atua.</p></span>
              <span className='spam-3'><FaSquareFull /><p>Municipio Selecionado.</p></span>
              </div>
            <div className='bloco2'>Sobre a Marques</div>
            <div className='bloco3'>Sobre Concorrentes</div>
          </div>
    </div>
  )
}

export default App
