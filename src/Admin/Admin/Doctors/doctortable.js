import  React , {useState} from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button } from '@mui/material';
import Styledoctor from './doctor.module.css'
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import doctorsData from '../doctors';


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
  const [docData , setDocData] = useState({
    name: '',
    email: '',
    phone: '',
    degree: '',
    experience: '',
    salary:'',
    hireon: ''
  });

  const InputHandler = (e) => {
    setDocData({ ...docData, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) =>{
    e.preventDefault();
    const newDoctor = { ...docData };
    setDoctors([...doctors, newDoctor]); // Adding new doctor to the doctors array
    handleClose();
  }
  const [open, setOpen] = useState(false);
  const [doctors, setDoctors] = useState(doctorsData);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  
  return (
    <div className={Styledoctor.doctorstab}>
      <div style={{display: 'flex' , justifyContent: 'space-between'}}>
      <h2 style={{ margin: '1rem'}}>Doctors List</h2>
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
        <DialogTitle>New Doctor Registration</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            required
            margin="dense"
            id="name"
            name="name"
            label="Doctor Name"
            type="text"
            variant="standard"
            value={docData.name}
            onChange={InputHandler}
          />
          <TextField
            autoFocus
            required
            margin="dense"
            id="name"
            name="degree"
            label="Degree"
            type="text"
            fullWidth
            variant="standard"
            value={docData.degree}
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
            value={docData.email}
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
            value={docData.phone}
            onChange={InputHandler}
          />



<TextField
            autoFocus
            required
            margin="dense"
            id="name"
            name="experience"
            label="Experience"
            type="text"
            fullWidth
            variant="standard"
            value={docData.experience}
            onChange={InputHandler}
          />
          <TextField
            autoFocus
            required
            margin="dense"
            id="salary"
            name="salary"
            label="Salary"
            type="text"
            fullWidth
            variant="standard"
            value={docData.salary}
            onChange={InputHandler}
          />
          <TextField
            autoFocus
            required
            margin="dense"
            id="hireon"
            name="hireon"
            label="Hire On"
            type="date"
            fullWidth
            variant="standard"
            value={docData.hireon}
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
      <Table sx={{ minWidth: 230 }} aria-label="customized table">
        <TableHead>
          <TableRow>
          <StyledTableCell > <h3> Doctor Name</h3></StyledTableCell>
            <StyledTableCell align="right"><h3>ID</h3></StyledTableCell>
            <StyledTableCell align="right"><h3>Degree</h3></StyledTableCell>
            <StyledTableCell align="right"><h3>Salary</h3></StyledTableCell>
            <StyledTableCell align="right"><h3>Hire On</h3></StyledTableCell>
            <StyledTableCell align="right"><h3>Email</h3></StyledTableCell>
            <StyledTableCell align="right"></StyledTableCell>
            
           
          </TableRow>
        </TableHead>
        <TableBody>
        {doctors.map((row) => (
            <StyledTableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <StyledTableCell component="th" scope="row" >
                {row.name}
              </StyledTableCell>
              
              <StyledTableCell align="right">{row.id}</StyledTableCell>
              <StyledTableCell align="right">{row.degree}</StyledTableCell>
              <StyledTableCell align="right">{row.salary}</StyledTableCell>
              <StyledTableCell align="right">{row.hireOn}</StyledTableCell>
              <StyledTableCell align="right">{row.email}</StyledTableCell>
              <StyledTableCell align="right"><Button size="small">View</Button></StyledTableCell>
              
            </StyledTableRow>
          ))}
        </TableBody>
        
      </Table>
      
    </TableContainer>
    
    
  
    
    </div>
  );
}