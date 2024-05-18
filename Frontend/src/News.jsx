import React, { useEffect, useState } from 'react'
import Sidebar from '../Components/Sidebar'
import { FaSearch } from "react-icons/fa";
import {useNavigate} from 'react-router-dom'
import axios from 'axios'

function News() {

    const Navigate= useNavigate();

    const [NewsRecord, setNewsRecord]= useState([])
    
    useEffect(() => {
      const fetchData = async () => {
            try {
                const result = await axios.get("http://localhost:3000/FYP/newspostrecord");
                setNewsRecord(result.data);
            } catch (error) {
                console.log(error);
            }
        };
    
        fetchData();
    }, []);

    const handleDelete = async (id) => {
        try {
            const res = await axios.delete('http://localhost:3000/FYP/deletenewspostrecord/' + id);
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
    <div id="FYPRecord"><p>Post</p></div>
    <div id="forsearch">
    <form action="">
    <input type="search" id="searchbar" name="searchbar" placeholder='Search'/>
    <div id="Sicon"><button type="submit"><FaSearch /></button></div>
    <div id="table">
    <table>
        <thead>
        <tr>
                    <th>Title</th>
                    <th>Description</th>
                    <th>Type</th>
                    <th>Location</th>
                    <th>Date</th>
                    <th>Action</th>
                </tr>
        </thead>
        <tbody>
        { NewsRecord == null
                        ? ""
                        : NewsRecord.map((newsRecords) => {
                        return(
                            <tr>
                            <td>{newsRecords.title}</td>
                            <td>{newsRecords.description}</td>
                            <td>{newsRecords.type}</td>
                            <td>{newsRecords.location}</td>
                            <td>{new Date(newsRecords.date).toLocaleDateString()}</td>
                            <td id="buttons">
                            <button id="deletebtn" onClick={(e) => handleDelete(newsRecords._id)}>Delete</button> 
                            <button id="viewbtn" onClick={() => {Navigate(`/newsrecord/${newsRecords._id}`)}}>View</button>
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

export default News