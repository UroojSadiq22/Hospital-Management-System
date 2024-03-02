import React, { useState, useEffect } from "react";
import logo from "../Ui/logo.png";
import StyleNav from "./navbar.module.css";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import { auth } from "../firebase";

const Navbar = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user);
    });

    // Clean up subscription on unmount
    return () => unsubscribe();
  }, []);

  return (
    <>
      <nav className={StyleNav.navbar}>
        <div className={StyleNav.logocontainer}>
          <img src={logo} alt="logo" className={StyleNav.logo}></img>
        </div>
        <div className={StyleNav.NavbarMenu}>
          <ul>
            <li className={StyleNav.NavbarMenuList}>
              <Link to="/">Home</Link>
            </li>
            <li className={StyleNav.NavbarMenuList}>
              <Link to="/about">About Us</Link>
            </li>
            <li className={StyleNav.NavbarMenuList}>
              <Link to="/departments">Departments</Link>
            </li>
            <li className={StyleNav.NavbarMenuList}>
              <Link to="/doctors">Doctors</Link>
            </li>
            <li className={StyleNav.NavbarMenuList}>
              <Link to="/blogs">Blogs</Link>
            </li>
            <li className={StyleNav.NavbarMenuList}>
              <Link to="/contact">Contact Us</Link>
            </li>
          </ul>
        </div>

        <div className={StyleNav.button}>
          {/* {user ? (
            <span>{user.displayName}</span>
          ) : (
            <Link to="/signin">
              <Button variant="contained" href="#contained-buttons">
                Sign in
              </Button>
            </Link>
          )} */}
          <Link to="/signin">
              <Button variant="contained" href="#contained-buttons">
                Sign in
              </Button>
            </Link>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
// import React from 'react';
// import logo from '../Ui/logo.png';
// import StyleNav from './navbar.module.css';
// import { Link } from 'react-router-dom';
// import { Button } from '@mui/material';
// import { auth } from '../firebase'; // Import auth

// const Navbar = () => {
//   const handleSignOut = async () => {
//     try {
//       await auth.signOut(); // Sign out the user
//     } catch (error) {
//       console.error('Error signing out:', error);
//     }
//   };

//   return (
//     <nav className={StyleNav.navbar}>
//       <div className={StyleNav.logocontainer}>
//         <img src={logo} alt="logo" className={StyleNav.logo}></img>
//       </div>
//       <div className={StyleNav.NavbarMenu}>
//         <ul>
//           <li className={StyleNav.NavbarMenuList}>
//             <Link to="/">Home</Link>
//           </li>
//           <li className={StyleNav.NavbarMenuList}>
// //               <Link to="/about">About Us</Link>
// //             </li>
// //             <li className={StyleNav.NavbarMenuList}>
// //               <Link to="/departments">Departments</Link>
// //             </li>
// //             <li className={StyleNav.NavbarMenuList}>
// //               <Link to="/doctors">Doctors</Link>
// //             </li>
// //             <li className={StyleNav.NavbarMenuList}>
// //               <Link to="/blogs">Blogs</Link>
// //             </li>
// //             <li className={StyleNav.NavbarMenuList}>
// //               <Link to="/contact">Contact Us</Link>
// //             </li>
//         </ul>
//       </div>
//       <div className={StyleNav.button}>
//         {auth.currentUser ? (
//           <Button variant="contained" onClick={handleSignOut}>
//             Sign Out
//           </Button>
//         ) : (
//           <Link to="/signin">
//             <Button variant="contained" href="#contained-buttons">
//               Sign in
//             </Button>
//           </Link>
//         )}
//       </div>
//     </nav>
//   );
// };

// export default Navbar;
