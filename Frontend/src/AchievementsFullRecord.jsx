import React, { useEffect, useState } from 'react';
import './assets/Fullrecord.css';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function AchievementsFullRecord() {
    const { id } = useParams();
    const [AchievementRecord, setAchievementRecord] = useState({});

    useEffect(() => {
        const fetchData = async () => {
            try {
                const result = await axios.get(`http://localhost:3000/FYP/achievementfullrecord/${id}`);
                setAchievementRecord(result.data);
            } catch (error) {
                console.log(error);
            }
        };
        fetchData();
    }, [id]);

    const showMedia = () => {
        const { Upload } = AchievementRecord;
        if (!Upload) return null;

        const fileType = Upload.split('.').pop().toLowerCase();

        if (fileType === 'mp4') {
            return (
                <iframe
                    src={`http://localhost:3000/uploads/${Upload}`}
                    frameBorder="0"
                    width="800px"
                    height="300px"
                    allowFullScreen
                    allow="autoplay"
                ></iframe>
            );
        } else if (['jpg', 'jpeg', 'png', 'gif'].includes(fileType)) {
            return <img src={`http://localhost:3000/uploads/${Upload}`} alt="Image" width="800px" height="300px" />;
        } else {
            return "File Not Supported. Upload Supported File";
        }
    };

    return (
        <>
            <div className="full-record-container">
                <div className="full-record-header">
                    <h1>Full Detail Record</h1>
                </div>
                <div className="details-of-fyp">
                    <div className="record-item">
                        <h2>Achievement Title</h2>
                        <p>{AchievementRecord.AchievementTitle}</p>
                    </div>
                    <div className="record-item">
                        <h2>Domain</h2>
                        <p>{AchievementRecord.Domain}</p>
                    </div>
                    <div className="record-item">
                        <h2>Date Of Achievement</h2>
                        <p>{AchievementRecord.Date}</p>
                    </div>
                    <div className="record-item">
                        <h2>Year Of Achievement</h2>
                        <p>{AchievementRecord.Year}</p>
                    </div>
                    <div className="record-item">
                        <h2>Summary About Achievement</h2>
                        <p>{AchievementRecord.Description}</p>
                    </div>
                    <div className="record-item">
                        <h2>Achievement Media</h2>
                        <div className="media-container">{showMedia()}</div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default AchievementsFullRecord;
