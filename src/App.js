import './App.css';
import Content from './Components/Doctors/content';
import { Route, Routes, useLocation } from 'react-router-dom'; // Import useLocation hook
import Docdetail from './Components/Doctors/docdetail'
import Navbar from './Navbar'
import About from './Components/About'
import Departments from'./Components/Departments'
import Contact from './Components/Contact'
import Home from './Components/Home';
import Blogs from './Components/Blogs';
import Signin from './Components/Signin/signin';
import PatientDash from './Components/Patients/patientdash'
import Footer from './Components/Footer';
import Admin from './Admin/Admin'
import AdminNavbar from './Admin/Common/Navbar'
import AdminDoctorTable from './Admin/Admin/Doctors/doctortable'
import AdminAppointmnetTable from './Admin/Admin/Appointments/appointments'
import AdminPatientTable from './Admin/Admin/Patients/patientstable'


function App() {
  const location = useLocation(); // Get the current location

  // Define an array of paths where the Navbar should be hidden
  // const hiddenPaths = ['/signin' , '/patientdash' , '/admin/*/dashboard' , '/admin/*/doctors' , '/admin/*/patients' , '/admin/*/appointments'];
  // const hiddenAdminPaths = ['/signin' , '/' , '/about' , '/departments' , '/contact' , '/blogs' , '/patientdash' , '/doctors' , '/doctor/:id'];
  // const hiddenFooter = ['/signin' , '/admin/*/dashboard' , '/admin/*/doctors' , '/admin/*/patients' , '/admin/*/appointments'];

  // // Check if the current path is in the hiddenPaths array
  // const hideNavbar = hiddenPaths.includes(location.pathname);
  // const hideAdminNavbar = hiddenAdminPaths.includes(location.pathname);
  // const hideFooter = hiddenFooter.includes(location.pathname);

   // Define an array of paths where the Navbar should be hidden
   const hiddenPaths = ['/signin', '/patientdash' , '/admin/*/dashboard' , '/admin/*/doctors' , '/admin/*/patients' , '/admin/*/appointments'];
   const hiddenAdminPaths = ['/signin', '/patientdash' , '/' , '/about' , '/departments' , '/contact' , '/blogs' , '/doctors' , /^\/doctor\/\d+$/];
   const hiddenFooter = ['/signin' , '/admin/*/dashboard' , '/admin/*/doctors' , '/admin/*/patients' , '/admin/*/appointments'];
 
   // Check if the current path is in the hiddenPaths array
   const hideNavbar = hiddenPaths.includes(location.pathname);
   const hideAdminNavbar = hiddenAdminPaths.some(path => {
     if (typeof path === 'string') {
       return path === location.pathname;
     } else if (path instanceof RegExp) {
       return path.test(location.pathname);
     }
   });
   const hideFooter = hiddenFooter.includes(location.pathname);
  return (
    <>
   {!hideAdminNavbar && <AdminNavbar/>}
    {!hideNavbar && <Navbar /> } {/* Render Navbar except for paths in hiddenPaths array */}
    <Routes>
 
    
    
      <Route path='/' element={<Home/>}/>
      <Route path="/about" element={<About />} /> 
      <Route path="/departments" element={<Departments />} />
      <Route path="/contact" element={<Contact />}/>
      <Route path="/blogs" element={<Blogs />}/>
      <Route  exact path="/doctors" element={<Content/>}/>
      <Route path="/doctor/:id" element={<Docdetail/>} />
      <Route path='/signin' element={<Signin/>}/>
      <Route path='/patientdash' element={<PatientDash/>}/>
    </Routes>
   {!hideFooter && <Footer/>}

    
    </>
  );
}

export default App;
