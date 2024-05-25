import React, { useState } from 'react';
import Sidebar from '../Components/Sidebar';
import './AlumniDashboard.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Addnews() {
  const [Title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [Type, setType] = useState('');
  const [Location, setLocation] = useState('');
  const [Date, setDate] = useState('');

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const result = await axios.post('http://localhost:3000/FYP/addnews', {
        title: Title,         // Match the field names with the model schema
        description: description,
        type: Type,
        location: Location,
        date: Date
      });

      if (result.data.status !== 'fail') {
        showToast(result.data.message, 'linear-gradient(to right, blue, green)');
        navigate('/news');
      } else {
        showToast(result.data.message, 'linear-gradient(to right, yellow, blue)');
      }
    } catch (error) {
      console.error('ERROR WHILE Adding Record', error);
      showToast('An error occurred during Adding Record', 'red');
    }
  };

  const showToast = (text, background) => {
    Toastify({
      text,
      duration: 3000,
      gravity: 'top',
      style: {
        background,
        borderRadius: '10px',
      },
    }).showToast();
  };

  return (
    <>
      <Sidebar />
      <div id="VLine"></div>
      <div id="welcome">
        <p>Add Post Record</p>
      </div>
      <div id="NewsForm">
        <form onSubmit={handleSubmit}>
          <label id="NLabel1" htmlFor="newsTitle">News Title:</label>
          <input type="text" id="newsTitle" name="newsTitle" placeholder="News Title" required onChange={(e) => setTitle(e.target.value)} />
          <label id="NLabel2" htmlFor="newsDescription">Description:</label>
          <input type="text" id="newsdescription" name="newsDescription" placeholder="News Description" required onChange={(e) => setDescription(e.target.value)} />
          <label id="NLabel3" htmlFor="newsType">News Type:</label>
          <input type="text" id="newsType" name="newsType" placeholder="Type Of News" required onChange={(e) => setType(e.target.value)} />
          <label id="NLabel4" htmlFor="Location">Location:</label>
          <input type="text" id="Location" name="Location" placeholder="Location" required onChange={(e) => setLocation(e.target.value)} />
          <label id="NLabel5" htmlFor="newsDate">Date Of News:</label>
          <input type="date" id="newsDate" name="newsDate" placeholder="News Date" required onChange={(e) => setDate(e.target.value)} />
          <div id="newssubmit">
            <button type="submit">Submit News</button>
          </div>
        </form>
      </div>
    </>
  );
}

export default Addnews;
