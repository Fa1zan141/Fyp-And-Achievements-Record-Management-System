import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './assets/Home.css';
import { Typewriter } from 'react-simple-typewriter';
import { motion } from 'framer-motion';
import FYPCard from '../Components/FYPCard';
import AchievementsCard from '../Components/AchievementsCard';
import News from '../Components/News';
import AlumniProfile from '../Components/AlumniProfile';
import { FaRegCopyright } from 'react-icons/fa6';
import Navbar from '../Components/Navbar';
import axios from 'axios';
import AOS from 'aos';
import 'aos/dist/aos.css'


function Home() {
  const navigate = useNavigate();

  const [fypCurrentIndex, setFypCurrentIndex] = useState(0);
  const [achievementsCurrentIndex, setAchievementsCurrentIndex] = useState(0);
  const [profileCurrentIndex, setProfileCurrentIndex] = useState(0);
  const itemsPerPage = 3;

  // Handle navigation for FYP
  const handleNext = () => {
    if (fypCurrentIndex + 3 < FYP.length) {
      setFypCurrentIndex(fypCurrentIndex + 3);
    }
  };

  const handlePrev = () => {
    if (fypCurrentIndex - 3 >= 0) {
      setFypCurrentIndex(fypCurrentIndex - 3);
    }
  };

  // Handle navigation for Achievements
  const handleNextPage = () => {
    if (achievementsCurrentIndex < Achievement.length - itemsPerPage) {
      setAchievementsCurrentIndex(achievementsCurrentIndex + itemsPerPage);
    }
  };

  const handlePrevPage = () => {
    if (achievementsCurrentIndex > 0) {
      setAchievementsCurrentIndex(achievementsCurrentIndex - itemsPerPage);
    }
  };

  // Handle navigation for Alumni Profiles
  const handleNextProfile = () => {
    if (profileCurrentIndex + 3 < Alumnidata.length) {
      setProfileCurrentIndex(profileCurrentIndex + 3);
    }
  };

  const handlePrevProfile = () => {
    if (profileCurrentIndex - 3 >= 0) {
      setProfileCurrentIndex(profileCurrentIndex - 3);
    }
  };

  // Fetch FYP data
  const [FYP, setFYP] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await axios.get('http://localhost:3000/FYP/');
        setFYP(result.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  // Fetch Achievement data
  const [Achievement, setAchievement] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await axios.get('http://localhost:3000/FYP/doneachievement');
        setAchievement(result.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  // Fetch News or job post data
  const [newsData, setNewsData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await axios.get("http://localhost:3000/FYP/newspostrecord");
        setNewsData(result.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);
//Alumni Profiles
  const [alumniData, setAlumniData] = useState([]);

    useEffect(() => {
        // Fetch all profiles from the server when the component mounts
        const fetchProfiles = async () => {
            try {
                const response = await axios.get('http://localhost:3000/FYP/profiles'); 
                setAlumniData(response.data.data);
            } catch (error) {
                console.error('Error fetching profiles:', error);
            }
        };

        fetchProfiles();
    }, []);

  // Handle typewriter events
  const handleType = (char) => {
    console.log(`Typing character ${char}`);
  };

  const handleDone = () => {
    console.log('Typing animation done after 5 loops!');
  };

  const handleViewMore = () => {
    navigate('/news');
  };
//Animations Using Aos

useEffect(() =>
  {
    AOS.init({
      offset: 200,
      duration: 1000,
      easing: 'ease-in-out',
      delay: 50,
    })

  },[]);

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
              onType={handleType}
            />
            <span>New Era!</span> <br />
            <h2 id='hometag'>To Store Record </h2> <br />
            Revolutionized the Fyp & Achievements Record of Software Engineering Department And Give A Platform
            To The Students To Showcase Their Records And Achievements!
            Also Collaborate With Their Alumni To Seek Guidance According To
            Their Interest
          </p>
        </div>
        <div id='HeroR'>
          <motion.div
            animate={{ x: [-130, 0, 0, -130], move: 1 }}
            transition={{ type: 'tween', repeat: Infinity, duration: 3 }}
            id='HeroRimg'
          ></motion.div>
        </div>
        
          <div id='Uherotop' >
            <h1 className="hero-title">FYP</h1>
            <hr className="new1"/>
            <div className="carousel-container">
              <button className="nav-button" onClick={handlePrev}>&lt;</button>
              <div className="carousel-content" data-aos="flip-down">
                {FYP.slice(fypCurrentIndex, fypCurrentIndex + 3).map((item, index) => (
                  <FYPCard key={index} FYP={item} />
                ))}
              </div>
              <button className="nav-button" onClick={handleNext}>&gt;</button>
            </div>
          </div>
          
          <div id='Uherobottom' >
          <h1 className="hero-title">Achievements</h1>
          <hr className="new2"/>
            <div className="carousel-container">
              
              <button className="nav-button" onClick={handlePrevPage}>&lt;</button>
              <div className="carousel-content" data-aos="zoom-in">
                {Achievement.slice(achievementsCurrentIndex, achievementsCurrentIndex + itemsPerPage).map((item, index) => (
                  <AchievementsCard key={index} Achievement={item} />
                ))}
              </div>
              <button className="nav-button" onClick={handleNextPage}>&gt;</button>
            </div>
          </div>
        </div>
        <div id='lastsection'>
          <div id='sectiontop' >
          <h1 className="hero-titlejob">Jobs OR News Post</h1>
          <hr className="new3"/>
          <div data-aos="fade-left" >
          {newsData.slice(0, 3).map((newsJob, index) => (
              <News key={index} newsData={newsJob} />
            ))}
          </div>
            {newsData.length > 3 && (
              <button className="view-more-button" onClick={handleViewMore}>
                View More
              </button>
            )}
          </div>
          <div id="sectionbottom" >
          <h1 className="hero-titleprofile">Profiles</h1>
          <hr className="new4"/>
            <div className="carousel-container">
              <button className="nav-button" onClick={handlePrevProfile}>&lt;</button>
              <div className="carousel-content" data-aos="fade-up">
                {alumniData.slice(profileCurrentIndex, profileCurrentIndex + 3).map((item, index) => (
                  <AlumniProfile key={index} alumniData={item} />
                ))}
              </div>
              <button className="nav-button" onClick={handleNextProfile}>&gt;</button>
            </div>
          </div>
        </div>
        <div id="footer">
          <div id="lefttext">
            <FaRegCopyright />
            <p>By muhammad.faizan0141@gmail.com</p>
          </div>
          <div id="righttext">Developed By Muhammad Faizan</div>
        </div>
      </div>
   
  );
}

export default Home;
