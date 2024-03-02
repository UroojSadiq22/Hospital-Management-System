import React from 'react'
import { useParams } from 'react-router-dom';
import doctors from '../doctors'

const Overview = () => {
  const { id } = useParams();
  const doctor = doctors.find(doc => doc.id === parseInt(id));
  
  return (
    <>
      <h2 style={{color: 'blue'}}>{doctor.name}</h2>
      <label>{doctor.degree}</label>
      <p style={{margin: '2rem 0'}}>{doctor.description}</p>
      <h3 style={{color: 'blue'}}>Specialities</h3>
      <ul>
        {doctor.specialities.map((speciality, index) => (
          <li key={index}>{speciality}</li>
        ))}
      </ul>
    </>
  )
}

export default Overview