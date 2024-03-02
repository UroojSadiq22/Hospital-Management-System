import React, { useState } from 'react'
import { motion } from 'framer-motion';
import Stylehome from './home.module.css'
import Fab from '@mui/material/Fab';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Link } from '@mui/material';
import { db } from '../../firebase';
import { Button } from '@mui/material';


import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';

import DialogTitle from '@mui/material/DialogTitle';
import doctorsData from '../Doctors/doctors';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import FormControl from '@mui/material/FormControl';

const Top_div1 = () => {
  const [patientData , setPatientData] = useState({
    name: '',
    email: '',
    phone: '',
    doctor: '',
    date: '',
    time: ''
  });

  const InputHandler = (e) => {
    setPatientData({ ...patientData, [e.target.name]: e.target.value });
  };
  
const handleSubmit = async (e) => {
  e.preventDefault();
  try {
    // Save appointment data to Firebase Realtime Database
    await db.ref('appointments').push(patientData);
    handleClose();
    // Optionally, you can display a success message or redirect the user to another page
  } catch (error) {
    console.error('Error saving appointment:', error);
    // Handle error
  }
};
  const [open, setOpen] = useState(false);
  const [doctors, setDoctors] = useState(doctorsData);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const [selectDoctor, setSelectDoctor] = React.useState('');

  const handleChange = (event) => {
    setSelectDoctor(event.target.value);
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
    <motion.div className={Stylehome.horizontal}
  variants={fadeInAnimationVariants}
  initial= 'initial'
  whileInView='animate'
  viewport={{once: true}}
  >

      <div className={Stylehome.section}>
        <h2>Departments</h2>
        <p>Explore our range of departments specializing in various medical fields.</p>
        
        <div>
        <label style={{margin: '10px'}}>View more</label>
        <Link href='./departments'>
        <Fab size="small" color="primary" aria-label="add" >
        <ArrowForwardIcon />
        </Fab>
        </Link>
      </div>
        
      
      </div>

      <div className={Stylehome.section}>
        <h2>Book Your Appointment</h2>
        <p>Check out our timetable to plan your appointments and visits.</p>
      <div>
        <label style={{margin: '10px'}}>Take Appointment</label>
        <Fab size="small" color="primary" aria-label="add" onClick={handleClickOpen}>
        <ArrowForwardIcon />
        </Fab>
        <Dialog
        open={open}
        onClose={handleClose}
        onSubmit={handleSubmit}
        PaperProps={{
          component: 'form',
          onSubmit: (event) => {
            event.preventDefault();
            const formData = new FormData(event.currentTarget);
            const formJson = Object.fromEntries(formData.entries());
            const email = formJson.email;
            console.log(email);
            handleClose();
          },
        }}
      >
        <DialogTitle>New Patient Registration</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            required
            margin="dense"
            id="name"
            name="name"
            label="Patient Name"
            type="text"
            variant="standard"
            value={patientData.name}
            onChange={InputHandler}
          />

<TextField
            autoFocus
            required
            margin="dense"
            id="name"
            name="email"
            label="Email Address"
            type="email"
            fullWidth
            variant="standard"
            value={patientData.email}
            onChange={InputHandler}
          />

<TextField
            autoFocus
            required
            margin="dense"
            id="name"
            name="phone"
            label="Phone number"
            type="text"
            variant="standard"
            value={patientData.phone}
            onChange={InputHandler}
          />
<FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
<InputLabel id="demo-simple-select-standard-label">Select Doctor</InputLabel>
        <Select
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          value={selectDoctor}
          onChange={handleChange}
          label="Select Your Doctor"
          name='doctor'
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          {doctorsData.map((i)=> (
            <MenuItem value={10}>{i.name}</MenuItem>
          ))}
          
          {/* <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem> */}
        </Select>

</FormControl>


<TextField
            autoFocus
            required
            margin="dense"
            id="name"
            name="date"
            label="Date"
            type="date"
            fullWidth
            variant="standard"
            value={patientData.date}
            onChange={InputHandler}
          />

<TextField
            autoFocus
            required
            margin="dense"
            id="name"
            name="time"
            label="Time"
            type="time"
            fullWidth
            variant="standard"
            value={patientData.time}
            onChange={InputHandler}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button type="submit">Register</Button>
        </DialogActions>
      </Dialog>
      </div>
      </div>
      
      <div className={Stylehome.section}>
        <h2>Opening Hours</h2>
        
        <p>View our hospital's opening hours to know when we're available for your healthcare needs.</p>
        <div>
        <label style={{margin: '10px'}}>View more</label>
        <Fab size="small" color="primary" aria-label="add">
        <ArrowForwardIcon />
        </Fab>
        </div>

        
      </div>
    </motion.div>
  )
}

export default Top_div1
