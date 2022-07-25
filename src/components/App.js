import BoasVindas from "./BoasVindas";
import TelaRecall from "./TelaRecall"
import React from "react";
function App (){
    const [visible , setVisible] = React.useState(true)
    return (
        <>
        <BoasVindas visible = {visible} setVisible = {setVisible}/>
        <TelaRecall visible = {visible} setVisible = {setVisible} />
        
        
        </>
    )
}

export default App; 