import React from 'react'
import Heading from '../atoms/Heading'
import Desc from '../atoms/Desc'
import Button from '../atoms/Button'

function HeDe2Bu({
  h1,
  p,
  button1,
  button2
}) {
  return (
    <div className='heDe2Bu'>
      <Heading child={h1}/>
      <Desc child={p}/>
        <div className='row'>
        <Button child={button1}/>
        <Button child={button2}/>
        </div>
    </div>
  )
}

export default HeDe2Bu
