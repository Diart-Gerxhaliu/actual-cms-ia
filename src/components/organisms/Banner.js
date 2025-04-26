import React, { useEffect, useState } from 'react'
import HeDe2Bu from '../molecules/HeDe2Bu'

function Banner({
    backImage,
    h1,
    p,
    button1,
    button2
}) {

      let[bannerStyle, setBannerStyle]= useState({})
  
      
    
      useEffect(() => {
        let style = {
          height: "600px",
          
        }
  
        let styleLS = localStorage.getItem("BannerStyle"); 
        
        if(styleLS==null){
          localStorage.setItem("BannerStyle", JSON.stringify(style))
        } else {
            setBannerStyle(JSON.parse(styleLS));
        }
  
        
    }, [])
  
  return (
    <div className='banner' style={{backgroundImage:`url(${backImage})`,bannerStyle}}>
      <HeDe2Bu
        h1={h1}
        p={p}
        button1={button1}
        button2={button2}
      />
    </div>
  )
}

export default Banner
