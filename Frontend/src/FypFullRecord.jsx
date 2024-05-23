import React, { useEffect, useState } from 'react';
import './assets/Fullrecord.css';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function FypFullRecord() {
    const { id } = useParams();
    const [Record, setRecord] = useState({});

    useEffect(() => {
        const fetchData = async () => {
            try {
                const result = await axios.get(`http://localhost:3000/FYP/fullrecord/${id}`);
                setRecord(result.data);
            } catch (error) {
                console.log(error);
            }
        };
        fetchData();
    }, [id]);

    const showPdf = (Upload) => {
        window.open(`http://localhost:3000/uploads/${Upload}`, "_blank", "noreferrer");
    };

    return (
        <>
            <div className="full-record-container">
                <div className="full-record-header">
                    <h1>Full Detail Record</h1>
                </div>
                <div className="details-of-fyp">
                    <div className="record-item">
                        <h2>Title</h2>
                        <p>{Record.Fyptitle}</p>
                    </div>
                    <div className="record-item">
                        <h2>Supervisor</h2>
                        <p>{Record.Supervisor}</p>
                    </div>
                    <div className="record-item">
                        <h2>Domain</h2>
                        <p>{Record.Domain}</p>
                    </div>
                    <div className="record-item">
                        <h2>Year</h2>
                        <p>{Record.Year}</p>
                    </div>
                    <div className="record-item">
                        <h2>Summary</h2>
                        <p>{Record.Shortsummary}</p>
                    </div>
                    <div className="record-item">
                        <h2>Media</h2>
                        <div className="media-container">{Record.Upload}</div>
                        <button className="btn-show" onClick={() => showPdf(Record.Upload)}>Show Pdf</button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default FypFullRecord;
