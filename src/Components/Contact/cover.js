import React from 'react'
import {motion} from 'framer-motion'

import Stylecover from './cover.module.css'


const Cover = () => {
  return (
    <>
    
    <div className={Stylecover.container}>

    <motion.div initial={{x: 0}}
    animate={{x: [400,0]}}
    transition={{ repeat: 0 ,duration: 3, delay:0.2}}
    className={Stylecover.text}
    >
    <h1>Contact Us</h1>
    <h4>Great doctor if you need your family member to get effective immediate assistance, emergency treatment or a simple consultation.</h4>
    </motion.div>
    
    
  
  </div>
  <div class={Stylecover.shape}>
      <svg viewBox="0 0 2880 90" >
        <path d="M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z" fill="currentColor"></path>
        </svg>
      </div>
  
  
  </>
    
  )
}

export default Cover
