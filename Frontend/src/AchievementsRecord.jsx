import React, { useEffect, useState } from 'react';
import Sidebar from '../Components/Sidebar';
import { FaSearch, FaEllipsisV } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function AchievementsRecord() {
    const Navigate = useNavigate();
    const [AchievementsRecord, setAchievementsRecord] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const result = await axios.get("http://localhost:3000/FYP/doneachievement");
                setAchievementsRecord(result.data);
            } catch (error) {
                console.log(error);
            }
        };
        fetchData();
    }, []);

    const handleDelete = async (id) => {
        try {
            await axios.delete('http://localhost:3000/FYP/deleteachievementrecord/' + id);
            setAchievementsRecord(AchievementsRecord.filter(record => record._id !== id));
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <>
            <Sidebar />
            <div id="FYPLine"></div>
            <div id="FYPRecord"><p>Achievements Record</p></div>
            <div id="forsearch">
                <form action="">
                    <input type="search" id="searchbar" name="searchbar" placeholder='Search' />
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
                                {AchievementsRecord.map((achievementsRecords, index) => (
                                    <tr key={achievementsRecords._id} className={index % 2 === 0 ? "even" : "odd"}>
                                        <td>{achievementsRecords.AchievementTitle}</td>
                                        <td>{achievementsRecords.Domain}</td>
                                        <td>{achievementsRecords.Date}</td>
                                        <td>{achievementsRecords.Year}</td>
                                        <td>{achievementsRecords.Description}</td>
                                        <td id="buttons">
                                            <div className="dropdown">
                                                <button className="three-dots"><FaEllipsisV /></button>
                                                <div className="dropdown-content">
                                                    <button onClick={() => { Navigate(`/updateachievement/${achievementsRecords._id}`) }}>Edit</button>
                                                    <button onClick={() => handleDelete(achievementsRecords._id)}>Delete</button>
                                                    <button onClick={() => { Navigate(`/achievementfullrecord/${achievementsRecords._id}`) }}>View</button>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </form>
            </div>
        </>
    );
}

export default AchievementsRecord;
