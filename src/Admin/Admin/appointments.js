import React, { useState } from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Styleadmin from './admin.module.css'
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';

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
  return (
    <div className={Styleadmin.appointmentstab}>
        
        
      <h2 style={{ margin: '1rem'}}>Appointments</h2>
       
   
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 430 }} aria-label="customized table">
        <TableHead>
          <TableRow>
          <StyledTableCell > <h3> Patient Name</h3></StyledTableCell>
            <StyledTableCell align="right"><h3>ID</h3></StyledTableCell>
            <StyledTableCell align="right"><h3>Date</h3></StyledTableCell>
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
      {/* <div style={{ marginTop: '20px', width: '100%' }}>
      <Button variant="contained" size="medium" fullWidth>
          View all
        </Button>
      </div> */}
      <Link to="/admin/*/appointments" >
        <Button variant="contained" size="medium" fullWidth>
          View all
        </Button>
      </Link>
      
    </TableContainer>
    </div>
  );
}