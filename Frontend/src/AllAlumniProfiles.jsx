import React, { useEffect, useState } from 'react';
import Sidebar from '../Components/Sidebar';
import SingleAlumniCard from '../Components/SingleAlumniCard'; 
import { FaSearch } from "react-icons/fa";
import './assets/alumniprofiles.css';
import axios from 'axios';

function AllAlumniProfiles() {
    const [alumnidata, setAlumnidata] = useState([]);

    useEffect(() => {
        // Fetch all profiles from the server when the component mounts
        const fetchProfiles = async () => {
            try {
                const response = await axios.get('http://localhost:3000/FYP/profiles'); 
                setAlumnidata(response.data.data);
            } catch (error) {
                console.error('Error fetching profiles:', error);
            }
        };

        fetchProfiles();
    }, []);

    return (
        <>
        <Sidebar />
        <div id="ALine"></div>
        <div id="AAR"><p>Alumni Profiles</p></div>
        <div id="forsearch">
            <form action="">
                <input type="search" id="searchbar" name="searchbaralumni" placeholder='Search Profile' />
                <div id="Sicon"><button type="submit"><FaSearch /></button></div>
            </form>
        </div>
        <div id="grid">
            {alumnidata.map((item, index) => (
                <SingleAlumniCard key={index} alumnidata={item} />
            ))}
        </div>
    </>
    );
}

export default AllAlumniProfiles;
