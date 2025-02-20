import React from 'react'

function Boton({handleClick,children}) {
  return <button onClick={handleClick}>{children}</button>

}

export default Boton
