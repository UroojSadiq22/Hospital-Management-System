import React from 'react'
import { PieChart } from '@mui/x-charts/PieChart';
import { LineChart } from '@mui/x-charts/LineChart';
import StyleDash from './patientdash.module.css'
import PatientImg from '../../Ui/patientImg.jpg'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import WaterDropIcon from '@mui/icons-material/WaterDrop';
import FavoriteIcon from '@mui/icons-material/Favorite';
import VaccinesIcon from '@mui/icons-material/Vaccines';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import { SparkLineChart } from '@mui/x-charts/SparkLineChart';
import { BarChart } from '@mui/x-charts/BarChart';
import { axisClasses } from '@mui/x-charts';
import Patients from './patientsNav'

function createData(name, value) {
  return { name, value};
}

const rows = [
  createData('Height', 5.6),
  createData('Weight', '45kg'),
  createData('Blood Group', 'B+'),
];

const data = [
  { id: 0, value: 10, label: 'low' ,color: 'purple' },
  
  { id: 2, value: 40, label: 'hydrated'  },
];

const chartSetting = {
 
  width: 800,
      height:320,
  sx: {
    [`.${axisClasses.left} .${axisClasses.label}`]: {
      transform: 'translate(-20px, 0)',
    },
    
  },
};
const valueFormatter = (value) => `${value}`;
const Patientdash = () => {
  return (<>
  <Patients/>
  <h1 style={{color: 'blue', margin: '1rem 1.7rem'}}>Welcome Christopher Burrell!</h1>
    <div className={StyleDash.dashboardcontainer}>
      <div style={{display: 'flex' , flexDirection: 'column'}}>
      <div className={StyleDash.intro}>
          <div className={StyleDash.imgtitle}>
            <img src={PatientImg} alt='patient'></img>
            <div style={{margin: '2rem 1rem'}}>
            <h2>Christopher Burrell</h2>
            <label>Age: 25</label>
            </div>
            
          </div>
          <div className={StyleDash.healthy}>
            <h3>Healthy</h3></div>
            <div>
            <TableContainer component={Paper}>
      <Table sx={{ minWidth: 250}} aria-label="simple table">
        
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.value}</TableCell>
              
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  </div>
</div>

<div className={StyleDash.heamolinechart}>
  <div style={{ display: 'flex' , justifyContent: 'space-between' }}>
  <h3>Haemoglobin</h3>
  <div style={{ background: 'lightred' , padding: '5px 10px', borderRadius: '10px' , height: '27px' , width: '70px'}}><p>79bpm</p></div>
    <VaccinesIcon/>
  </div>
  <Stack direction="row" sx={{ width: '100%', height: '100%' }}>
      <Box sx={{ flexGrow: 1 }}>
        <SparkLineChart
          data={[12, 72, 19, 55, 37, 72, 42, 53]} 
          height={100}
          showTooltip
          showHighlight
        />
      </Box>
    </Stack>
  </div>

      </div>
        
      

<div className={StyleDash.healthdata}>
  <h2>Health Statistics</h2>
  <div className={StyleDash.data}>
    <div style={{display: 'flex' , flexDirection: 'row' , gap: '2rem'}}>

    <div className={StyleDash.pie}>
    <div style={{ display: 'flex' , justifyContent: 'space-between' }}>
      
    <h3>Water Level</h3>
    <div style={{ background: 'lightblue' , padding: '5px 10px', borderRadius: '10px' , height: '27px' , width: '50px'}}><p>90%</p></div>
    <WaterDropIcon/>
    </div>
    
    <PieChart series={[
      {
        data,
        highlightScope: { faded: 'global', highlighted: 'item' },
        faded: { innerRadius: 30, additionalRadius: -30, color: 'gray' },
      },
      ]}
      height={150}
    />
  </div>

  <div className={StyleDash.linechart}>
  <div style={{ display: 'flex' , justifyContent: 'space-between' }}>
  <h3>Heart Beat</h3>
  <div style={{ background: 'lightred' , padding: '5px 10px', borderRadius: '10px' , height: '27px' , width: '70px'}}><p>79bpm</p></div>
    <FavoriteIcon />
  </div>
        
    <LineChart
    xAxis={[{ data: [1, 2, 3, 5, 8, 10] }]}
    series={[
    {
      data: [2, 5.5, 2, 8.5, 1.5, 5],
    },
  ]}
  width={390}
  height={200}
/>
  </div>

    </div>
  

 

  {/* <div className={StyleDash.linechart}>
  <div style={{ display: 'flex' , justifyContent: 'space-between' }}>
  <h3>Nutrients Level</h3>
  <div style={{ background: 'lightred' , padding: '5px 10px', borderRadius: '10px' , height: '27px' , width: '70px'}}><p>79bpm</p></div>
    <VaccinesIcon/>
  </div>
  <BarChart
      xAxis={[{ scaleType: 'band', data: ['Jan', 'Feb', 'march' , 'Apr' , 'May'] }]}
      series={[{ data: [4, 3, 5 , 2 , 9] }, { data: [1, 6, 3 , 2 , 7] }, { data: [7, 5, 6 , 1 , 4] }]}
      width={400}
      height={200}
    />
  </div> */}
  <div className={StyleDash.bargraph}>
  <div style={{ display: 'flex' , justifyContent: 'space-between' }}>
  <h3>Nutrients Level</h3>
  <div style={{ background: 'lightred' , padding: '5px 10px', borderRadius: '10px' , height: '27px' , width: '70px'}}><p>79bpm</p></div>
    <VaccinesIcon/>
  </div>
  <BarChart 
      dataset={[
        {
          protiens: 59,
          vitamins: 57,
          carbohydrated: 86,
          fats: 21,
          month: 'Jan',
        },
        {
          protiens: 50,
          vitamins: 52,
          carbohydrated: 78,
          fats: 28,
          month: 'Fev',
        },
        {
          protiens: 47,
          vitamins: 53,
          carbohydrated: 106,
          fats: 41,
          month: 'Mar',
        },
        {
          protiens: 54,
          vitamins: 56,
          carbohydrated: 92,
          fats: 73,
          month: 'Apr',
        },
        {
          protiens: 57,
          vitamins: 69,
          carbohydrated: 92,
          fats: 99,
          month: 'May',
        }]}
      xAxis={[{ scaleType: 'band', dataKey: 'month' }]}
      series={[
        { dataKey: 'protiens', label: 'protiens', valueFormatter , color: 'grey' },
        { dataKey: 'vitamins', label: 'vitamins', valueFormatter , color: 'lightgreen'},
        { dataKey: 'carbohydrated', label: 'carbohydrated', valueFormatter , color: 'lightblue'},
        { dataKey: 'fats', label: 'fats', valueFormatter , color: 'lightpink' },
      ]}
      {...chartSetting}
    />
  </div>

  

  </div>
  

        

        
        
</div>
</div>
</>
    
  )
}

export default Patientdash
