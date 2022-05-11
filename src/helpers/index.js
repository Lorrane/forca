
export function VerificarVitoria(letrasCorretas, palavraEscolhida, forca) {

    let status = 'vitoria';

    palavraEscolhida.split("").forEach(letra => {
        if (!letrasCorretas.includes(letra)) {
            status = '';
        }
    });

    if (forca === -1) status = 'derrota';

    return status;


}
