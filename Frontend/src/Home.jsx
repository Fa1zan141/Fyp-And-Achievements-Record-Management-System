import React, { useState }  from 'react'
import { Link } from 'react-router-dom'
import './Home.css'
import { Typewriter } from 'react-simple-typewriter'
import { motion } from "framer-motion"
import FYPCard from '../Components/FYPCard'
import AchievementsCard from '../Components/AchievementsCard'
import News from '../Components/News'
import Supervisors from '../Components/Supervisors'
import AlumniProfile from '../Components/AlumniProfile'
import { FaRegCopyright } from "react-icons/fa6";
import {useNavigate} from 'react-router-dom'



function Home() {
 
  //FYP Card Data Object
  const Fypdata=[{
    title:"Title",
    studentname:"Student Name",
    supervisor:"Supervisor"
  },
  {
    title:"Title",
    studentname:"Student Name",
    supervisor:"Supervisor"
  },
  {
    title:"Title",
    studentname:"Student Name",
    supervisor:"Supervisor"
  },
  {
    title:"Title",
    studentname:"Student Name",
    supervisor:"Supervisor"
  }
  ];
  const Achievementsdata = [
    {
      img: 'Ach.png',
      video: '',
      description: "Description Of The Achievements",
    },
    {
      img: 'Ach4.jpg',
      video: '',
      description: "Description Of The Achievements",
    },
    {
      img: 'Ach2.jpg',
      video: '',
      description: "Description Of The Achievements",
    },
  ];
  const Newsjobs=[{
    title:"1-News Of Scholorship"
  },
  {
    title:"2-Post Of Scholorship"
  },
  {
    title:"3-Student Of Scholorship"
  },
  {
    title:"4-Study at Scholorship"
  },
];
const Teachersdata = [
  {
    img: 'Teacher2.jpg',
    Name: "Adeel Shehzad",
  },
  {
    img: 'Teacher1.png',
    Name: "Mam Reema",
  }
];
const Alumnidata = [
  {
    img: 'Std1.jpg',
    Name: "Fariha",
  },
  {
    img: 'Std 2.jpg',
    Name: "Maham",
  },
  {
    img: 'Std 3.jpg',
    Name: "Qudsia",
  },
];

  const handleType = (char) => {
    console.log(`Typing character ${char}`);
  };
  const handleDone = () => {
    console.log(`Typing animation done after 5 loops!`);
  };

 

  return (
    <>
    <div className='h-screen w-full bg-color1'>
    <nav id="Hnav">
            <div id="Hnavl">
            <div id="Hlogo"></div>
            </div>
            <div id="Hnavr">
            <ul>
                    <li>
                    <Link to="/home">Home</Link>
                    </li>
                    <li>
                    <Link to="/fyprecord">FYP</Link>
                    </li>
                    <li>
                    <Link to="/achievementsrecord">Achievements</Link>
                    </li>
                    <li>
                    <Link to="/newsandjobspost">News & Jobs</Link>
                    </li>
                    <li>
                    <Link to="/alumniprofiles">Alumni</Link>
                    </li>
                </ul> 
                <button id="username" >Muhammad Faizan</button>
                <button id="Hpbtn">Logout</button>
                
            </div>
        </nav>
        <div id="Hero">
        <div id="HeroL">
        <p id="Hp">
                <Typewriter
                 words={['Department', 'SE', 'Code']}
                 loop={Infinity}
                 cursor
                 cursorStyle='_'
                 typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
                onLoopDone={handleDone}
                onType={(char) => handleType(char)}/>
                    <span>New Era!</span> <br />
                    <h2 id="Shtag">To Store Record </h2> <br/>
                    Revolutionized the Fyp & Achievements Record of Software Engineering Depeartment And Give A Platform <br />
                    To The Students To Showcase Their Records And Achievements! <br />
                    Also Collaborate With Their Alumni To Seek Guidance According To Their Intrest
                </p>
        </div>
          <div id="HeroR">
          <motion.div animate={{x:[-130,0,0,-130], move:1}}transition={{type:"tween", repeat:Infinity, duration:3}} id="HeroRimg"></motion.div>
          </div>
          <div id="underhero">
            <div id="Uherotop" >
            <h1 style={{width:50, height:50, paddingLeft:50, fontSize:25, fontWeight:800, color:'rgb(24, 24, 58)'}}>RecentFYP</h1>
            {Fypdata.map((item, index)=>(
              <FYPCard Fypdata={item}/>
            ))}
            </div>
            <div id="Uherobottom">
            <h1 style={{width:50, height:50, paddingLeft:50, fontSize:25, fontWeight:800, color:'white'}}>RecentAchievements</h1>
            {Achievementsdata.map((item, index)=>(
              <AchievementsCard Achievementsdata={item}/>
            ))}
              
            </div>
          </div>
          <div id="lastsection">
          <div class="vertical-line"></div>  
            <div id="sectiontop">
              <div id="topleft">     
              <h1 style={{width:50, height:50,paddingLeft:50, fontSize:25, fontWeight:800, color:'white'}}>News&Jobs</h1>
              <div style={{height:250, width:500, backgroundColor:'rgb(37, 175, 37)', borderRadius:30, marginLeft:50, margin:50 , marginTop:20}}>
              {Newsjobs.map((item, index)=>(
              <News Newsjobs={item}/>
            ))}
              </div>
              </div>
              <div id="topright">
              <h1 style={{width:50, height:50,paddingLeft:50, fontSize:25, fontWeight:800, color:'white'}}>Teachers/Supervisors</h1>
              <div id="Supervisor">
              {Teachersdata.map((item, index)=>(
              <Supervisors Teachersdata={item}/>
            ))}
              </div>
              </div>
            </div>
            <div id="sectionbottom"> 
            <h1 style={{width:50, height:50,paddingLeft:50, fontSize:25, fontWeight:800, color:'rgb(24, 24, 58)'}}>AlumniProfiles</h1>
            {Alumnidata.map((item, index)=>(
              <AlumniProfile Alumnidata={item}/>
            ))}
            </div>
          </div>
          <div id="fotter">                                 
          <div id="lefttext">
            <FaRegCopyright/> <p style={{position:'absolute', top:45, left:100}}>By muhammad.faizan0141@gmail.com</p>
          </div>
          <div id="righttext">
            Developed By Muhammad Faizan
          </div>
          </div>
        </div>
        
    </div>
    </>
    
  )
}

export default Home