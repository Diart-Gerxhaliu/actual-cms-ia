import React from 'react'
import { Link } from 'react-router-dom'

function Admin() {
  return (
    <div className='admin'>
      <Link to={"/admin/login"}><button type='button'>/Login</button></Link>
      <Link to={"/admin/dashboard"}><button type='button'>Dashboard</button></Link>
      
    </div>
  )
}

export default Admin
