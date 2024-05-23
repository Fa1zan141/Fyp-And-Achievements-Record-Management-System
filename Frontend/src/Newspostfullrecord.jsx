import React, { useEffect, useState } from 'react';
import './assets/Fullrecord.css';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function Newspostfullrecord() {
    const { id } = useParams();
    const [newsRecord, setNewsRecord] = useState({});

    useEffect(() => {
        const fetchData = async () => {
            try {
                const result = await axios.get(`http://localhost:3000/FYP/newsrecord/${id}`);
                setNewsRecord(result.data);
            } catch (error) {
                console.error(error);
            }
        };

        fetchData();
    }, [id]);

    return (
        <div className="full-record-container">
            <div className="full-record-header">
                <h1>Full Detail Record</h1>
            </div>
            <div className="details-of-news">
                <div className="record-item">
                    <h2>Title</h2>
                    <p>{newsRecord.title}</p>
                </div>
                <div className="record-item">
                    <h2>Description</h2>
                    <p>{newsRecord.description}</p>
                </div>
                <div className="record-item">
                    <h2>Type Of Post</h2>
                    <p>{newsRecord.type}</p>
                </div>
                <div className="record-item">
                    <h2>Location</h2>
                    <p>{newsRecord.location}</p>
                </div>
                <div className="record-item">
                    <h2>Date Of Publish</h2>
                    <p>{new Date(newsRecord.date).toLocaleDateString()}</p>
                </div>
            </div>
        </div>
    );
}

export default Newspostfullrecord;
