import React, { useEffect, useState } from 'react';
import Sidebar from '../Components/Sidebar';
import { FaSearch, FaEllipsisV, FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function News() {
    const navigate = useNavigate();
    const [NewsRecord, setNewsRecord] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [recordsPerPage] = useState(5);
    const [search, setSearch] = useState('');

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

    const indexOfLastRecord = currentPage * recordsPerPage;
    const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
    const currentRecords = NewsRecord.slice(indexOfFirstRecord, indexOfLastRecord);
// Logic to calculate total number of pages
    const totalRecords = NewsRecord.length;
    const totalPages = Math.ceil(totalRecords / recordsPerPage);
    const handleDelete = async (id) => {
        try {
            const res = await axios.delete('http://localhost:3000/FYP/deletenewspostrecord/' + id);
            console.log(res);
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
            <div id="FYPRecord"><p>Post</p></div>
            <div id="forsearch">
                <form action="">
                    <input type="search" id="searchbar" name="searchbar" placeholder='Search' value={search}  onChange={(e) => setSearch(e.target.value)} />
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
                                {NewsRecord.length === 0 ? (
                                    <tr>
                                        <td colSpan="6">No records found</td>
                                    </tr>
                                ) : (
                                    NewsRecord.filter(record =>
                                        record.title.toLowerCase().includes(search.toLowerCase()) ||
                                         record.type.toLowerCase().includes(search.toLowerCase()) ||
                                         record.location.toLowerCase().includes(search.toLowerCase())
                                    ).map((newsRecord, index) => (
                                        <tr key={newsRecord._id} className={index % 2 === 0 ? "even" : "odd"}>
                                            <td>{newsRecord.title}</td>
                                            <td>{newsRecord.description}</td>
                                            <td>{newsRecord.type}</td>
                                            <td>{newsRecord.location}</td>
                                            <td>{new Date(newsRecord.date).toLocaleDateString()}</td>
                                            <td id="buttons">
                                                <div className="dropdown">
                                                    <button className="three-dots"><FaEllipsisV /></button>
                                                    <div className="dropdown-content">
                                                        <button onClick={(e) => handleDelete(newsRecord._id)}>Delete</button>
                                                        <button onClick={() => navigate(`/newsrecord/${newsRecord._id}`)}>View</button>
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>
                                    ))
                                )}
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

export default News;
