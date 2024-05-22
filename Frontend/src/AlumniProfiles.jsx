import React from 'react';
import Sidebar from '../Components/Sidebar';
import Alumni from '../Components/Alumni'; 
import { FaSearch } from "react-icons/fa";
import './assets/alumniprofiles.css';

function AlumniProfiles() {
    const Alumnidata = [
        {
            img: 'Std1.jpg',
            FirstName: "Fariha",
            LastName: "Lastname1",
            email: "email1@example.com",
            role: "Role1",
            dob: "DOB1",
            city: "City1",
            postalCode: "PostalCode1",
            department: "Department1",
        },
        {
            img: 'Std 2.jpg',
            FirstName: "Maham",
            LastName: "Lastname2",
            email: "email2@example.com",
            role: "Role2",
            dob: "DOB2",
            city: "City2",
            postalCode: "PostalCode2",
            department: "Department2",
        },
        {
            img: 'Std 3.jpg',
            FirstName: "Qudsia",
            LastName: "Lastname3",
            email: "email3@example.com",
            role: "Role3",
            dob: "DOB3",
            city: "City3",
            postalCode: "PostalCode3",
            department: "Department3",
        },
        {
          img: 'Std 3.jpg',
          FirstName: "Qudsia",
          LastName: "Lastname3",
          email: "email3@example.com",
          role: "Role3",
          dob: "DOB3",
          city: "City3",
          postalCode: "PostalCode3",
          department: "Department3",
      },
      {
        img: 'Std 3.jpg',
        FirstName: "Qudsia",
        LastName: "Lastname3",
        email: "email3@example.com",
        role: "Role3",
        dob: "DOB3",
        city: "City3",
        postalCode: "PostalCode3",
        department: "Department3",
    },
    {
      img: 'Std 3.jpg',
      FirstName: "Qudsia",
      LastName: "Lastname3",
      email: "email3@example.com",
      role: "Role3",
      dob: "DOB3",
      city: "City3",
      postalCode: "PostalCode3",
      department: "Department3",
  },
  {
    img: 'Std 3.jpg',
    FirstName: "Qudsia",
    LastName: "Lastname3",
    email: "email3@example.com",
    role: "Role3",
    dob: "DOB3",
    city: "City3",
    postalCode: "PostalCode3",
    department: "Department3",
},
{
  img: 'Std 3.jpg',
  FirstName: "Qudsia",
  LastName: "Lastname3",
  email: "email3@example.com",
  role: "Role3",
  dob: "DOB3",
  city: "City3",
  postalCode: "PostalCode3",
  department: "Department3",
}
    ];

    return (
        <>
            <Sidebar />
            <div id="ALine"></div>
            <div id="AAR"><p>Alumni Profiles</p></div>
            <div id="forsearch">
                <form action="">
                    <input type="search" id="searchbar" name="searchbaralumni" placeholder='Search Profile' />
                    <div id="Sicon"><button type="submit"><FaSearch /></button></div>
                </form>
            </div>
            <div id="grid">
                {/* Removed the unnecessary wrapping div */}
                {Alumnidata.map((item, index) => (
                    <Alumni key={index} Alumnidata={item} />
                ))}
            </div>
        </>
    );
}

export default AlumniProfiles;
