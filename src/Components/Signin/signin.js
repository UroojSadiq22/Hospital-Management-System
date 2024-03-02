import React, { useState } from 'react';
import { Button } from '@mui/material';
import { motion } from 'framer-motion';

import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';

import DialogTitle from '@mui/material/DialogTitle';
import StyleSignin from './signin.module.css';
import SigninImg from '../../Ui/signin.jpg';
import PatientDash from '../Patients/patientdash';
import { TextField } from '@mui/material';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { auth } from '../../firebase';
import { isSignInWithEmailLink } from 'firebase/auth';

const Signin = () => {
  const [patientData, setPatientData] = useState({
    name: '',
    patientid: '',
    email: '',
    password: ''
  });
  const [adminData , setAdminData] = useState({
    name: '',
    email: '',
    password: ''
  })

  const navigate = useNavigate();
  

  const InputHandler = (e) => {
    setPatientData({ ...patientData, [e.target.name]: e.target.value });
  };
  const AdminInputHandler = (e) => {
    setAdminData({ ...adminData, [e.target.name]: e.target.value });
  };

  const submitHandler = async (e) => {
    e.preventDefault();
   

    const email = patientData.email;
    const password = patientData.password;
    const stName = "Admin";
    const stemail = "admin@gmail.com";
    const stpass = "admin123";

    
    if (adminData.email === stemail && adminData.password === stpass && adminData.name === stName) {
      navigate("/admin/*/dashboard");
      return;
    }

    try {
      // Sign in the user with email and password
      await isSignInWithEmailLink(auth, email, password);

      // If sign-in is successful, set signedIn state to true
      //setSignedIn(true);

      // Navigate to the desired page after successful sign-in
       navigate("/patientdash");
    } catch (error) {
      console.error('Error signing in:', error);
      // Handle sign-in errors here
    }
  };

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  

  return (

    <>
    <div className={StyleSignin.signincontainer}>
          <div className={StyleSignin.formimg}>
            <div>
              <motion.h1
                initial={{ x: -100 }}
                animate={{ x: [70, 0] }}
                transition={{ duration: '1' }}
                whileInView="visible"
              >
                Patient Sign In
              </motion.h1>
              <form className={StyleSignin.form} onSubmit={submitHandler}>
                <TextField
                  autoFocus
                  required
                  margin="dense"
                  id="name"
                  name="name"
                  label="Patient Name"
                  type="text"
                  fullWidth
                  variant="standard"
                  value={patientData.name}
                  onChange={InputHandler}
                />
                <TextField
                  autoFocus
                  required
                  margin="dense"
                  id="name"
                  name="patientid"
                  label="Patient Id"
                  type="text"
                  fullWidth
                  variant="standard"
                  value={patientData.patientid}
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
                  variant="standard"
                  value={patientData.email}
                  onChange={InputHandler}
                />
                <TextField
                  autoFocus
                  required
                  margin="dense"
                  id="name"
                  name="password"
                  label="Password"
                  type="password"
                  fullWidth
                  variant="standard"
                  value={patientData.password}
                  onChange={InputHandler}
                />
                <div style={{ display: 'flex', justifyContent: 'space-between', gap: '5rem' }}>
                  <div className={StyleSignin.button}>
                    <Link to='/'>
                      <Button variant="outlined" type="submit">
                        Back to Home
                      </Button>
                    </Link>
                  </div>
                  <div className={StyleSignin.button}>
                    <Button variant="contained" type="submit">
                      Sign in
                    </Button>
                  </div>
                </div>
              
                  <div className={StyleSignin.button}>
                    <Button variant="contained" type="submit" fullWidth onClick={handleClickOpen}>
                      Sign in As Admin
                    </Button>
                  </div>
                


                <Dialog
        open={open}
        onClose={handleClose}
        onSubmit={submitHandler}
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
        <DialogTitle>Admin Dashboard Sign In</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            required
            margin="dense"
            id="name"
            name="name"
            label="User Name"
            type="text"
            fullWidth
            variant="standard"
            value={adminData.name}
                  onChange={AdminInputHandler}
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
            value={adminData.email}
                  onChange={AdminInputHandler}
          />
          <TextField
            autoFocus
            required
            margin="dense"
            id="name"
            name="password"
            label="Password"
            type="password"
            variant="standard"
            value={adminData.password}
                  onChange={AdminInputHandler}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button type="submit">Sign In</Button>
        </DialogActions>
      </Dialog>

              </form>
            </div>
            <div className={StyleSignin.img}>
              <img
                src={SigninImg}
                alt="signinimg"
                style={{ height: '28rem', width: '27rem' }}
              ></img>
            </div>
          </div>
        </div>
    </>
  );
};

export default Signin;
