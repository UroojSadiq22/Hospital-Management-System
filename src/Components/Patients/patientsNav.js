import React, { useState } from 'react'
import logo from '../../Ui/logo.png'
import StyleNav from '../../Navbar/navbar.module.css'
import { Link } from 'react-router-dom'
import { Button } from '@mui/material'
import { auth } from '../../firebase';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();
  const handleSignOut = async () => {
    try {
      await auth.signOut(); // Sign out the user
      navigate("/signin");
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };
  

  return (
    <nav className={StyleNav.navbar}>
       <div className={StyleNav.logocontainer}>
       <img src={logo} alt='logo' className={StyleNav.logo}></img>
       </div>
       
       <div className={StyleNav.button}>
        {/* <Link to='/signin'>
            <Button variant="outlined" href="#outlined-buttons">
                Sign Out
            </Button>
        </Link> */}
        <Button variant="contained" onClick={handleSignOut}>
            Sign Out
          </Button>
       </div>
    </nav>
  )
}

export default Navbar
