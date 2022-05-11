import React, { useEffect } from 'react'
import { VerificarVitoria } from '../../helpers';

function Popup({ letrasCorretas, palavraEscolhida, forca, setForca, setJogavel, jogarNovamente }) {
    let mensagemFinal = '';
    let revelarSegredo = '';
    let jogavel = true;

    if (VerificarVitoria(letrasCorretas, palavraEscolhida, forca) === 'vitoria') {
        switch (forca) {
            case 4:
                setForca(44);
                break;
            case 5:
                setForca(55);
                break;
            case 6:
                setForca(66);
                break;
            default:
                break;
        }
        mensagemFinal = 'Parabéns! Você venceu! 😃';
        jogavel = false;
    } else if (VerificarVitoria(letrasCorretas, palavraEscolhida, forca) === 'derrota') {
        mensagemFinal = 'Infelizmente você perdeu. 😕';
        revelarSegredo = `... a palavra era: ${palavraEscolhida}`;
        jogavel = false;
    }

    useEffect(() => setJogavel(jogavel))

    return (
        <div className='popup-container' style={mensagemFinal !== '' ? { display: 'flex' } : {}}>
            <div className='popup'>
                <h2>{mensagemFinal}</h2>
                <h3>{revelarSegredo}</h3>
                <button onClick={jogarNovamente} >Jogar Novamente</button>
            </div>
        </div>
    )
}

export default Popup