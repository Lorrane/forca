import './styles.css';
import { useEffect, useState } from 'react';

export default function usePalavra(prop) {

  const [palavra, setPalavra] = useState("PINDAMONHANGABA");
  const [segredo, setSegredo] = useState("");
  const [palpite, setPalpite] = useState(prop.palpite);
  const [conteudo, setConteudo] = useState("");

  useEffect(() => {
    let variavel = "";
    let tratamento = "";
    if (segredo === "") {
      for (let index = 0; index < palavra.length; index++) {
        variavel = variavel + "_";
        tratamento = tratamento + variavel.charAt(index) + " ";
      }
    } else {
      // Percorre todo o segredo letra por letra
      for (let index = 0; index < segredo.length; index++) {
        // Se o item atual do segredo já foi revelado
        if (segredo.charAt(index) !== "_") {
          // variavel recebe a letra já revelada
          variavel = variavel + segredo.charAt(index);
          // tratamento adiciona espaço
          tratamento = tratamento + segredo.charAt(index) + " ";
          // Caso o item do segredo não tenha sido revelado
          // verifica se o item é igual ao do palpite
        } else if (palavra.charAt(index) === palpite) {
          // variavel recebe o palpite
          variavel = variavel + palpite;
          // tratamento adiciona espaço
          tratamento = tratamento + palpite + " ";
          // Letra continua oculta
        } else {
          // variavel recebe espaço de letra a ser revelada
          variavel = variavel + "_";
          // tratamento adiciona espaço
          tratamento = tratamento + variavel.charAt(index) + " ";
        }
      }
    }
    // seta o segredo sem espaço
    setSegredo(variavel);
    // seta a conteudo com espaço para ser exibido
    setConteudo(tratamento);

  }, [palpite]);



  return (
    [conteudo, setPalpite, setPalavra]
  )
}
