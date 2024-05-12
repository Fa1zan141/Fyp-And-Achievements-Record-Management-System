import React, { useEffect, useState } from 'react'
import Sidebar from '../Components/Sidebar'
import { FaSearch } from "react-icons/fa";
import {useNavigate} from 'react-router-dom'
import axios from 'axios'

function AchievementsRecord() {
    const Navigate= useNavigate();

    const [AchievementsRecord, setAchievementsRecord]= useState([])
    
    useEffect(() => {
      const fetchData = async () => {
            try {
                const result = await axios.get("http://localhost:3000/doneachievement");
                setAchievementsRecord(result.data);
            } catch (error) {
                console.log(error);
            }
        };
    
        fetchData();
    }, []);

    const handleDelete = async (id) => {
        try {
            const res = await axios.delete('http://localhost:3000/deleteachievementrecord/' + id);
            console.log(res);
            window.location.reload();
        } catch (error) {
            console.log(error);
        }
    };

  return (
    <>
    <Sidebar></Sidebar>
    <div id="FYPLine"></div>
    <div id="FYPRecord"><p>Achievements Record</p></div>
    <div id="forsearch">
    <form action="">
    <input type="search" id="searchbar" name="searchbar" placeholder='Search'/>
    <div id="Sicon"><button type="submit"><FaSearch /></button></div>
    <div id="table">
    <table>
                <thead>
                <tr>
                    <th>Title</th>
                    <th>Domain</th>
                    <th>Date</th>
                    <th>Year</th>
                    <th>Summary</th>
                    <th>Full View</th>
                </tr>
                </thead>
                <tbody>
                { AchievementsRecord == null
                        ? ""
                        : AchievementsRecord.map((achievementsRecords) => {
                        return(
                            <tr>
                            <td>{achievementsRecords.AchievementTitle}</td>
                            <td>{achievementsRecords.Domain}</td>
                            <td>{achievementsRecords.Date}</td>
                            <td>{achievementsRecords.Year}</td>
                            <td>{achievementsRecords.Description}</td>
                            <td id="buttons">
                            <button id="editbtn" onClick={() => {Navigate(`/updateachievement/${achievementsRecords._id}`)}}>Edit</button> 
                            <button id="deletebtn" onClick={(e) => handleDelete(achievementsRecords._id)}>Delete</button> 
                            <button id="viewbtn" onClick={() => {Navigate(`/achievementfullrecord/${achievementsRecords._id}`)}}>View</button>
                            </td>
                        </tr>
                    )
                })}
                </tbody>
            </table>
    </div>
    
    </form>
    </div>  
    </>
  )
}

export default AchievementsRecord