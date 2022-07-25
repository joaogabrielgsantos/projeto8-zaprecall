import React from "react"
import "./style.css"


function Card({index}) {
    


    return (
        <li className="card">
            <h2>Pergunta {index + 1}</h2>
            <ion-icon name="play-outline"></ion-icon>
        </li>
    )
}

export default Card;
