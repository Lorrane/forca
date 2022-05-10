import './styles.css';
import { useState } from 'react';
import derrota from './../../assets/images/derrota.png';
import forca from './../../assets/images/forca0.png';
import forca1 from './../../assets/images/forca1.png';
import forca2 from './../../assets/images/forca2.png';
import forca3 from './../../assets/images/forca3.png';
import forca4 from './../../assets/images/forca4.png';
import forca5 from './../../assets/images/forca5.png';
import forca6 from './../../assets/images/forca6.png';
import vitoria4 from './../../assets/images/vitoria4.png';
import vitoria5 from './../../assets/images/vitoria5.png';
import vitoria6 from './../../assets/images/vitoria6.png';

export default function useForca(status) {

  const [imagem, setImagem] = useState(forca);

  function setImage (status) {
    switch (status) {
      case 0:
        setImagem(forca);
        break;
      case 1:
        setImagem(forca1);
        break;
      case 2:
        setImagem(forca2);
        break;
      case 3:
        setImagem(forca3);
        break;
      case 4:
        setImagem(forca4);
        break;
      case 5:
        setImagem(forca5);
        break;
      case 6:
        setImagem(forca6);
        break;
      case -1:
        setImagem(derrota);
        break;
      case 44:
        setImagem(vitoria4);
        break;
      case 55:
        setImagem(vitoria5);
        break;
      case 66:
        setImagem(vitoria6);
        break;
      default:
        setImagem(forca);
    }
  }

    

  return([imagem, setImage])
}
