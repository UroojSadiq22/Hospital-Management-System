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
import {delay, motion} from 'framer-motion'
import ProperClothing from '../../Ui/properclothing.jpg'
import WashHands from '../../Ui/washhands.jpg'
import CoronaResearch from '../../Ui/research.jpg'
import Nitrogen from '../../Ui/nitrogen.jpg'
import Spectrocopy from '../../Ui/spectrocopy.jpg'
import Virus from '../../Ui/sliderImg1.jpg'

const Blogs = () => {

  const blg =[
          {id: 7, image:`${ProperClothing}`, name:"It Is Very Important To Wear Proper Clothing" , desp: " This is required when, for example, the final text is not yet available. Dummy text is also known as 'fill text' It is said that song composers of the past used dummy texts as lyrics when writing melodies in order to have a 'ready-made' text to sing with the melody Dummy texts have been in use by typesetters since the 16th century" },
          {id: 8, image:`${Virus}`,name:"Hollowed-Out Faces More Cuts Amid Virus" , desp: " This is required when, for example, the final text is not yet available. Dummy text is also known as 'fill text'. It is said that song composers of the past used dummy texts as lyrics when writing melodies in order to have a 'ready-made' text to sing with the melody. Dummy texts have been in use by typesetters since the 16th century " },
          {id: 9, image:`${WashHands}`,name:"You Have To Wash Your Hands For 20 Seconds" , desp: " This is required when, for example, the final text is not yet available. Dummy text is also known as 'fill text'. It is said that song composers of the past used dummy texts as lyrics when writing melodies in order to have a 'ready-made' text to sing with the melody. Dummy texts have been in use by typesetters since the 16th centur" },
          {id: 10, image:`${CoronaResearch}`, name:"A Researcher Is Research On Coronavirus In Lab " , desp: " This is required when, for example, the final text is not yet available. Dummy text is also known as 'fill text'. It is said that song composers of the past used dummy texts as lyrics when writing melodies in order to have a 'ready-made' text to sing with the melody. Dummy texts have been in use by typesetters since the 16th century" },
          {id: 11, image:`${Nitrogen}`, name:"Comparing Nitrogen And Mechanical Freezer " , desp: " This is required when, for example, the final text is not yet available. Dummy text is also known as 'fill text'. It is said that song composers of the past used dummy texts as lyrics when writing melodies in order to have a 'ready-made' text to sing with the melody. Dummy texts have been in use by typesetters since the 16th century." },
          {id: 12, image:`${Spectrocopy}`, name:"Comparing Nitrogen And Mechanical Freezers" , desp: " This is required when, for example, the final text is not yet available. Dummy text is also known as 'fill text'. It is said that song composers of the past used dummy texts as lyrics when writing melodies in order to have a 'ready-made' text to sing with the melody. Dummy texts have been in use by typesetters since the 16th century." },
        
        ]

    const variant = {
      visible: { scale: 1 },
      hidden: { scale: 0 },
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
  {blg.map((i)=>(  
    <motion.div className={Stylecontent.cards} 
      variants={variant}
      initial={{y: -100}}
      animate={{y: [400,0]}}
      transition={{duration:'1'}}
      whileInView="visible" 
      whileHover={{ scale: 1.1 }}>

<Card sx={{ maxWidth: 450 , margin: 3 }}>

<div className={Stylecontent.media}>
<CardMedia
    sx={{ height: 200 }}
    image={i.image}
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

export default Blogs

