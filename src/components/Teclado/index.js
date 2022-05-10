import './styles.css';
import React, { useState } from 'react';
import usePalavra from '../usePalavra';

export default function Teclado() {

  const [teclado, setTeclado] = useState([
    'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S','T', 'U', 'V', 'W', 'X', 'Y', 'Z'
  ])
  const [palpite, setPalpite, setPalavra] = usePalavra("");

  const handleClick = (letra) => {
    console.log('a');
  }  

  return (
    <div>
      {/* {teclado.map((tecla) => ( */}
        <button onClick={handleClick} className='letra'>{teclado[0]}</button>
      {/* ))} */}
    </div>
  )
}
