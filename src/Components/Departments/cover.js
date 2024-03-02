// import React from 'react'

// import "./style.css"
// import { motion } from "framer-motion"




// const Cover    = () => {
//   return (
//     <>
// <div ClassName='image'  >
// <motion.div initial ={{x:0}}
// animate={{x:[400,0]}}
// transition={{ repeat: 0, duration: 2, delay:0.1}}>
//     <h1>    Welcome to our Department Page</h1>
//     <em>Examples of cleaness is Right Here...</em>
//     </motion.div>
// </div>

// </> 
//   )
// }


// export default Cover
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
    <h1>Welcome to our Department Page</h1>
    <h3>Extraordinary Care Is Right Here..</h3>
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




