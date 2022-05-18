import React from "react";
import "./styles.css";

import derrota from "./../../assets/images/derrota.png";
import forca from "./../../assets/images/forca0.png";
import forca1 from "./../../assets/images/forca1.png";
import forca2 from "./../../assets/images/forca2.png";
import forca3 from "./../../assets/images/forca3.png";
import forca4 from "./../../assets/images/forca4.png";
import forca5 from "./../../assets/images/forca5.png";
import forca6 from "./../../assets/images/forca6.png";
import vitoria4 from "./../../assets/images/vitoria4.png";
import vitoria5 from "./../../assets/images/vitoria5.png";
import vitoria6 from "./../../assets/images/vitoria6.png";

function Forca({ caminho }) {
    var imagem = {};

    switch (caminho) {
        case 1:
            imagem = forca1;
            break;
        case 2:
            imagem = forca2;
            break;
        case 3:
            imagem = forca3;
            break;
        case 4:
            imagem = forca4;
            break;
        case 5:
            imagem = forca5;
            break;
        case 6:
            imagem = forca6;
            break;
        case -1:
            imagem = derrota;
            break;
        case 44:
            imagem = vitoria4;
            break;
        case 55:
            imagem = vitoria5;
            break;
        case 66:
            imagem = vitoria6;
            break;
        default:
            imagem = forca;
    }

    return <img src={imagem} alt="Imagem da forca" />;
}

export default Forca;
