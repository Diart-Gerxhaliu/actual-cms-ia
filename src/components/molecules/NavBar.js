import React from 'react'
import { Link } from 'react-router-dom'
import Li from '../atoms/Li'
function NavBar({
    navlist
}) {
  return (
    <div className='navbar'>
      {navlist.map((gal,index)=>{
        return <Link to={gal.href} key={index}>
            <Li child={gal.child}/>
            </Link>
        })}
    </div>
  )
}

export default NavBar
