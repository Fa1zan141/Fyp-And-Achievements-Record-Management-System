import React, { useEffect, useState } from 'react'
import Sidebar from '../Components/Sidebar'
import './FYPRecord.css'
import { FaSearch } from "react-icons/fa";
import {useNavigate} from 'react-router-dom'
import axios from 'axios'

function FYPRecord() {
    const Navigate= useNavigate();

    const [FYPRecord, setFYPRecord]= useState([])
    
    useEffect(() => {
      const fetchData = async () => {
            try {
                const result = await axios.get("http://localhost:3000/FYP/");
                setFYPRecord(result.data);
            } catch (error) {
                console.log(error);
            }
        };
    
        fetchData();
    }, []);

    const handleDelete = async (id) => {
        try {
            const res = await axios.delete('http://localhost:3000/FYP/deletefpyrecord/' + id);
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
    <div id="FYPRecord"><p>FYP Record</p></div>
    <div id="forsearch">
    <form action="">
    <input type="search" id="searchbar" name="searchbar" placeholder='Search'/>
    <div id="Sicon"><button type="submit"><FaSearch /></button></div>
    <div id="table">
    <table>
        <thead>
        <tr>
                    <th>Title</th>
                    <th>Supervisor</th>
                    <th>Domain</th>
                    <th>Year</th>
                    <th>Summary</th>
                    <th>Action</th>
                </tr>
        </thead>
        <tbody>
        { FYPRecord == null
            ? ""
            : FYPRecord.map((fyprecord) => {
            return(
                <tr>
                <td>{fyprecord.Fyptitle}</td>
                <td>{fyprecord.Supervisor}</td>
                <td>{fyprecord.Domain}</td>
                <td>{fyprecord.Year}</td>
                <td>{fyprecord.Shortsummary}</td>
                <td id="buttons">
                <button id="editbtn" onClick={() => {Navigate(`/updatefyp/${fyprecord._id}`)}}>Edit</button> 
                <button id="deletebtn" onClick={(e) => handleDelete(fyprecord._id)}>Delete</button> 
                <button id="viewbtn" onClick={() => {Navigate(`/fullrecord/${fyprecord._id}`)}}>View</button>
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

export default FYPRecord