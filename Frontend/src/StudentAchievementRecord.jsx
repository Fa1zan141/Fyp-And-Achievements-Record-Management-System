import React, { useEffect, useState } from 'react';
import Sidebar from '../Components/Sidebar';
import { FaSearch, FaEllipsisV, FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
 
function StudentAchievementRecord() {
    const Navigate = useNavigate();
    const [AchievementsRecord, setAchievementsRecord] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [recordsPerPage] = useState(5);
    const [search,setSearch]= useState();

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

    const indexOfLastRecord = currentPage * recordsPerPage;
    const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
    const currentRecords = AchievementsRecord.slice(indexOfFirstRecord, indexOfLastRecord);

    // Logic to calculate total number of pages
    const totalRecords = AchievementsRecord.length;
    const totalPages = Math.ceil(totalRecords / recordsPerPage);



    const handleDelete = async (id) => {
        try {
            await axios.delete('http://localhost:3000/FYP/deleteachievementrecord/' + id);
            setAchievementsRecord(AchievementsRecord.filter(record => record._id !== id));
        } catch (error) {
            console.log(error);
        }
    };

     // Logic to handle pagination
     const paginate = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    const handleNextPageClick = (e) => {
        e.preventDefault();
        paginate(currentPage + 1);
    };

    const handlePrevPageClick = (e) => {
        e.preventDefault();
        paginate(currentPage === 1 ? 1 : currentPage - 1);
    };


    return (
        <>
            <Sidebar />
            <div id="FYPLine"></div>
            <div id="FYPRecord"><p>Achievements Record</p></div>
            <div id="forsearch">
                <form action="">
                    <input type="search" id="searchbar" name="searchbar" placeholder='Search' value={search} onChange={(e) => {
                        setSearch(e.target.value)
                    }} />
                    <div id="Sicon"><button type="submit"><FaSearch /></button></div>
                    <div id="table">
                        <table>
                            <thead>
                                <tr>
                                    <th>Title</th>
                                    <th>Name</th>
                                    <th>Date</th>
                                    <th>Catagory</th>
                                    <th>Summary</th>
                                    <th>Full View</th>
                                </tr>
                            </thead>
                            <tbody>
                                {AchievementsRecord.filter(record =>
                                record.AchievementTitle.toLowerCase().includes(search.toLowerCase()) ||
                                record.Catagory.toLowerCase().icludes(search.toLowerCase) ||
                                record.Date.toString().includes(search.toLowerCase)||
                                record.Name.toLowerCase().icludes(search.toLowerCase)
                                )
                                .map((achievementsRecords, index) => (
                                    <tr key={achievementsRecords._id} className={index % 2 === 0 ? "even" : "odd"}>
                                        <td>{achievementsRecords.AchievementTitle}</td>
                                        <td>{achievementsRecords.Name}</td>
                                        <td>{achievementsRecords.Date}</td>
                                        <td>{achievementsRecords.Catagory}</td>
                                        <td>{achievementsRecords.Description}</td>
                                        <td id="buttons">
                                            <div className="dropdown">
                                                <button className="three-dots"><FaEllipsisV /></button>
                                                <div className="dropdown-content">
                                                    <button onClick={() => { Navigate(`/updateachievement/${achievementsRecords._id}`) }}>Edit</button>
                                                   
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
                <div className="pagination">
                        <button onClick={handlePrevPageClick}><FaArrowLeft /></button>
                        <div className="page-numbers">
                            {Array.from({ length: totalPages }, (_, index) => (
                                <button key={index + 1} onClick={() => paginate(index + 1)} className={currentPage === index + 1 ? 'active' : ''}>
                                    {index + 1}
                                </button>
                            ))}
                        </div>
                        <button onClick={handleNextPageClick}><FaArrowRight /></button>
                    </div>
            </div>
        </>
    );
}

export default StudentAchievementRecord;
