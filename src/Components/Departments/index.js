import React from 'react'
import Cover from './cover'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Stylecontent from './content.module.css'
import {delay, motion} from 'framer-motion'
import EmerImg from '../../Ui/emergency-departmentImg.jpg'
import AnasImg from '../../Ui/anesImg.jpeg'
import CardioImg from '../../Ui/cardioImg.jpg'
import BioImg from '../../Ui/clinical-biochemistry-department.jpg'
import DermaImg from '../../Ui/dermaImg.jpg'
import HeamaImg from '../../Ui/heamaImg.jpg'

const Departments = () => {
  
  const dep =[
        {id: 1, image:`${EmerImg}`, name:"Accident and Emergency" , desp: " Lizards are a widespread group of squamate reptiles, with over  species across all continents except Antarctica" },
        {id: 2, image:`${AnasImg}`, name:"Anaesthesiology" , desp: " Lizards are a widespread group of squamate reptiles, with over  species across all continents except Antarctica" },
        {id: 3, image:`${CardioImg}`, name:"Cardic Surgery" , desp: " Lizards are a widespread group of squamate reptiles, with over  species across all continents except Antarctica" },
        {id: 4, image:`${BioImg}`, name:"Clinical Biochemistry" , desp: " Lizards are a widespread group of squamate reptiles, with over  species across all continents except Antarctica" },
        {id: 5, image:`${DermaImg}`, name:"Dermatology" , desp: " Lizards are a widespread group of squamate reptiles, with over  species across all continents except Antarctica" },
        {id: 6, image:`${HeamaImg}`, name:"Haematology and bloodbank" , desp: " Lizards are a widespread group of squamate reptiles, with over  species across all continents except Antarctica" },
      
      ]

    const variant = {
      visible: { scale: 1 },
      hidden: { scale: 0 },
    };

  

  return (
    <>
    <Cover/>
    <div >


    <motion.div className={Stylecontent.toptext}
    
    initial={{y: -100}}
    animate={{y: [200,0]}}
    transition={{duration:'1', delay:'1'}}
    whileInView="visible" >
      <h1>Departments</h1>
      <p>Great doctor if you need your family member to get immediate assistance, emergency treatment or a simple consultation.</p>
  </motion.div>

<div className={Stylecontent.container} >
  {dep.map((i)=>(  
    <motion.div className={Stylecontent.cards} 
      variants={variant}
      initial={{y: -100}}
      animate={{y: [400,0]}}
      transition={{duration:'1'}}
      whileInView="visible" 
      whileHover={{ scale: 1.1 }}>

<Card sx={{ maxWidth: 350 , margin: 2 }}>

<div className={Stylecontent.media}>
<CardMedia
    sx={{ height: 200 }}
    image={i.image}
    title="Doctors"
    style={{objectFit: 'cover' , marginBottom: '0'}}/>


</div>


  



<motion.div whileHover={{background: 'lightBlue' , color: 'black'}} >

<CardContent>
         <Typography gutterBottom variant="h5" component="div">
         {i.name}
         </Typography>
         <Typography variant="body2" color="text.secondary">
           {i.desp}
         </Typography>
       </CardContent>
       <CardActions>
  
         <div className={Stylecontent.btns}>
    <Button variant="outlined" href="#outlined-buttons">
  View More
</Button>
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

export default Departments
