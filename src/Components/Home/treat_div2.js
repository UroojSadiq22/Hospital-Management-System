import React from 'react'
import Stylehome from './home.module.css'
import Image1 from '../../Ui/sliderImg1.jpg'
import { motion } from 'framer-motion'

const Treat_div1 = () => {
  
  return (
    <div className={Stylehome.abouttreatment}>
      {/* Image side */}
      <motion.div className={Stylehome.treatmentimg}
      variants={{initial: {
        opacity: 0 ,
        y: 100 ,
      },
      animate: {
        opacity: 1,
        y: 0,
        transition: {
          delay: 0.05,
          duration: 2,
        }
      }}}
      initial='initial'
      whileInView= 'animate'
      viewport={{once: true}}>
        <img src={Image1} alt="Hospital" style={{ width: '100%', height: 'auto' }} />
      </motion.div>
      
      {/* Description side */}
      <motion.div className={Stylehome.treatmentdesc}
      variants={{initial: {
        opacity: 0 ,
        x: 100 ,
      },
      animate: {
        opacity: 1,
        x: 0,
        transition: {
          delay: 0.05,
          duration: 2,
        }
      }}}
      initial='initial'
      whileInView= 'animate'
      viewport={{once: true}}
      >
        <h2>Hospital Treatment</h2>
        <p>Our primary care physicians focus on preventive care, routine screenings, and management of common medical conditions. They serve as your first point of contact for general healthcare needs and coordinate specialized care when necessary.
          Our advanced diagnostic imaging and laboratory services enable accurate and timely diagnosis of medical conditions. From X-rays and MRI scans to blood tests and biopsies, we utilize cutting-edge technology to provide comprehensive diagnostic evaluations. From elective surgeries to emergency interventions, we prioritize patient safety and optimal surgical outcomes.
Emergency department is equipped to handle medical emergencies 24/7. The emergency team provide prompt assessment, stabilization, and treatment for patients with acute injuries and illnesses.
We understand the importance of holistic care for patients with serious illnesses so we offer physical therapy, occupational therapy, and speech therapy services to support your recovery journey.
        </p>
      </motion.div>
    </div>
  )
}

export default Treat_div1
