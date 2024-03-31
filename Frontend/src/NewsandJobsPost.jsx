import React from 'react'
import Sidebar from '../Components/Sidebar'
import { FaSearch } from "react-icons/fa";
import { FaEye } from "react-icons/fa";

const FypRecorddata = [
    { JobTitle: "FYP&Achievements Record", JobLocation: "Lahore", Link:"@Linkedin", NewsTitle: "Media", Description: "Summary", FullView: <FaEye/>}
]

function NewsandJobsPost() {
  return (
    <>
     <Sidebar></Sidebar>
    <div id="FYPLine"></div>
    <div id="FYPRecord"><p>News & Jobs Post</p></div>
    <div id="updateFYPbtn"><button><p> Update Record </p></button></div>
    <div id="deleterecordbtn"><button><p> Delete Record </p></button></div>
    <div id="forsearch">
    <form action="">
    <input type="search" id="searchbar" name="searchbar" placeholder='Search'/>
    <div id="Sicon"><button type="submit"><FaSearch /></button></div>
    <div id="table">
    <table>
                <tr>
                    <th>Job Title</th>
                    <th>Job Location</th>
                    <th>Link</th>
                    <th>News Title</th>
                    <th>Description</th>
                    <th>Full View</th>
                </tr>
                {FypRecorddata.map((val, key) => {
                    return (
                        <tr key={key}>
                            <td>{val.JobTitle}</td>
                            <td>{val.JobLocation}</td>
                            <td>{val.Link}</td>
                            <td>{val.NewsTitle}</td>
                            <td>{val.Description}</td>
                            <td>{val.FullView}</td>
                        </tr>
                    )
                })}
            </table>
    </div>
    </form>
    </div>
    
    </>
  )
}

export default NewsandJobsPost