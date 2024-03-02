import React from 'react'
import Stylehome from './home.module.css'
import { Box } from '@mui/material'
import { motion } from 'framer-motion'

const Mission_div2 = () => {
  const BoxVariants = {
    initial: {
      opacity: 0 ,
      x: 0 ,
    },
    animate: {
      opacity: 1,
      x: 50,
      transition: {
        delay: 0.05,
        duration: 2,
      }
    }
  };
  return (
    <div className={Stylehome.mission}>
      {/* Boxes */}
      <motion.div className={Stylehome.boxes}
      variants={BoxVariants}
      initial= 'initial'
      whileInView='animate'
      viewport={{once: true}}
      >
      <Box bgcolor="white" borderRadius={2} p={2} mb={2} ml={3} width="30%">
        <h2>Our Mission</h2>
        <p>Our mission is to provide exceptional healthcare services to our community. We are dedicated to improving the health of every individual we serve, striving to make a positive impact on their lives through our commitment to quality care and patient-centered approach.</p>
      </Box>
      </motion.div>
      
      <motion.div className={Stylehome.boxes}
      variants={BoxVariants}
      initial= 'initial'
      whileInView='animate'
      viewport={{once: true}}
      >
      <Box bgcolor="white" borderRadius={2} p={2} mb={2} ml={7} width="30%">
        <h2>Our Vision</h2>
        <p>Our vision is to be the leading healthcare provider known for delivering outstanding medical care, advancing medical research, and promoting health education. We aim to continuously improve and innovate, setting new standards in healthcare excellence.</p>
      </Box>
      </motion.div>
      
      <motion.div className={Stylehome.boxes}
      variants={BoxVariants}
      initial= 'initial'
      whileInView='animate'
      viewport={{once: true}}
      >
      <Box bgcolor="white" borderRadius={2} p={2} mb={2} ml={11} width="30%">
        <h2>Who We Are</h2>
        <p>We are a dedicated team of healthcare professionals committed to serving our community with integrity and respect. With a collective passion for healing, we work tirelessly to meet the healthcare needs of our patients, ensuring they receive personalized care at their healthcare journey.</p>
      </Box>
      </motion.div>
      
    </div>
  )
}

export default Mission_div2
