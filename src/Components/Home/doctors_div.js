import React from "react";
import Stylehome from "./home.module.css";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Link, Routes } from "react-router-dom";
import doctors from "../Doctors/doctors";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { Fab } from "@mui/material";
import { motion } from "framer-motion";

const Content = () => {
  const variant = {
    visible: { scale: 1 },
    hidden: { scale: 0 },
  };

  const fadeInAnimationVariants = {
    initial: {
      opacity: 0,
      y: 100,
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.05,
        duration: 2,
      },
    },
  };
  return (
    <>
      <div id="doctors">
        <div className={Stylehome.toptext}>
          <h1>Our Team</h1>
          <label>
            Meet the dedicated professionals who make our hospital great!
          </label>
        </div>

        <div className={Stylehome.doctorcontainer}>
          {doctors.slice(0, 3).map((i) => (
            <motion.div
              className={Stylehome.cards}
              variants={fadeInAnimationVariants}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              <Card sx={{ maxWidth: 300, margin: 5 }}>
                <div className={Stylehome.media}>
                  <CardMedia
                    sx={{ height: 200 }}
                    image={i.imageUrl}
                    title="Doctors"
                    style={{ objectFit: "cover", marginBottom: "0" }}
                  />
                </div>

                <motion.div
                  whileHover={{ background: "lightBlue", color: "black" }}
                >
                  <CardContent sx={{ padding: "16px" }}>
                    <Typography gutterBottom variant="h5" component="div">
                      {i.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {i.degree}
                    </Typography>
                  </CardContent>

                  <CardActions>
                    <div>
                      <Link
                        to={`/doctor/${i.id}`}
                        style={{ textDecoration: "none" }}
                      >
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
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Link to="./doctors">
            <Fab variant="extended" size="medium" color="primary">
              View All
              <ArrowForwardIcon sx={{ mr: 1, ml: 2 }} />
            </Fab>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Content;
