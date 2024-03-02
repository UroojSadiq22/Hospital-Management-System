import React from 'react';
import Styleabout from './about.module.css'
import { motion } from 'framer-motion';
import ValuesImg from '../../Ui/values.jpg'
import AboutImg from '../../Ui/aboutimage.jpg'

const About = () => {
  const fadeInAnimationVariants = {
    initial: {
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
    }
  };
  return (
    <>
    <div className={Styleabout.container} >

<div initial={{x: 0}}
animate={{x: [400,0]}}
transition={{ repeat: 0 ,duration: 3, delay:0.2}}
className={Styleabout.text}
>
<h1>About Us</h1>
<h3>Welcome to Our Hospital: Discover Our Commitment to Care</h3>
</div>



</div>
<div class={Styleabout.shape}>
  <svg viewBox="0 0 2880 90" >
    <path d="M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z" fill="currentColor"></path>
    </svg>
  </div>
  <motion.div className={Styleabout.aboutcontainer}
  variants={fadeInAnimationVariants}
  initial= 'initial'
  whileInView='animate'
  viewport={{once: true}}>
    <div className={Styleabout.about}>
    <h1>About Our Hospital</h1>
      <h3>Welcome to our hospital's website!</h3>
      <p>
        Our mission is to provide exceptional healthcare services to our community, 
        focusing on compassion, innovation, and excellence in patient care.
      </p>

    </div>
    </motion.div>
    <div className={Styleabout.aboutimg}>
      <h2>Healthcare is not just about treating illnesses; it's about restoring hope, dignity, and quality of life. With a legacy of excellence years, we have been serving our community with unwavering dedication and commitment.</h2>
    </div>
    <div style={{display: 'flex' , flexDirection: 'row' ,justifyContent: 'center'}}>
    <div className={Styleabout.values}>
      <div>
        
      <h2>Our Values</h2>
<ul>
  <li><span style={{fontWeight: '900'}}>Compassion:</span> We care deeply about our patients and their well-being.</li>
  <li><span style={{fontWeight: '900'}}>Innovation:</span> We strive to stay at the forefront of medical advancements.</li>
  <li><span style={{fontWeight: '900'}}>Excellence</span>: We are committed to delivering high-quality care and services.</li>
</ul>
      </div>

<div className={Styleabout.valuesimage}>
      <img src={ValuesImg} alt='image'></img>

      </div>

      </div>
      
      
    </div>
      
      
    
    </>
    
  );
};

export default About;
