import React from 'react'

function Boton({className,handleClick,children}) {
  return <button className={className} onClick={handleClick}>{children}</button>

}

export default Boton
