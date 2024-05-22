import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom'
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

function Home() {
  const navigate = useNavigate();

  const [fypCurrentIndex, setFypCurrentIndex] = useState(0);
  const [achievementsCurrentIndex, setAchievementsCurrentIndex] = useState(0);
  const [profileCurrentIndex, setprofileCurrentIndex] = useState(0);
  const itemsPerPage = 3;
//For FYP
  const handleNext = () => {
    if (fypCurrentIndex + 3 < Fypdata.length) {
      setFypCurrentIndex(fypCurrentIndex + 3);
    }
  };

  const handlePrev = () => {
    if (fypCurrentIndex - 3 >= 0) {
      setFypCurrentIndex(fypCurrentIndex - 3);
    }
  };
//FOR ACHIEVEMENTS
  const handleNextpage = () => {
    if (achievementsCurrentIndex < Achievementsdata.length - itemsPerPage) {
      setAchievementsCurrentIndex(achievementsCurrentIndex + itemsPerPage);
    }
  };

  const handlePrevpage = () => {
    if (achievementsCurrentIndex > 0) {
      setAchievementsCurrentIndex(achievementsCurrentIndex - itemsPerPage);
    }
  };
//FOR ALUMNIPROFILES

const handleNextprofile = () => {
  if (profileCurrentIndex + 3 < Fypdata.length) {
    setprofileCurrentIndex(profileCurrentIndex + 3);
  }
};

const handlePrevprofile = () => {
  if (profileCurrentIndex - 3 >= 0) {
    setprofileCurrentIndex(profileCurrentIndex - 3);
  }
};



  // FYP Card Data Object
  const [FYP, setFYP] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const result = await axios.get("http://localhost:3000/FYP/");
                setFYP(result.data);
            } catch (error) {
                console.log(error);
            }
        };

        fetchData();
    }, []);

// ACHIEVEMENT CARD OBJECT
const [Achievement, setAchievement] = useState([]);

useEffect(() => {
    const fetchData = async () => {
        try {
            const result = await axios.get("http://localhost:3000/FYP/doneachievement");
            setAchievement(result.data);
        } catch (error) {
            console.log(error);
        }
    };
    fetchData();
}, []);

// NEWS OR JOB POST OBJECT

  const Newsjobs = [
    {
      title: "Web Developer",
      startDate: "2024-04-30",
      endDate: "2024-05-15",
      description: "An experienced web developer with experience of web 3 required.",
      icon: "path/to/icon.png"
    },
    {
      title: "Analytical Chemist",
      startDate: "2024-04-30",
      endDate: "2024-05-22",
      description: "An expert analytical chemist with practical experience required.",
      icon: "path/to/icon2.png"
    },
    {
      title: "Data Scientist",
      startDate: "2024-05-01",
      endDate: "2024-05-30",
      description: "A skilled data scientist is needed for an AI project.",
      icon: "path/to/icon3.png"
    },
    {
      title: "Project Manager",
      startDate: "2024-05-05",
      endDate: "2024-06-05",
      description: "An experienced project manager is required for overseeing web development projects.",
      icon: "path/to/icon4.png"
    }
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
      FirstName: 'Fariha',
      LastName: 'Faizan',
      email: 'fariha.faizan@example.com',
      role: 'Software Engineer',
      dob: '1990-01-01',
      city: 'Lahore',
      postalCode: '54000',
      department: 'Engineering',
    },
    {
      img: 'Std1.jpg',
      FirstName: 'Maham',
      LastName: 'Khan',
      email: 'maham.khan@example.com',
      role: 'Data Analyst',
      dob: '1992-03-15',
      city: 'Karachi',
      postalCode: '74000',
      department: 'Data Science',
    },
    {
      img: 'Std1.jpg',
      FirstName: 'Qudsia',
      LastName: 'Ali',
      email: 'qudsia.ali@example.com',
      role: 'Project Manager',
      dob: '1988-07-22',
      city: 'Islamabad',
      postalCode: '44000',
      department: 'Management',
    },
    {
      img: 'Std1.jpg',
      FirstName: 'Ali',
      LastName: 'Ali',
      email: 'Ali.ali@example.com',
      role: 'Project Manager',
      dob: '1999-07-22',
      city: 'Islamabad',
      postalCode: '44000',
      department: 'Management',
    }
  ];

  const handleType = (char) => {
    console.log(`Typing character ${char}`);
  };

  const handleDone = () => {
    console.log('Typing animation done after 5 loops!');
  };

  const handleViewMore = () => {
    navigate('/news');
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
        <div id='underhero'>
          <div id='Uherotop'>
            <h1 className="hero-title">RecentFYP</h1>
            <div className="carousel-container">
              <button className="nav-button" onClick={handlePrev}>&lt;</button>
              <div className="carousel-content">
                {FYP.slice(fypCurrentIndex, fypCurrentIndex + 3).map((item, index) => (
                  <FYPCard key={index} FYP={item} />
                ))}
              </div>
              <button className="nav-button" onClick={handleNext}>&gt;</button>
            </div>
          </div>
          <div id='Uherobottom'>
            <h1 className="hero-title">Recent Achievements</h1>
            <div className="carousel-container">
              <button className="nav-button" onClick={handlePrevpage}>&lt;</button>
              <div className="carousel-content">
                {Achievement.slice(achievementsCurrentIndex, achievementsCurrentIndex + itemsPerPage).map((item, index) => (
                  <AchievementsCard key={index} Achievement={item} />
                ))}
              </div>
              <button className="nav-button" onClick={handleNextpage}>&gt;</button>
            </div>
          </div>
        </div>
        <div id='lastsection'>
        <div id='sectiontop'>
        <h1
              style={{
                width: 400,
                height: 50,
                paddingLeft: 50,
                fontSize: 25,
                fontWeight: 800,
                color: 'rgb(24, 24, 58)',
              }}
            >
            Jobs OR News Post
            </h1>
          {Newsjobs.slice(0, 3).map((newsJob, index) => (
            <News key={index} Newsjobs={newsJob} />
          ))}
          {Newsjobs.length > 3 && (
            <button className="view-more-button" onClick={handleViewMore}>
              View More
            </button>
          )}
          </div>
          <div id="sectionbottom">
    <h1 style={{
        width: 50,
        height: 50,
        paddingLeft: 50,
        fontSize: 25,
        fontWeight: 800,
        color: 'rgb(24, 24, 58)',
    }}>
        Alumni Profiles
    </h1>
    <div className="carousel-container">
        <button className="nav-button" onClick={handlePrevprofile}>&lt;</button>
        <div className="carousel-content">
            {Alumnidata.slice(profileCurrentIndex, profileCurrentIndex + 3).map((item, index) => (
                <AlumniProfile key={index} Alumnidata={item} />
            ))}
        </div>
        <button className="nav-button" onClick={handleNextprofile}>&gt;</button>
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
    </div>
  );
}

export default Home;
