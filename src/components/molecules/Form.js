import React from 'react'
import Input from '../atoms/Input'

function Form({mapping}) {
  return (
    <div>
      {mapping.map((gal,index)=>{
        return <Input key={index} 
            type={gal.type}
            placeholder={gal.placeholder}
            name={gal.name}
            />
        })}
    </div>
  )
}

export default Form
