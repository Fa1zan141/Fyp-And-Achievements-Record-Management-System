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
                const result = await axios.get("http://localhost:3000/newspostrecord");
                setNewsRecord(result.data);
            } catch (error) {
                console.log(error);
            }
        };
    
        fetchData();
    }, []);

    const handleDelete = async (id) => {
        try {
            const res = await axios.delete('http://localhost:3000/deletenewspostrecord/' + id);
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
    <div id="FYPRecord"><p>News Post</p></div>
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
                    <th>News Title</th>
                    <th>News Description</th>
                    <th>News Type</th>
                    <th>News Date</th>
                    <th>Action</th>
                </tr>
        </thead>
        <tbody>
        { NewsRecord == null
                        ? ""
                        : NewsRecord.map((newsRecords) => {
                        return(
                            <tr>
                            <td>{newsRecords.newsTitle}</td>
                            <td>{newsRecords.newsdescription}</td>
                            <td>{newsRecords.newsType}</td>
                            <td>{newsRecords.newsDate}</td>
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