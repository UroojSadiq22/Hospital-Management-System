import React from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import AccessTimeIcon from '@mui/icons-material/AccessTime';


function createData(name, value) {
    return { name, value};
  }
  
  const rows = [
    createData('Monday', 'Time: 8.00 - 20.00'),
    createData('Tuesday', 'Time: 8.00 - 20.00'),
    createData('Wednesday', 'Time: 8.00 - 20.00'),
    createData('Thursday', 'Time: 8.00 - 20.00'),
    createData('Friday', 'Time: 3.00 - 17.00'),
    createData('Saturday', 'Time: 8.00 - 20.00'),
    createData('Sunday', 'Time: 8.00 - 3.00'),
  ];

const Schedule = () => {
    
  return (
    <TableContainer component={Paper}>
    <Table sx={{ minWidth: 300}} aria-label="simple table">
      
      <TableBody>
        {rows.map((row) => (
            
          <TableRow
            key={row.name}
            sx={{ '&:last-child td, &:last-child th': { border: 0 }}}
          >
            
            <TableCell component="th" scope="row">
            <AccessTimeIcon style={{ marginRight: '8px' }}/>
                
              {row.name}
            </TableCell>
            <TableCell align="right">{row.value}</TableCell>
            
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer>
  )
}

export default Schedule
