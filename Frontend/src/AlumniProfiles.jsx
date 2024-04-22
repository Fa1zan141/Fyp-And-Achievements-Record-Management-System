import React from 'react'
import Sidebar from '../Components/Sidebar'
import AlumniProfile from '../Components/AlumniProfile';
import { FaSearch } from "react-icons/fa";
import './alumniprofiles.css'
function AlumniProfiles() {
    const Alumnidata = [
        {
          img: 'Std1.jpg',
          Name: "Fariha",
        },
        {
          img: 'Std 2.jpg',
          Name: "Maham",
        },
        {
          img: 'Std 3.jpg',
          Name: "Qudsia",
        },
      ];
  return (
    <>
    <Sidebar></Sidebar>
    <div id="ALine"></div>
    <div id="AAR"><p>Alumni Profiles</p></div>
    <div id="forsearch">
    <form action="">
    <input type="search" id="searchbar" name="searchbaralumni" placeholder='Search Profile'/>
    <div id="Sicon"><button type="submit"><FaSearch /></button></div>
    </form>
    </div>
    <div id="Arecord"><h1>All Profiles</h1></div>
    <div id="alumnip">
    {Alumnidata.map((item, index)=>(
              <AlumniProfile Alumnidata={item}/>
            ))}
    </div>
           
    </>
  )
}

export default AlumniProfiles