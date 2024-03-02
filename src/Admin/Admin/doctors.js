import React from 'react'
import doctor1 from '../../Ui/doc1.jpg'
import doctor2 from '../../Ui/doc2.jpg'
import doctor3 from '../../Ui/doc3.jpg'
import doctor4 from '../../Ui/doc4.jpg'
import doctor5 from '../../Ui/doc5.jpg'
import doctor6 from '../../Ui/doc6.jpg'

const doctors = [
    { id: 1 , name: 'Dr. Stephen Jord' , degree: 'Eye Specilist', imageUrl: `${doctor1}` ,
    clinicname: 'Mayo Clinic', Address: '200 1st St SW, Rochester, MN 55905, United States',
    hireOn: '12-02-2022', salary: '$50', email: 'stephenjord@gmail.com',
    location: 'https://maps.google.com/maps?width=100%25&amp;height=400&amp;hl=en&amp;q=200%201st%20St%20SW,%20Rochester,%20MN%2055905,%20United%20States+(Mayo%20Clinic)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed',
    specialities: [' Oral medicine', 'Oral Medicine', 'Dental public health'],
    experience: 'The most well-known dummy text is the Lorem Ipsum which is said to have originated in the 16th century. Lorem Ipsum is composed in a pseudo-Latin language which more or less corresponds to proper Latin. It contains a series of real Latin words. This ancient dummy text is also incomprehensible, but it imitates the rhythm of most European languages in Latin script. The advantage of its Latin origin and the relative meaninglessness of Lorum Ipsum is that the text does not attract attention to itself or distract the viewers attention from the layout.',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'},
    
    { id: 2 , name: 'Dr. Flix Tom' , degree: 'Dental Surgoen', imageUrl: `${doctor2}`,
    specialities: [' Oral medicine', 'Oral Medicine', 'Dental public health'],
    hireOn: '06-04-2019', salary: '$50',  email: 'flixtom@gmail.com',
    location: 'https://maps.google.com/maps?width=100%25&amp;height=400&amp;hl=en&amp;q=200%201st%20St%20SW,%20Rochester,%20MN%2055905,%20United%20States+(Mayo%20Clinic)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed',
    clinicname: 'Mayo Clinic', Address: '200 1st St SW, Rochester, MN 55905, United States',
    experience: 'The most well-known dummy text is the Lorem Ipsum which is said to have originated in the 16th century. Lorem Ipsum is composed in a pseudo-Latin language which more or less corresponds to proper Latin. It contains a series of real Latin words. This ancient dummy text is also incomprehensible, but it imitates the rhythm of most European languages in Latin script. The advantage of its Latin origin and the relative meaninglessness of Lorum Ipsum is that the text does not attract attention to itself or distract the viewers attention from the layout.',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'},
    
    { id: 3 , name: 'Dr. Micheal Jan' , degree: 'Orthopadiac', imageUrl: `${doctor3}`,
    specialities: [' Oral medicine', 'Oral Medicine', 'Dental public health'],
    hireOn: '29-07-2021', salary: '$50', email: 'michealjan@gmail.com',
    location: 'https://maps.google.com/maps?width=100%25&amp;height=400&amp;hl=en&amp;q=200%201st%20St%20SW,%20Rochester,%20MN%2055905,%20United%20States+(Mayo%20Clinic)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed',
    clinicname: 'Mayo Clinic', Address: '200 1st St SW, Rochester, MN 55905, United States',
    experience: 'The most well-known dummy text is the Lorem Ipsum which is said to have originated in the 16th century. Lorem Ipsum is composed in a pseudo-Latin language which more or less corresponds to proper Latin. It contains a series of real Latin words. This ancient dummy text is also incomprehensible, but it imitates the rhythm of most European languages in Latin script. The advantage of its Latin origin and the relative meaninglessness of Lorum Ipsum is that the text does not attract attention to itself or distract the viewers attention from the layout.',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'},
    
    { id: 4 , name: 'Dr. Herry Kane' , degree: 'ENT Specialist', imageUrl: `${doctor4}` ,
    specialities: [' Oral medicine', 'Oral Medicine', 'Dental public health'],
    hireOn: '12-12-2022', salary: '$50', email: 'herrykane@gmail.com',
    location: 'https://maps.google.com/maps?width=100%25&amp;height=400&amp;hl=en&amp;q=200%201st%20St%20SW,%20Rochester,%20MN%2055905,%20United%20States+(Mayo%20Clinic)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed',
    clinicname: 'Mayo Clinic', Address: '200 1st St SW, Rochester, MN 55905, United States',
    experience: 'The most well-known dummy text is the Lorem Ipsum which is said to have originated in the 16th century. Lorem Ipsum is composed in a pseudo-Latin language which more or less corresponds to proper Latin. It contains a series of real Latin words. This ancient dummy text is also incomprehensible, but it imitates the rhythm of most European languages in Latin script. The advantage of its Latin origin and the relative meaninglessness of Lorum Ipsum is that the text does not attract attention to itself or distract the viewers attention from the layout.',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'},
    
    { id: 5 , name: 'Dr. Flavia Mark' , degree: 'General Surgoen', imageUrl: `${doctor5}` ,
    specialities: [' Oral medicine', 'Oral Medicine', 'Dental public health'],
    hireOn: '11-05-2021', salary: '$50', email: 'flaviamark@gmail.com',
    location: 'https://maps.google.com/maps?width=100%25&amp;height=400&amp;hl=en&amp;q=200%201st%20St%20SW,%20Rochester,%20MN%2055905,%20United%20States+(Mayo%20Clinic)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed',
    clinicname: 'Mayo Clinic', Address: '200 1st St SW, Rochester, MN 55905, United States',
    experience: 'The most well-known dummy text is the Lorem Ipsum which is said to have originated in the 16th century. Lorem Ipsum is composed in a pseudo-Latin language which more or less corresponds to proper Latin. It contains a series of real Latin words. This ancient dummy text is also incomprehensible, but it imitates the rhythm of most European languages in Latin script. The advantage of its Latin origin and the relative meaninglessness of Lorum Ipsum is that the text does not attract attention to itself or distract the viewers attention from the layout.',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'},
    
    { id: 6 , name: 'Dr. Tresa Shane' , degree: 'Child Specialist', imageUrl: `${doctor6}`,
    specialities: [' Oral medicine', 'Oral Medicine', 'Dental public health'],
    hireOn: '25-11-2020', salary: '$50', email: 'tresashane@gmail.com',
    location: 'https://maps.google.com/maps?width=100%25&amp;height=400&amp;hl=en&amp;q=200%201st%20St%20SW,%20Rochester,%20MN%2055905,%20United%20States+(Mayo%20Clinic)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed',
    clinicname: 'Mayo Clinic', Address: '200 1st St SW, Rochester, MN 55905, United States',
    experience: 'The most well-known dummy text is the Lorem Ipsum which is said to have originated in the 16th century. Lorem Ipsum is composed in a pseudo-Latin language which more or less corresponds to proper Latin. It contains a series of real Latin words. This ancient dummy text is also incomprehensible, but it imitates the rhythm of most European languages in Latin script. The advantage of its Latin origin and the relative meaninglessness of Lorum Ipsum is that the text does not attract attention to itself or distract the viewers attention from the layout.',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'},

    
]

export default doctors
