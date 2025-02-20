import { useState } from "react"
import Boton from "./components/Boton";

function App4() {
  const [contador,setContador]=useState(0)

  function handleClick(ev){
    const styles=ev.target.classList
    const $contador=document.querySelector("#valor")

    function setStyles(contador){
      if(contador>0)
        $contador.style.color="green";
      if(contador<0)
        $contador.style.color="red";
      if(contador===0)
        $contador.style.color="#222";
    }

    if(styles.contains("decrementar")){
      setContador((contador)=>{
        contador=contador-1
        setStyles(contador)
        return contador
      })
    }
    if(styles.contains("incrementar")){
      setContador((contador)=>{
        contador=contador+1
        setStyles(contador)
        return contador
      })
    }
    if(styles.contains("reset")){
      setContador((contador)=>{
        contador=0
        setStyles(contador)
        return contador
      })
    }
  }

  return (
    <>
      <main>
      <div className="contenedor">
        <h1>Contador</h1>
        <span id="valor">{contador}</span>
        <div className="button-contenedor">
            <Boton className="btn decrementar" handleClick={handleClick}>Decrementar</Boton>
            <Boton className="btn reset" handleClick={handleClick}>Reset</Boton>
            <Boton className="btn incrementar" handleClick={handleClick}>Incrementar</Boton>
        </div>
      </div>
    </main>
    </>
  )
}

export default App4
