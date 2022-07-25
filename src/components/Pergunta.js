import React from "react"

function Pergunta({ question }) {


    return (

        <li className="pergunta-selecionada">
            <h2>{question}</h2>
            <img src="./ZapRecall-Recursos/setinha.png" />
        </li>

    )
}

export default Pergunta;