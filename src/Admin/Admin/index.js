import React from 'react'
import Styleadmin from './admin.module.css'
import BusinessCenterOutlinedIcon from '@mui/icons-material/BusinessCenterOutlined';
import AccessibleOutlinedIcon from '@mui/icons-material/AccessibleOutlined';
import BloodtypeIcon from '@mui/icons-material/Bloodtype';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';

import Bar from './bar'
import Pie from './pie'
import Income from './income';
import PatientsTable from './Patients/patientstable';
import DoctorTable from './doctortable'
import Appointments from './appointments'
import { PieChart } from '@mui/x-charts/PieChart';


const depdata = [
  { id: 0, value: 10, label: 'Dentistry' , color: 'lightgreen' },
  { id: 1, value: 15, label: 'Cardiology' , color: 'lightpink' },
  { id: 2, value: 20  , color: 'lightblue' },
  { id: 3, value: 30, label: 'General' , color: 'gray'},
  { id: 4, value: 50, label: 'Nutrientist' , color: 'blue' },

];
const index = () => {
    
  return (
    <>
   
    <div className={Styleadmin.maincontainer}>

    <h1 style={{margin: '0 3.5rem' , color: 'royalblue'}}>Welcome to Admin Dashboard</h1>
    <div className={Styleadmin.container}>

      
      <div className={Styleadmin.horizontal}>
        <div className={Styleadmin.icontext}>
        <BusinessCenterOutlinedIcon style={{ fontSize: '40px' , color: 'royalblue', margin: '1rem 0'}}/>
        <div>
        <h3>Appointments</h3>
        <label>50</label>
        </div>
        </div>
      </div>

      <div className={Styleadmin.horizontal}>
      <div className={Styleadmin.icontext}>
        <BloodtypeIcon style={{ fontSize: '40px' , color: 'royalblue', margin: '1rem 0' }}/>
        <div>
        <h3>Operations</h3>
        <label>50</label>
        </div>
        </div>
      </div>

      <div className={Styleadmin.horizontal}>
      <div className={Styleadmin.icontext}>
        <AttachMoneyIcon style={{ fontSize: '40px' , color: 'royalblue', margin: '1rem 0' }}/>
        <div>
        <h3>Earnings</h3>
        <label>50</label>
        </div>
        </div>
      </div>

      <div className={Styleadmin.horizontal}>
      <div className={Styleadmin.icontext}>
        <AccessibleOutlinedIcon style={{ fontSize: '40px' , color: 'royalblue', margin: '1rem 0'}}/>
        <div>
        <h3>New Patients</h3>
        <label>50</label>
        </div>
        </div>
      </div>
    </div>
    
<div className={Styleadmin.chartscontainer}>
  
  <Bar/>
  <div style={{display: 'flex' , flexDirection: 'row'}}>
  <Pie/>
<DoctorTable />

  </div>

<div style={{display: 'flex' , flexDirection: 'row'}} >

<Appointments/>
  <div className={Styleadmin.pie} style={{width: '22rem' , margin: '0 1rem'}} >
    <h3>Departments</h3>
    <PieChart
    series={[
      {
        data : depdata,
        highlightScope: { faded: 'global', highlighted: 'item' },
        faded: { innerRadius: 30, additionalRadius: -30, color: 'gray' },
      },
    ]}
    height={150}
  />
  </div>


</div>

  

  <Income/>
 
 
</div>

    </div>
    
    </>
    
  )
}

export default index
