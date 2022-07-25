import React from "react";
import Topo from "./Topo/Topo";
import Footer from "./Footer/Footer";
import Card from "./Card/Card";
import Pergunta from "./Pergunta/Pergunta";



const recalls = [
    { question: "O que é JSX?", answer: "Uma extensão de linguagem do JavaScript" },
    { question: "O React é __", answer: "uma biblioteca JavaScript para construção de interfaces" },
    { question: "Componentes devem iniciar com __ ", answer: "letra maiúscula" },
    { question: "Podemos colocar __ dentro do JSX", answer: "expressões" }
]



function TelaRecall({ visible }) {
    
    const [selecionada, setSelecionada] = React.useState(false)

  

    
    function Flashcards({children}) {
        

        console.log(`Essa é a virada: ${selecionada}`)

    
            return (
                <ul onClick={()=>setSelecionada(true)}>
                    {children}
                </ul>
            )
       
    }
    
    
   
  


    return (
        <>
            <div className={!visible ? "container" : "hidden"}>
                <Topo />
                {recalls.map((recall, index) => {
                    return (
                        <Flashcards key = {index}>
                            {selecionada ? <Pergunta index={index} question={recall.question} answer ={recall.answer}/> : <Card index={index} /> }
                        </Flashcards>
                    )
                })}
                <Footer />
            </div>
        </>

    )
}

export default TelaRecall;