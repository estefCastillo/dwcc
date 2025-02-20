import { useState } from "react"

function App2() {
  const [estado,setEstado]=useState({
    contador:0,
    color:"#222"
  })

  function handleClick(ev){
    const styles=ev.target.classList

    if(styles.contains("decrementar")){
      setEstado((estado)=>{
        let contador=estado.contador-1
        let color="#222"
        if(contador<0) color="red"
        if(contador>0) color="green"
        return {contador,color}
      })
    }
    if(styles.contains("incrementar")){
        setEstado((estado)=>{
            let contador=estado.contador+1
            let color="#222"
            if(contador<0) color="red"
            if(contador>0) color="green"
            return {contador,color}
          })
    }
    if(styles.contains("reset")){
        setEstado((estado)=>{
            let contador=0
            let color="#222"
            return {contador,color}
          })
    }
  }
  return (
    <>
      <main>
      <div className="contenedor">
        <h1>Contador</h1>
        <span id="valor" style={{color:estado.color}}>{estado.contador}</span>
        <div className="button-contenedor">
          <button id="minus" className="btn decrementar" onClick={handleClick}>Decrementar</button>
          <button id="reset" className="btn reset" onClick={handleClick}>Resetear</button>
          <button id="plus" className="btn incrementar" onClick={handleClick}>Incrementar</button>
        </div>
      </div>
    </main>
    </>
  )
}

export default App2
