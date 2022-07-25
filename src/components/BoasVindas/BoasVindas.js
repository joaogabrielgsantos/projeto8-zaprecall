import React from "react";
import "./style.css"

function BoasVindas ({visible , setVisible}){
    return (
        <>
        <div className={visible ? "container" : "hidden"}>
            <img src="./assets/logopg1.png" alt="logo" />
            <h1>ZapRecall</h1>
            <div className="botao-iniciar" onClick = {() => setVisible(!visible)}>
                <h2>Iniciar Recall</h2>
            </div>
        </div>
        </>
    )
}

export default BoasVindas;