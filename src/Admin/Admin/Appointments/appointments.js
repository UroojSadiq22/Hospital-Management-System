import React, { useState } from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Styleappointment from './appointment.module.css'
import { Button } from '@mui/material';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import doctorsData from '../doctors';
import { Link } from 'react-router-dom';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import FormControl from '@mui/material/FormControl';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.primary.light,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

export default function CustomizedTables() {
  const [patientData , setPatientData] = useState({
    name: '',
    email: '',
    phone: '',
    specialization: '',
    date: '',
    time: ''
  });

  const InputHandler = (e) => {
    setPatientData({ ...patientData, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) =>{
    e.preventDefault();
    // const newDoctor = { ...docData };
    // setDoctors([...doctors, newDoctor]); // Adding new doctor to the doctors array
    // handleClose();
  }
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
  return (
    <div className={Styleappointment.patientstab}>
        
        <div style={{display: 'flex' , justifyContent: 'space-between'}}>
      <h2 style={{ margin: '1rem'}}>Appointments</h2>
        <Fab color="primary" aria-label="add" size='small' onClick={handleClickOpen}>
        <AddIcon />
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
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 430 }} aria-label="customized table">
        <TableHead>
          <TableRow>
          <StyledTableCell > <h3> Patient Name</h3></StyledTableCell>
            <StyledTableCell align="right"><h3>ID</h3></StyledTableCell>
            <StyledTableCell align="right"><h3>Date</h3></StyledTableCell>
            <StyledTableCell align="right"><h3>Contact</h3></StyledTableCell>
            <StyledTableCell align="right"><h3>Email</h3></StyledTableCell>
            <StyledTableCell align="right"><h3>Doctor</h3></StyledTableCell>
            <StyledTableCell align="right"><h3>Timing</h3></StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
        {/* {patients.map((row , i) => (
            <StyledTableRow
              key={i}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <StyledTableCell component="th" scope="row" >
                {row.name}
              </StyledTableCell>
              
              <StyledTableCell align="right">{row.ID}</StyledTableCell>
              <StyledTableCell align="right">{row.date}</StyledTableCell>
              <StyledTableCell align="right">{row.phone}</StyledTableCell>
              <StyledTableCell align="right">{row.email}</StyledTableCell>
              <StyledTableCell align="right">{row.doctor}</StyledTableCell>
              <StyledTableCell align="right">{row.time}</StyledTableCell>
            </StyledTableRow>
          ))} */}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  );
}