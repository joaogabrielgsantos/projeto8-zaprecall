import React from "react";
import Topo from "./Topo";
import Footer from "./Footer";
import Flashcards from "./FlashCards";
import Card from "./Card";
import Pergunta from "./Pergunta";



const recalls = [
    { question: "O que é JSX?", answer: "Uma extensão de linguagem do JavaScript" },
    { question: "O React é __", answer: "uma biblioteca JavaScript para construção de interfaces" },
    { question: "Componentes devem iniciar com __ ", answer: "letra maiúscula" },
    { question: "Podemos colocar __ dentro do JSX", answer: "expressões" }
]

const dataRecall = recalls.map(recall => {
    return { ...recall, selecionada: false, virada: false }
})


function TelaRecall({ visible }) {
    

    const [selecionada, setSelecionada] = React.useState(false)



    return (
        <>
            <div className={!visible ? "container" : "hidden"}>
                <Topo />
                {dataRecall.map((recall, index) => {
                    return (
                        <Flashcards key = {index}>
                            {!selecionada ? <Card index={index} selecionada={recall.selecionada} setSelecionada={setSelecionada} /> : <Pergunta index={index} question={recall.question} answer ={recall.answer} />}
                        </Flashcards>
                    )
                })}
                <Footer />
            </div>
        </>

    )
}

export default TelaRecall;