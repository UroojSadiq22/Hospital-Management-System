import React from 'react'
import { useParams } from 'react-router-dom';
import doctors from '../doctors'

const Location = () => {
  const { id } = useParams();
  const doctor = doctors.find(doc => doc.id === parseInt(id));
  return (
    <div>
      <div style={{marginBottom: '1rem'}}>
        <h3 style={{color:'blue'}}>{doctor.clinicname}</h3>
    <p>{doctor.Address}</p>
    </div>
        
            <iframe 
            width="150%" 
            height="300" 
            frameborder="0" 
            scrolling="no" 
            marginheight="0"
             marginwidth="0" 
             src="https://maps.google.com/maps?width=100%25&amp;height=400&amp;hl=en&amp;q=200%201st%20St%20SW,%20Rochester,%20MN%2055905,%20United%20States+(Mayo%20Clinic)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"><a href="https://www.gps.ie/">
              gps tracker sport</a></iframe>
      
    </div>
  )
}

export default Location
