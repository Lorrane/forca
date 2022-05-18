import "./styles.css";
import React, { useEffect, useState } from "react";
import Forca from "../Forca";
import Palavra from "../Palavra";
import Popup from "../Popup";

export default function JogoDaForca() {
    const palavras = [
        "LORRANE",
        "ITAQUAQUECETUBA",
        "PINDAMONHANGABA",
        "MERCEDES",
        "INCONSTITUCIONALISSISSIMAMENTE",
        "LEVIANO",
    ];
    const [jogavel, setJogavel] = useState(true);
    const [letrasCorretas, setLetrasCorretas] = useState([]);
    const [letra, setLetra] = useState();
    const [palavraEscolhida, setPalavraEscolhida] = useState(
        palavras[Math.floor(Math.random() * palavras.length)]
    );

    const [forca, setForca] = useState(0);
    const letras = [
        "A",
        "B",
        "C",
        "D",
        "E",
        "F",
        "G",
        "H",
        "I",
        "J",
        "K",
        "L",
        "M",
        "N",
        "O",
        "P",
        "Q",
        "R",
        "S",
        "T",
        "U",
        "V",
        "W",
        "X",
        "Y",
        "Z",
    ];

    useEffect(() => {
        // se jogavel for true
        if (jogavel) {
            // se o palpite existe na palavra
            if (palavraEscolhida.includes(letra)) {
                // se o palpite não existe na lista de letras corretas
                if (!letrasCorretas.includes(letra)) {
                    // inclui o palpite nas letras corretas
                    setLetrasCorretas((prev) => [...prev, letra]);
                }
                // se o palpite não existe na palavra e se a forca está no limite
            } else if (forca === 6) {
                // setJogavel(false);
                setForca(-1);
                // se o palpite não existe na palavra e a forca não está no limite
            } else if (letra !== undefined) {
                setForca(forca + 1);
            }
        }
    }, [letra, jogavel]);

    function jogarNovamente() {
        window.location.reload();

        // setJogavel(true);

        // // Empty Arrays
        // setLetrasCorretas([]);

        // const random = Math.floor(Math.random() * palavras.length);
        // setPalavraEscolhida(palavras[random]);
    }

    return (
        <main className="principal">
            <Forca caminho={forca} />
            <Palavra
                palavraEscolhida={palavraEscolhida}
                letrasCorretas={letrasCorretas}
            />
            <div className="letras">
                {letras.map((i) => (
                    <button
                        onClick={(props) => {
                            props.target.disabled = true;
                            setLetra(i);
                        }}
                        key={i}
                    >
                        {i}
                    </button>
                ))}
            </div>
            <Popup
                letrasCorretas={letrasCorretas}
                palavraEscolhida={palavraEscolhida}
                forca={forca}
                setForca={setForca}
                setJogavel={setJogavel}
                jogarNovamente={jogarNovamente}
            />
        </main>
    );
}
