function Palavra({ palavraEscolhida, letrasCorretas }) {
    return (
        <div className="palavra">
            {palavraEscolhida.split("").map((letra, i) => {
                return (
                    <span className="letra" key={i}>
                        {letrasCorretas.includes(letra) ? letra : ""}
                    </span>
                );
            })}
        </div>
    );
}

export default Palavra;
