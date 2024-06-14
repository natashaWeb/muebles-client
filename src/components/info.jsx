import React from 'react'

export const Info = ({actualIndex, index, classType, texto, titulo, autor}) => {
  return (
    <div className={`info ${
        actualIndex == index ? `${classType} visible` : ""
    }`}>
        <span>{autor}</span>
        <h3>{titulo}</h3>
        <p>{texto}</p>
    </div>
  )
}
