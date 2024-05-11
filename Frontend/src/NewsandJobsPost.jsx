import React, { useEffect, useState } from 'react'
import Sidebar from '../Components/Sidebar'
import { FaSearch } from "react-icons/fa";
import {useNavigate} from 'react-router-dom'
import axios from 'axios'


function NewsandJobsPost() {

    const Navigate= useNavigate();

    const [JobpostRecord, setJobpsotRecord]= useState([])
    
    useEffect(() => {
      const fetchData = async () => {
            try {
                const result = await axios.get("http://localhost:3000/jobpostrecord");
                setJobpsotRecord(result.data);
            } catch (error) {
                console.log(error);
            }
        };
    
        fetchData();
    }, []);

    const handleDelete = async (id) => {
        try {
            const res = await axios.delete('http://localhost:3000/deletejobpostrecord/' + id);
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
    <div id="FYPRecord"><p>Jobs Post</p></div>
    <div id="updateFYPbtn"><button><p> Update Record </p></button></div>
    <div id="deleterecordbtn"><button><p> Delete Record </p></button></div>
    <div id="forsearch">
    <form action="">
    <input type="search" id="searchbar" name="searchbar" placeholder='Search'/>
    <div id="Sicon"><button type="submit"><FaSearch /></button></div>
    <div id="table">
    <table>
        <thead>
                <tr>
                    <th>Job Title</th>
                    <th>Location</th>
                    <th>Link</th>
                    <th>Skill</th>
                    <th>Experience</th>
                    <th>Action</th>
                </tr>
        </thead>
        <tbody>
        { JobpostRecord == null
                        ? ""
                        : JobpostRecord.map((jobpostsRecords) => {
                        return(
                            <tr>
                            <td>{jobpostsRecords.jobTitle}</td>
                            <td>{jobpostsRecords.joblocation}</td>
                            <td>{jobpostsRecords.joblink}</td>
                            <td>{jobpostsRecords.skill}</td>
                            <td>{jobpostsRecords.experience}</td>
                            <td id="buttons">
                            <button id="deletebtn" onClick={(e) => handleDelete(jobpostsRecords._id)}>Delete</button> 
                            <button id="viewbtn" onClick={() => {Navigate(`/jobpostfullrecord/${jobpostsRecords._id}`)}}>View</button>
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

export default NewsandJobsPost