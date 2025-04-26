import React from 'react'
import Li from '../atoms/Li'
import Image from '../atoms/Image'

function List({mapped}) {
  return (
    <div className='list' >
        {
          (mapped).map((gal,index)=>{
            return <div className='listComp' key={index}>
              <Image src={gal.image} alt={""}/>
              <Li child={gal.comp}/>
            </div>
          })
        }
    </div>
  )
}

export default List
