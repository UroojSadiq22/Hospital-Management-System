import React, { useState , useEffect} from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Styleappointment from './appointment.module.css'
import { db } from "../../../firebase";
import { collection, getDocs, deleteDoc, doc, updateDoc } from "firebase/firestore"


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
  const [patientData , setPatientData] = useState([]);


  useEffect(() => {
    const fetchappointmentData = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "Appointments"));
        const data = [];
        querySnapshot.forEach((doc) => {
          data.push({ id: doc.id, ...doc.data() });
        });
        setPatientData(data);
      } catch (error) {
        console.error("Error fetching Appointment data: ", error);
      }
    };

    fetchappointmentData();
  }, []);

  
  return (
    <div className={Styleappointment.patientstab}>
        
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
        {patientData.map((appointment) => (
            <StyledTableRow
              key={appointment.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <StyledTableCell component="th" scope="row" >
                {appointment.name}
              </StyledTableCell>
              
              <StyledTableCell align="right">{appointment.ID}</StyledTableCell>
              <StyledTableCell align="right">{appointment.date}</StyledTableCell>
              <StyledTableCell align="right">{appointment.phone}</StyledTableCell>
              <StyledTableCell align="right">{appointment.email}</StyledTableCell>
              <StyledTableCell align="right">{appointment.doctor}</StyledTableCell>
              <StyledTableCell align="right">{appointment.time}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  );
}