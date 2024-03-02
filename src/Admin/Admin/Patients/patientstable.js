import React, { useState, useEffect } from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button, Fab, TextField, Dialog, DialogActions, DialogContent, DialogTitle, Radio, RadioGroup, FormControlLabel, FormLabel } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { createUserWithEmailAndPassword,updateProfile } from 'firebase/auth';
import { auth, db } from '../../../firebase'; // Import Firebase auth and Firestore
import { collection, addDoc, getDocs } from 'firebase/firestore'; // Import collection, addDoc, and getDocs from Firestore
import Navbar from '../../../Navbar';
import { useNavigate } from 'react-router-dom';

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
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

export default function CustomizedTables() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const [patientData, setPatientData] = useState({
    name: '',
    age: '',
    gender: '',
    email: '',
    phone: '',
  });

  const [rows, setRows] = useState([]);
  const user = auth.currentUser;


  useEffect(() => {
    // Fetch data from Firestore when component mounts
    fetchDataFromFirestore();
  }, []);

  const InputHandler = (e) => {
    setPatientData({ ...patientData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    try {
      // Register user with email and password
      const userCredential = await createUserWithEmailAndPassword(auth, patientData.email, 'defaultPassword');
      const user = userCredential.user;
      
      // Update user's display name with the patient's name
      await updateProfile(user, { displayName: patientData.name });
  
      // Save patient data to Firestore
      await savePatientDataToFirestore(patientData);
      
      // Add the registered patient to the table
      setRows([...rows, patientData]);
  
      // Clear the form fields
      setPatientData({
        name: '',
        age: '',
        gender: '',
        email: '',
        phone: '',
      });
  
      setOpen(false);
    } catch (error) {
      console.error('Error registering user:', error);
    }
  };
  
  

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const fetchDataFromFirestore = async () => {
    try {
      // Fetch data from Firestore collection
      const querySnapshot = await getDocs(collection(db, 'patients'));
      const patients = [];
      querySnapshot.forEach((doc) => {
        patients.push(doc.data());
      });
      setRows(patients);
    } catch (error) {
      console.error('Error fetching data from Firestore:', error);
    }
  };

  const savePatientDataToFirestore = async (data) => {
    try {
      // Add patient data to Firestore collection
      await addDoc(collection(db, 'patients'), data);
    } catch (error) {
      console.error('Error saving data to Firestore:', error);
    }
  };

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <h2 style={{ margin: '1rem' }}>Patients</h2>
        <Fab color="primary" aria-label="add" size='small' onClick={handleClickOpen}>
          <AddIcon />
        </Fab>
      </div>
      <Dialog
        open={open}
        onClose={handleClose}
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
            id="age"
            name="age"
            label="Age"
            type="text"
            variant="standard"
            value={patientData.age}
            onChange={InputHandler}
          />
          <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel>
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            defaultValue="female"
            name="gender"
            value={patientData.gender}
            onChange={InputHandler}
          >
            <FormControlLabel value="female" control={<Radio />} label="Female" />
            <FormControlLabel value="male" control={<Radio />} label="Male" />
            <FormControlLabel value="other" control={<Radio />} label="Other" />
          </RadioGroup>
          <TextField
            autoFocus
            required
            margin="dense"
            id="email"
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
            id="phone"
            name="phone"
            label="Phone number"
            type="text"
            variant="standard"
            value={patientData.phone}
            onChange={InputHandler}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleSubmit}>Register</Button>
        </DialogActions>
      </Dialog>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 430 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell><h3>Patient Name</h3></StyledTableCell>
              <StyledTableCell align="right"><h3>Age</h3></StyledTableCell>
              <StyledTableCell align="right"><h3>Gender</h3></StyledTableCell>
              <StyledTableCell align="right"><h3>Contact</h3></StyledTableCell>
              <StyledTableCell align="right"><h3>Email</h3></StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((rowData, index) => (
              <StyledTableRow key={index}>
                <StyledTableCell>{rowData.name}</StyledTableCell>
                <StyledTableCell align="right">{rowData.age}</StyledTableCell>
                <StyledTableCell align="right">{rowData.gender}</StyledTableCell>
                <StyledTableCell align="right">{rowData.phone}</StyledTableCell>
                <StyledTableCell align="right">{rowData.email}</StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
