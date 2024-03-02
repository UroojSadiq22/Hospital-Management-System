import React from 'react'
import { useParams } from 'react-router-dom';
import doctors from '../doctors'

const Experience = () => {
    const { id } = useParams();
  const doctor = doctors.find(doc => doc.id === parseInt(id));
  return (
    <div>
        <h2 style={{color: 'blue' , marginBottom: '2rem'}}>Experience</h2>
        <p>{doctor.experience}</p>
      
    </div>
  )
}

export default Experience
