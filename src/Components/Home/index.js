import React, { useState, useEffect } from "react";
import Stylehome from "./home.module.css";
import { motion } from "framer-motion";
import { Fab, Button } from "@mui/material";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import TopDiv1 from "./top_div1";
import TreatDiv2 from "./treat_div2";
import MissionDiv3 from "./mission_div3";
import DoctorDiv from "./doctors_div";
import { Link } from "react-router-dom";

const Home = ({ onAppointmentBook }) => {
  const handleAppointmentBook = (newPatient) => {
    // Pass newly booked patient to parent component
    onAppointmentBook(newPatient);
  };
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Function to check scroll position
    const handleScroll = () => {
      if (window.pageYOffset > 300) {
        // Change 300 to whatever scroll position you prefer
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    // Add event listener when component mounts
    window.addEventListener("scroll", handleScroll);

    // Remove event listener when component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []); // Empty array as dependency to run only once on mount

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Smooth scrolling
    });
  };

  return (
    <>
      <div className={Stylehome.container}>
        <motion.div
          initial={{ x: 0 }}
          animate={{ x: [400, 0] }}
          transition={{ repeat: 0, duration: 3, delay: 0.2 }}
          className={Stylehome.text}
        >
          <h1>All Specialities Under One Roof!</h1>
          <h3>Quality Health Care Here And Now..</h3>
        </motion.div>
        <div class={Stylehome.shape}>
          <svg viewBox="0 0 2880 90">
            <path
              d="M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z"
              fill="currentColor"
            ></path>
          </svg>
        </div>
      </div>

      <TopDiv1 />

      <TreatDiv2 />

      <DoctorDiv />

      <MissionDiv3 />

      <div className={Stylehome.getintouch}>
        <h1>Have Questions? Get In Touch!</h1>
        <h3>To Find Best Doctors</h3>
        <p>
          Great doctor if you need your family member to get immediate
          assistance, emergency treatment or a simple consultation.
        </p>

        <Link to="./contact">
          <Button variant="contained" endIcon={<LocalPhoneIcon />}>
            Contact Us
          </Button>
        </Link>
      </div>

      <div>
        {isVisible && (
          <Fab
            size="small"
            color="primary"
            aria-label="add"
            onClick={scrollToTop}
            style={{ position: "fixed", bottom: 20, right: 20 }}
          >
            <ArrowUpwardIcon />
          </Fab>
        )}
      </div>
    </>
  );
};

export default Home;
