import { useRef, useState } from "react"

function App3() {
  const [contador,setContador]=useState(0)
  const $contador=useRef(null)
  console.log($contador);

  function handleClick(ev){
    const styles=ev.target.classList

    

    function setStyles(contador){
      if(contador>0)
        $contador.current.style.color="green";
      if(contador<0)
        $contador.current.style.color="red";
      if(contador===0)
        $contador.current.style.color="#222";
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
        <span id="valor" ref={$contador}>{contador}</span>
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

export default App3
