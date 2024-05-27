import React, { useEffect, useState } from 'react';
import Sidebar from '../Components/Sidebar';
import './assets/FYPRecord.css';
import { FaSearch, FaEllipsisV, FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function ForAllFypRecord() {
    const Navigate = useNavigate();
    const [FYPRecord, setFYPRecord] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [recordsPerPage] = useState(5);
    const [searchQuery, setSearchQuery] = useState('');

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

    // Logic to get current records for the current page
    const indexOfLastRecord = currentPage * recordsPerPage;
    const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
    const currentRecords = FYPRecord.slice(indexOfFirstRecord, indexOfLastRecord);

    // Logic to calculate total number of pages
    const totalRecords = FYPRecord.length;
    const totalPages = Math.ceil(totalRecords / recordsPerPage);
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

    // Function to handle search
    const handleSearch = (e) => {
        setSearchQuery(e.target.value);
    };

    // Filter records based on search query
    const filteredRecords = FYPRecord.filter(record =>
        record.Fyptitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
        record.Supervisor.toLowerCase().includes(searchQuery.toLowerCase()) ||
        record.Domain.toLowerCase().includes(searchQuery.toLowerCase()) ||
        record.Year.toString().includes(searchQuery.toLowerCase())
    );

    return (
        <>
            <Sidebar />
            <div id="FYPLine"></div>
            <div id="FYPRecord"><p>FYP Record</p></div>
            <div id="forsearch">
                <form action="">
                    <input type="search" id="searchbar" name="searchbar" placeholder='Search' value={searchQuery} onChange={handleSearch} />
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
                                {currentRecords.map((fyprecord, index) => (
                                    <tr key={fyprecord._id} className={index % 2 === 0 ? "even" : "odd"}>
                                        <td>{fyprecord.Fyptitle}</td>
                                        <td>{fyprecord.Supervisor}</td>
                                        <td>{fyprecord.Domain}</td>
                                        <td>{fyprecord.Year}</td>
                                        <td>{fyprecord.Shortsummary}</td>
                                        <td id="buttons">
                                            <div className="dropdown">
                                                <button className="three-dots"><FaEllipsisV /></button>
                                                <div className="dropdown-content">

                                                    <button onClick={() => { Navigate(`/fullrecord/${fyprecord._id}`) }}>View</button>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
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
                </form>
            </div>
        </>
    );
}

export default ForAllFypRecord;
