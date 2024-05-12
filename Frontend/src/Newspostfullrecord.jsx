import React, { useEffect, useState } from 'react';
import './Fullrecord.css';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function Newspostfullrecord() {
    const { id } = useParams();
    const [newsRecord, setNewsRecord] = useState({});

    useEffect(() => {
        const fetchData = async () => {
            try {
                const result = await axios.get(`http://localhost:3000/newsrecord/`+id);
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
                    <h1> News Title</h1>
                    <p>{newsRecord.newsTitle}</p>
                    <h1>News Description</h1>
                    <p>{newsRecord.newsdescription}</p>
                    <h1>Type Of News</h1>
                    <p>{newsRecord.newsType}</p>
                    <h1>Date Of Publish</h1>
                    <p>{newsRecord.newsDate}</p>
                </div>
            </div>
        </div>
    );
}

export default Newspostfullrecord;
