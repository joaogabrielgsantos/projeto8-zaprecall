import React from "react";
import Topo from "./Topo";
import Footer from "./Footer";


function TelaRecall({ visible }) {
    const recalls = [
        { question: "O que é JSX?", answer: "Uma extensão de linguagem do JavaScript" },
        { question: "O React é __", answer: "uma biblioteca JavaScript para construção de interfaces" },
        { question: "Componentes devem iniciar com __ ", answer: "letra maiúscula" },
        { question: "Podemos colocar __ dentro do JSX", answer: "expressões" },
        { question: "O ReactDOM nos ajuda __ ", answer: "interagindo com a DOM para colocar componentes React na mesma" }
    ]
    

    const [selecionada, setSelecionada] = React.useState(false)


    return (
        <>
            <div className={!visible ? "container" : "hidden"}>
                <Topo />
                <ul>
                    <li className={selecionada ? "pergunta-selecionada" : ""}>
                        <h2>Pergunta 1</h2>
                        <ion-icon name="play-outline"  onClick={selecionada ? "" : () => setSelecionada(!selecionada)}></ion-icon>
                    </li>
                </ul>
                <Footer />

            </div>
        </>

    )
}

export default TelaRecall;