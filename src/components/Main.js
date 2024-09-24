import React from 'react'
import { FaMagnifyingGlass } from "react-icons/fa6";
const Main = ({nameCidade,setNameCidade,filterCidades,munclicado,setmunclicado,setConcorretes,setTexto}) => {
  console.log(nameCidade)
  return (
      <section>
      <form>
        <label>
        <FaMagnifyingGlass />
        <input type="text" value={nameCidade} placeholder='Buscar...' onChange={e => setNameCidade(e.target.value)} />
        </label>
      </form>
      <div className='components'>
        {filterCidades.map(cidade => (
          <div onClick={() => [setmunclicado(cidade.Municipio),setNameCidade(cidade.Municipio),setConcorretes(cidade.concorrentes),setTexto(cidade.Texto)]} key={cidade.id} className='components-filhos'><FaMagnifyingGlass />{cidade.Municipio} </div>
        ))}
        
      </div>
    </section>
  )
}

export default Main
