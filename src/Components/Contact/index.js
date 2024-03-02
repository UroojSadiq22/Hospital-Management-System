import React, {useState} from 'react'
import Stylecontact from './contact.module.css'
// import Image from "../Contact/contact.jpg"
import Button  from '@mui/material/Button'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import ContactImg from '../../Ui/contactImg.jpg'
import {motion} from 'framer-motion'
import Cover from './cover'




const Contact = () => {
  const [contactData, setContactData] = useState({
    name: '',
    email: '',
    subject: '',
    comments: ''
  });

const [signedIn, setSignedIn] = useState(false);

const InputHandler = (e) => {
    setContactData({ ...contactData, [e.target.name]: e.target.value });
};

const submitHandler = (e) => {
    e.preventDefault();
    setSignedIn(true);
  };
    
return (
<>
<Cover/>

<div className={Stylecontact.contactcontainer}>
  <motion.h2
  initial={{ y: -100 }}
  animate={{ y: [50, 0] }}
  transition={{ duration: '1' }}
  whileInView="visible"
  > 
  Get In Touch
  </motion.h2>
  
  <div className={Stylecontact.formimg}>
    <div>
      <form className={Stylecontact.form} onSubmit={submitHandler}>

        <div style={{display: 'flex' , flexDirection: 'row'}}>
        <Box component="form" sx={{ '& > :not(style)': { m: 1, width: '25ch' },}}
        noValidate autoComplete="off">

          <TextField id="filled-basic" label="Your Name" variant="filled" 
            name="name" type="text" id="name" 
            value={contactData.name}
            onChange={InputHandler}/>
        </Box>
              
        <Box component="form" sx={{ '& > :not(style)': { m: 1, width: '25ch' },}}
        noValidate autoComplete="off">

          <TextField id="filled-basic" label="Your Email" variant="filled" 
            name="email" type="email" id="email"
            value={contactData.email}
            onChange={InputHandler}/>
        </Box>
        </div>
        

        <Box component="form" sx={{'& > :not(style)': { m: 1, width: '52ch' }, }}
        noValidate
        autoComplete="off">
          <TextField id="filled-basic" label="Subject" variant="filled" 
          name="subject" type="text" id="subject" 
          value={contactData.subject}
          onChange={InputHandler}/>
        </Box>
                
        
        <Box component="form" sx={{'& > :not(style)': { m: 1, width: '52ch' },
        '& textarea': {
          minHeight: '100px', // Adjust the height as needed
          width: '100%', // Ensure the textarea fills the available width
        },}}
        noValidate
        autoComplete="off">

          <TextField id="filled-basic" label="Comments" variant="filled" 
          name="comments" type="text" id="comments"
          value={contactData.comments}
          onChange={InputHandler}
          multiline/>
        </Box>


        <motion.div
        initial={{ x: 0 }}
        animate={{ x: [0, 100] }}
        transition={{ duration: '1' }}
        whileInView="visible"
        className={Stylecontact.button}
        >
          
          <Button variant="contained" type="submit">Submit</Button>
        </motion.div>
      </form>
    </div>
            
    <div className={Stylecontact.img}>
      <img src={ContactImg} alt="signinimg" style={{ height: '17rem', width: '20rem' }}></img>
    </div>
  </div>
<h4>Find Us On</h4>
<iframe
  title="map"
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d463175.15591636114!2d66.83539192527361!3d24.91312543728018!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb339fc7861e19b%3A0xc3039a8a08d19bfd!2sKarachi%20urban%20nafsiati%20hospital%2FKarachi%20nafsiati%20hospital!5e0!3m2!1sen!2s!4v1708444852707!5m2!1sen!2s"
  width="70%"
  height="400"
  style={{border:1 , margin: '2rem'}}
  allowFullScreen=""
  loading="fast"
  referrerpolicy="no-referrer-when-downgrade">
</iframe>

</div>
        

        
    
    </> 
  )
  
}

export default Contact