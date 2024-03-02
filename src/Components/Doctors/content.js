import React from 'react'
import Cover from './cover'
import Stylecontent from './content.module.css'

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link, Routes } from 'react-router-dom'
import doctors from './doctors'


import {delay, motion} from 'framer-motion'



const Content = () => {

    // const doc = [
    //     { id:1 , name: 'Dr. Stephen Jord' , degree: 'Eye Specilist', imageUrl: `${doctor1}`},
    //     { id:2 , name: 'Dr. Flix Tom' , degree: 'Dental Surgoen', imageUrl: `${doctor2}`},
    //     { id:3 , name: 'Dr. Micheal Jan' , degree: 'Orthopadiac', imageUrl: `${doctor3}`},
    //     { id:4 , name: 'Dr. Herry Kane' , degree: 'ENT Specialist', imageUrl: `${doctor4}`},
    //     { id:5 , name: 'Dr. Flavia Mark' , degree: 'General Surgoen', imageUrl: `${doctor5}`},
    //     { id:6 , name: 'Dr. Tresa Shane' , degree: 'Child Specialist', imageUrl: `${doctor6}`}

    // ]

    const variant = {
      visible: { scale: 1 },
      hidden: { scale: 0 },
    };

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
    <Cover/>
    <div id='doctors' >


    <motion.div className={Stylecontent.toptext}
    
    initial={{y: -100}}
    animate={{y: [200,0]}}
    transition={{duration:'1', delay:'1'}}
    whileInView="visible" >
      <h1>Meet Our Doctors Team</h1>
      <h3>To Find Best Doctors</h3>
      <p>Great doctor if you need your family member to get immediate assistance, emergency treatment or a simple consultation.</p>
  </motion.div>

<div className={Stylecontent.container} >
  {doctors.map((i)=>(  
    <motion.div className={Stylecontent.cards} 
    variants={fadeInAnimationVariants}
    initial= 'initial'
    whileInView='animate'
    viewport={{once: true}}>

<Card sx={{ maxWidth: 300 , margin: 5 }}>

<div className={Stylecontent.media}>
<CardMedia
    sx={{ height: 200 }}
    image={i.imageUrl}
    title="Doctors"
    style={{objectFit: 'cover' , marginBottom: '0'}}/>

{/* <img src={Drimg} alt='drimg'></img> */}
{/* <ul>
  <li> <i class="fa fa-facebook" aria-hidden="true"></i> </li>
  <li> <i class="fa-brands fa-linkedin"></i> </li>
  <li> <i class="fa-brands fa-instagram"></i> </li> 
</ul> */}


</div>


  



<motion.div whileHover={{background: 'lightBlue' , color: 'black'}} >

  <CardContent sx={{ padding: '16px' }}>
    <Typography gutterBottom variant="h5" component="div">
      {i.name}
    </Typography>
    <Typography variant="body2" color="text.secondary">
      {i.degree}
    </Typography>
  </CardContent>
  
  <CardActions>
    <div className={Stylecontent.btns}>
    <Button variant="outlined" href="#outlined-buttons">
  Share
</Button>
</div>
    <div>
    <Link to={`/doctor/${i.id}`} style={{ textDecoration: 'none' }}>
    <Button variant="outlined" href="#outlined-buttons">
  View more
</Button>

    </Link>
      </div>
  </CardActions>
  </motion.div>
</Card>

  </motion.div>
))}
  
</div>
    </div>
  

</>
    
  );  
}

export default Content
