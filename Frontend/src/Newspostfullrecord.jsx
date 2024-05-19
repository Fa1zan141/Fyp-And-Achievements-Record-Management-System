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
                const result = await axios.get(`http://localhost:3000/FYP/newsrecord/`+id);
                setNewsRecord(result.data);
            } catch (error) {
                console.error(error);
            }
        };

        fetchData();
    }, []);

    return (
        <div>
            <div>
                <div id="fullrecordhead"><h1>Full Detail Record</h1></div>
                <div id="detailsoffyp">
                    <h1> Title</h1>
                    <p>{newsRecord.Title}</p>
                    <h1>Description</h1>
                    <p>{newsRecord.description}</p>
                    <h1>Type Of Post</h1>
                    <p>{newsRecord.Type}</p>
                    <h1>Location</h1>
                    <p>{newsRecord.Location}</p>
                    <h1>Date Of Publish</h1>
                    <p>{newsRecord.Date}</p>
                </div>
            </div>
        </div>
    );
}

export default Newspostfullrecord;
