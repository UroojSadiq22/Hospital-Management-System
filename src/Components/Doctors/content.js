import React , {useState, useEffect} from 'react'
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
import { db } from "../../firebase";
import { collection, getDocs, deleteDoc, doc, updateDoc } from "firebase/firestore"

import {delay, motion} from 'framer-motion'



const Content = () => {
  const [doctorData , setdoctorData] = useState([]);
  

  useEffect(() => {
    const fetchdoctorData = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "Appointments"));
        const data = [];
        querySnapshot.forEach((doc) => {
          data.push({ id: doc.id, ...doc.data() });
        });
        setdoctorData(data);
      } catch (error) {
        console.error("Error fetching Appointment data: ", error);
      }
    };

    fetchdoctorData();
  }, []);

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
