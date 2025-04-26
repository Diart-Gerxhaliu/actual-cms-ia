import React from 'react'

function Input({
    type,
    name,
    placeholder,
    value
}) {
  return (
    <div>
        <input type={type} name={name} placeholder={placeholder} value={value}/>
    </div>
  )
}

export default Input
