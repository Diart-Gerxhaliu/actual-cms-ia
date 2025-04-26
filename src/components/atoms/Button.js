import React from 'react'

function Button({child}) {
  return (
    <div>
      <button type='button'>{child}</button>
    </div>
  )
}

export default Button
