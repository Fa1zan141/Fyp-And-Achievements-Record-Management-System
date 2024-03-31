import React from 'react'
import Sidebar from '../Components/Sidebar'
import './FYPRecord.css'
import { FaSearch } from "react-icons/fa";
import { FaEye } from "react-icons/fa";

const FypRecorddata = [
    { Title: "FYP&Achievements Record", Supervisor: "Mam Hafsa Shreef Dar", Domain: "web3", Year: 2002, Summary: "Summary", FullView: <FaEye/>}
]

function FYPRecord() {
  return (
    <>
    <Sidebar></Sidebar>
    <div id="FYPLine"></div>
    <div id="FYPRecord"><p>FYP Record</p></div>
    <div id="updateFYPbtn"><button><p> Update Record </p></button></div>
    <div id="deleterecordbtn"><button><p> Delete Record </p></button></div>
    <div id="forsearch">
    <form action="">
    <input type="search" id="searchbar" name="searchbar" placeholder='Search'/>
    <div id="Sicon"><button type="submit"><FaSearch /></button></div>
    <div id="table">
    <table>
                <tr>
                    <th>Title</th>
                    <th>Supervisor</th>
                    <th>Domain</th>
                    <th>Year</th>
                    <th>Summary</th>
                    <th>Full View</th>
                </tr>
                {FypRecorddata.map((val, key) => {
                    return (
                        <tr key={key}>
                            <td>{val.Title}</td>
                            <td>{val.Supervisor}</td>
                            <td>{val.Domain}</td>
                            <td>{val.Year}</td>
                            <td>{val.Summary}</td>
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

export default FYPRecord