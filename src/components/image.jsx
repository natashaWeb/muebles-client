import React from 'react'

export const Image = ({img, actualIndex, index, classType, title}) => {
  return (
    <img src={img} className={`image ${
        actualIndex == index ? `${classType} visible` : ""
    }`} alt={title} />
  )
}
