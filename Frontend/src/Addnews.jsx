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
  const [Upload, setUpload] = useState(null); // Update to null initially

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (!Upload) {
        showToast('Please upload a file', 'linear-gradient(to right, yellow, blue)');
        return;
      }

      // Create form data
      const formData = new FormData();
      formData.append('title', Title);
      formData.append('description', description);
      formData.append('type', Type);
      formData.append('location', Location);
      formData.append('date', Date);
      formData.append('Upload', Upload);

      const result = await axios.post('http://localhost:3000/FYP/addnews', formData, {
        headers: {
          'Content-Type': 'multipart/form-data', // Set content type to multipart form-data
        },
      });

      if (result.data.status !== 'fail') {
        showToast(result.data.message, 'linear-gradient(to right, blue, green)');
        navigate('/allnews');
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

  // Function to handle file input change
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setUpload(file);
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
          <label id='NLabel6' htmlFor="mediaUpload">Upload Icon:</label>
          <input type="file" id="Upload" name="Upload" required accept="image/*" onChange={(e) => setUpload(e.target.files[0])}/>
         
          <div id="SubmitRecord">
          <button type="submit">Add News</button>
          </div>
        </form>
      </div>
    </>
  );
}

export default Addnews;
