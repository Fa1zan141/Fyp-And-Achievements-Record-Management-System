import React, { useEffect, useState } from 'react';
import Sidebar from '../Components/Sidebar';
import { FaSearch, FaEllipsisV } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function News() {
    const navigate = useNavigate();
    const [NewsRecord, setNewsRecord] = useState([]);

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
            <Sidebar />
            <div id="FYPLine"></div>
            <div id="FYPRecord"><p>Post</p></div>
            <div id="forsearch">
                <form action="">
                    <input type="search" id="searchbar" name="searchbar" placeholder='Search' />
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
                                    NewsRecord.map((newsRecord) => (
                                        <tr key={newsRecord._id}>
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
            </div>
        </>
    );
}

export default News;
