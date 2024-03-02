import React from 'react'
import { useParams } from 'react-router-dom'
import doctors from './doctors'
import Card from '@mui/material/Card';

import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

import Typography from '@mui/material/Typography';

import { motion } from 'framer-motion'
import StyleDocDetail from './docdetail.module.css'

import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

import Box from '@mui/material/Box';

import Overview from './DocDetailTabs/overview'
import Experience from './DocDetailTabs/experience';
import Reviews from './DocDetailTabs/reviews'
import Location from './DocDetailTabs/location'
import Schedule from './DocDetailTabs/schedule';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

const Docdetail = () => {

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

    const { id } = useParams();
  const doctor = doctors.find(doc => doc.id === parseInt(id));

  if (!doctor) return <div>Doctor not found</div>;
  return (
    
    // <div>
    //   <h2>{doctor.name}</h2>
    //   <img src={doctor.imageUrl} alt={doctor.name} />
    //   {/* Add more details about the doctor as needed */}
    // </div>

<div className={StyleDocDetail.detailcontainer}>
  <motion.div className={StyleDocDetail.card}

  initial={{y: -100}}
  animate={{y: [100,0]}}
  transition={{duration:'1'}}
  whileInView="visible" 
  whileHover={{ scale: 1.1 }}>

  <Card sx={{ maxWidth: 295 , margin: 6 }}>

<div className={StyleDocDetail.media}>
<CardMedia
    sx={{ height: 250 }}
    image={doctor.imageUrl}
    title="Doctors"
    style={{objectFit: 'cover' , marginBottom: '0'}}/>

</div>


  



<motion.div whileHover={{background: 'lightBlue' , color: 'black'}} >

  <CardContent sx={{ padding: '16px' }}>
    <Typography gutterBottom variant="h5" component="div">
      {doctor.name}
    </Typography>
    <Typography variant="body2" color="text.secondary">
      {doctor.degree}
    </Typography>
  </CardContent>
  
  
  </motion.div>
</Card>

  </motion.div>


<div className={StyleDocDetail.table}
>
<Box
      sx={{ flexGrow: 1, bgcolor: 'background.paper', display: 'flex', height: 320}}
    >

      <div>
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        sx={{ borderRight: 1, borderColor: 'divider' }}
        
      >
        <Tab label="Overview" {...a11yProps(0)} sx={{ marginBottom: '30px' }} />
        <Tab label="Experience" {...a11yProps(1)} sx={{ marginBottom: '30px' }}/>
        <Tab label="Reviews" {...a11yProps(2)} sx={{ marginBottom: '30px' }} />
        <Tab label="Location" {...a11yProps(3)} sx={{ marginBottom: '30px' }}/>
        <Tab label="Schedule" {...a11yProps(4)} sx={{ marginBottom: '30px' }}/>
      </Tabs>

      </div>

      <div>
      <TabPanel value={value} index={0}>
        <Overview/>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Experience/>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Reviews/>
      </TabPanel>
      <TabPanel value={value} index={3}>
        <Location/>
      </TabPanel>
      <TabPanel value={value} index={4}>
        <Schedule/>
      </TabPanel>

      </div>
      
      
      
    </Box>
  
</div>


</div>

    
  );
    
}

export default Docdetail
