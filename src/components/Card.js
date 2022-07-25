import React from "react"


function Card({selecionada, setSelecionada, index}) {




    return (
        <li>
            <h2>Pergunta {index + 1}</h2>
            <ion-icon name="play-outline" onClick={() => setSelecionada(!selecionada)}></ion-icon>
        </li>
    )
}

export default Card;
