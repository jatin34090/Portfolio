import React from 'react'

const Button = ({text , onClick, type,className}) => {
  return (
    <button type={type} onClick={onClick} className={`border-2 cursor-pointer rounded-lg px-4 lg:px-5 py-2 lg:py:2.5 mr-2 ${className}`}>{text}</button>
    // <button type={type} onClick={onClick} className={`border-2 cursor-pointer hover:bg-sky-400 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py:2.5 mr-2 ${className}`}>{text}</button>

  )
}

export default Button