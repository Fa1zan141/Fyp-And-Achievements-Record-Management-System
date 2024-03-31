import React from 'react'
import Sidebar from '../Components/Sidebar'
import './AlumniDashboard.css'
function AlumniDashboard() {
  return (
    <>
    <Sidebar></Sidebar>
    <div id="VLine"></div>
    <div id="welcome"><p>My Alumni Profile</p></div>
    <div id="Jobpostbtn"><button><p> Job Post </p></button></div>
    <div id="NewsPostbtn"><button><p> News Post </p></button></div>
    <div id="UpdateAccountbtn"><button><p> Update Account </p></button></div>
    <div id="job"><h1>Job Post</h1></div>
    <div id="JobForm">
    <form >
    <label id='Label1' htmlFor="jobTitle">Job Title:</label>
    <input type="text" id="jobTitle" name="jobTitle" placeholder='Job Title'/>
    <label id='Label2' htmlFor="joblocation">Job Location:</label>
    <input type="text" id="joblocation" name="joblocation" placeholder='Job Location'/>
    <label id='Label3' htmlFor="joblink">Job Link:</label>
    <input type="text" id="joblink" name="joblink" placeholder='Paste Job Link'/>
    <div id="jobsubmit"><button type="submit">Submit Job</button></div>
    </form>
    </div>
    <div id="news"><h1>News Post</h1></div>
    <div id="NewsForm">
    <form >
    <label id='NLabel1' htmlFor="newsTitle">News Title:</label>
    <input type="text" id="newsTitle" name="newsTitle" placeholder='News Title'/>
    <label id='NLabel2' htmlFor="newsdescription">Description:</label>
    <input type="text" id="newsdescription" name="newsdescription" placeholder='News Description'/>
    <div id="newssubmit"><button type="submit">Submit News</button></div>
    
    </form>
    </div>
    
    </>
  )
}

export default AlumniDashboard