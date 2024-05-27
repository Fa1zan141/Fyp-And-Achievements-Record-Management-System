import React, { useEffect, useState } from 'react';
import Sidebar from '../Components/Sidebar';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function UpdateFypRecord() {
  const { id } = useParams();
  const [Fyptitle, setFyptitle] = useState('');
  const [Supervisor, setSupervisor] = useState('');
  const [Domain, setDomain] = useState('');
  const [Year, setYear] = useState('');
  const [Shortsummary, setShortsummary] = useState('');
  const [Upload, setUpload] = useState(null);
  const [FYPRecord, setFYPRecord] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await axios.get(`http://localhost:3000/FYP/updaterecord/${id}`);
        const data = result.data;
        setFYPRecord(data);
        setFyptitle(data.Fyptitle);
        setSupervisor(data.Supervisor);
        setDomain(data.Domain);
        setYear(data.Year);
        setShortsummary(data.Shortsummary);
        setUpload(data.Upload);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [id]);

  const Navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("Fyptitle", Fyptitle);
    formData.append("Supervisor", Supervisor);
    formData.append("Domain", Domain);
    formData.append("Year", Year);
    formData.append("Shortsummary", Shortsummary);
    if (Upload) {
      formData.append("Upload", Upload);
    }

    try {
      const result = await axios.put(
        `http://localhost:3000/FYP/updatedrecord/${id}`,
        formData,
        {
          headers: { "Content-Type": "multipart/form-data" },
        }
      );

      console.log(result);
      if (result.data.status !== "ok") {
        Toastify({
          text: "Record Updated Successfully",
          duration: 3000,
          gravity: "top",
          style: {
            background: "linear-gradient(to right, blue, green)",
            borderRadius: "10px",
          },
        }).showToast();
        Navigate('/fyprecord');
      } else {
        Toastify({
          text: result.data.message,
          duration: 3000,
          gravity: "top",
          style: {
            background: "linear-gradient(to right, yellow, blue)",
            borderRadius: "10px",
          },
        }).showToast();
      }
    } catch (error) {
      console.error('ERROR WHILE Updating Record', error);
      Toastify({
        text: 'An error occurred during Updating Record',
        duration: 3000,
        gravity: "top",
        backgroundColor: "red",
      }).showToast();
    }
  };

  return (
    <>
      <Sidebar />
      <div id="ALine"></div>
      <div id="AAR"><p>Update Fyp Record</p></div>
      <div id="RecordForm">
        <form onSubmit={handleSubmit}>
          <label id='Label1' htmlFor="Fyptitle">FYP Title:</label>
          <input type="text" id="AchievementTitle" name="Fyptitle" placeholder='Fyp Title' value={Fyptitle} required onChange={(e) => setFyptitle(e.target.value)} />
          <label id='Label2' htmlFor="Supervisor">Supervisor:</label>
          <input type="text" id="Domain" name="Supervisor" placeholder='Supervisor' value={Supervisor} required onChange={(e) => setSupervisor(e.target.value)} />
          <label id='Label3' htmlFor="Domain">Domain:</label>
          <input type="text" id="Date" name="Domain" placeholder='Domain' value={Domain} required onChange={(e) => setDomain(e.target.value)} />
          <label id='Label4' htmlFor="Year">Year:</label>
          <input type="text" id="Year" name="Year" placeholder='Year' value={Year} required onChange={(e) => setYear(e.target.value)} />
          <label id='Label5' htmlFor="Shortsummary">Short Summary:</label>
          <input type="text" id="Description" name="Shortsummary" placeholder='Short summary' value={Shortsummary} required onChange={(e) => setShortsummary(e.target.value)} />
          <label id='Label6' htmlFor="mediaUpload">Upload Media:</label>
          <input type="file" id="Upload" name="Upload" accept="application/pdf" onChange={(e) => setUpload(e.target.files[0])} />
          <div id="SubmitRecord"><button type="submit">Update Record</button></div>
        </form>
      </div>
    </>
  );
}

export default UpdateFypRecord;
