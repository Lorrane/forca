import './styles.css';
import React, { useState } from 'react';
import useForca from '../useForca';
import usePalavra from '../usePalavra';
import Teclado from '../Teclado';

export default function JogoDaForca() {

    const [chances, setChances] =useState(0);
    const letras = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S','T', 'U', 'V', 'W', 'X', 'Y', 'Z']
    const [forca, setForca] = useForca(chances);
    const [palpite, setPalpite, setPalavra] = usePalavra("");

    // const handleTeste = () => {
    //     setForca(6);
    // }
    // const handleTeste1 = () => {
    //     setForca(-1);
    // }

    const handleButton = (letra) =>{
        letra.target.disabled = true;
        // console.log(letra);
        setPalpite(letra.target.innerText)
    }

    return (
        <main className='principal'>
            <img src={forca} alt="algo" />
            {palpite}
            {/* <button onClick={handleTeste}>Teste</button>
            <button onClick={handleTeste1}>Teste1</button> */}
            <div className='letras'>
            {letras.map((letra)=>(
                <button  onClick={handleButton} key={letra}>{letra}</button>
            ))}
            </div>
        </main>
    )
}
