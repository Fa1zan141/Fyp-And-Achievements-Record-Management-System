import React, { useState } from 'react';
import './assets/Home.css';
import { Typewriter } from 'react-simple-typewriter';
import { motion } from 'framer-motion';
import FYPCard from '../Components/FYPCard';
import AchievementsCard from '../Components/AchievementsCard';
import News from '../Components/News';
import Supervisors from '../Components/Supervisors';
import AlumniProfile from '../Components/AlumniProfile';
import { FaRegCopyright } from 'react-icons/fa6';
import Navbar from '../Components/Navbar'; 

function Home() {

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    if (currentIndex + 3 < Fypdata.length) {
      setCurrentIndex(currentIndex + 3);
    }
  };

  const handlePrev = () => {
    if (currentIndex - 3 >= 0) {
      setCurrentIndex(currentIndex - 3);
    }
  };

  // FYP Card Data Object
  const Fypdata = [
    {
      title: 'Title',
      studentname: 'Student Name',
      supervisor: 'Supervisor',
    },
    {
      title: 'Title',
      studentname: 'Student Name',
      supervisor: 'Supervisor',
    },
    {
      title: 'Title',
      studentname: 'Student Name',
      supervisor: 'Supervisor',
    },
    {
      title: 'Title',
      studentname: 'Student Name',
      supervisor: 'Supervisor',
    },
  ];

  const Achievementsdata = [
    {
      img: 'Ach.png',
      video: '',
      description: 'Description Of The Achievements',
    },
    {
      img: 'Ach4.jpg',
      video: '',
      description: 'Description Of The Achievements',
    },
    {
      img: 'Ach2.jpg',
      video: '',
      description: 'Description Of The Achievements',
    },
  ];

  const Newsjobs = [
    {
      title: '1-News Of Scholorship',
    },
    {
      title: '2-Post Of Scholorship',
    },
    {
      title: '3-Student Of Scholorship',
    },
    {
      title: '4-Study at Scholorship',
    },
  ];

  const Teachersdata = [
    {
      img: 'Teacher2.jpg',
      Name: 'Adeel Shehzad',
    },
    {
      img: 'Teacher1.png',
      Name: 'Mam Reema',
    },
  ];

  const Alumnidata = [
    {
      img: 'Std1.jpg',
      Name: 'Fariha',
    },
    {
      img: 'Std 2.jpg',
      Name: 'Maham',
    },
    {
      img: 'Std 3.jpg',
      Name: 'Qudsia',
    },
  ];

  const handleType = (char) => {
    console.log(`Typing character ${char}`);
  };

  const handleDone = () => {
    console.log('Typing animation done after 5 loops!');
  };

  return (
    <div>
      <Navbar /> 
      <div id='Hero'>
        <div id='HeroL'>
          <p id='Homep'>
            <Typewriter
              words={['Department', 'SE', 'Code']}
              loop={Infinity}
              cursor
              cursorStyle='_'
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
              onLoopDone={handleDone}
              onType={(char) => handleType(char)}
            />
            <span>New Era!</span> <br />
            <h2 id='hometag'>To Store Record </h2> <br />
            Revolutionized the Fyp & Achievements Record of Software Engineering Depeartment And Give A Platform 
            To The Students To Showcase Their Records And Achievements! 
            Also Collaborate With Their Alumni To Seek Guidance According To
            Their Intrest
          </p>
        </div>
        <div id='HeroR'>
          <motion.div
            animate={{ x: [-130, 0, 0, -130], move: 1 }}
            transition={{ type: 'tween', repeat: Infinity, duration: 3 }}
            id='HeroRimg'
          ></motion.div>
        </div>
        <div id='underhero'>
          <div id='Uherotop'>
      <h1 className="hero-title">RecentFYP</h1>
      <div className="carousel-container">
        <button className="nav-button" onClick={handlePrev}>&lt;</button>
        <div className="carousel-content">
          {Fypdata.slice(currentIndex, currentIndex + 3).map((item, index) => (
            <FYPCard key={index} Fypdata={item} />
          ))}
        </div>
        <button className="nav-button" onClick={handleNext}>&gt;</button>
      </div>
    </div>
          <div id='Uherobottom'>
            <h1
              style={{
                width: 50,
                height: 50,
                paddingLeft: 50,
                fontSize: 25,
                fontWeight: 800,
                color: 'white',
              }}
            >
              RecentAchievements
            </h1>
            {Achievementsdata.map((item, index) => (
              <AchievementsCard Achievementsdata={item} />
            ))}
          </div>
          
        </div>
        <div id='lastsection'>
          <div className='vertical-line'></div>
          <div id='sectiontop'>
            <div id='topleft'>
              <h1
                style={{
                  width: 50,
                  height: 50,
                  paddingLeft: 50,
                  fontSize: 25,
                  fontWeight: 800,
                  color: 'white',
                }}
              >
                News&Jobs
              </h1>
              <div
                style={{
                  height: 250,
                  width: 500,
                  backgroundColor: 'rgb(37, 175, 37)',
                  borderRadius: 30,
                  marginLeft: 50,
                  margin: 50,
                  marginTop: 20,
                }}
              >
                {Newsjobs.map((item, index) => (
                  <News Newsjobs={item} />
                ))}
              </div>
            </div>
            <div id='topright'>
              <h1
                style={{
                  width: 50,
                  height: 50,
                  paddingLeft: 50,
                  fontSize: 25,
                  fontWeight: 800,
                  color: 'white',
                }}
              >
                Teachers/Supervisors
              </h1>
              <div id='Supervisor'>
                {Teachersdata.map((item, index) => (
                  <Supervisors Teachersdata={item} />
                ))}
              </div>
            </div>
          </div>
          <div id='sectionbottom'>
            <h1
              style={{
                width: 50,
                height: 50,
                paddingLeft: 50,
                fontSize: 25,
                fontWeight: 800,
                color: 'rgb(24, 24, 58)',
              }}
            >
              AlumniProfiles
            </h1>
            {Alumnidata.map((item, index) => (
              <AlumniProfile Alumnidata={item} />
            ))}
          </div>
        </div>
        <div id='fotter'>
          <div id='lefttext'>
            <FaRegCopyright />{' '}
            <p style={{ position: 'absolute', top: 45, left: 100 }}>
              By muhammad.faizan0141@gmail.com
            </p>
          </div>
          <div id='righttext'>Developed By Muhammad Faizan</div>
        </div>
      </div>
    </div>
  );
}

export default Home;
