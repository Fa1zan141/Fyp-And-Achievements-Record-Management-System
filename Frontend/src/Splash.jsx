import React from 'react'
import './assets/Splash.css'
import {Link} from 'react-router-dom'
import { motion } from "framer-motion"
import { Typewriter } from 'react-simple-typewriter'
import {useNavigate} from 'react-router-dom'
function Splash() {

    const handleType = (char) => {
        console.log(`Typing character ${char}`);
      };
      const handleDone = () => {
        console.log(`Typing animation done after 5 loops!`);
      };

    const Navigate= useNavigate();
  return (
    <>
       <div>
        <nav>
            <div id="navl">
            <div id="logo"></div>
            </div>
            <div id="navr">
            <ul>
                    <li>
                    <Link to="/login">Home</Link>
                    </li>
                    <li>
                    <Link to="/login">FYP</Link>
                    </li>
                    <li>
                    <Link to="/login">Achievements</Link>
                    </li>
                    <li>
                    <Link to="/login">News & Jobs</Link>
                    </li>
                    <li>
                    <Link to="/login">Alumni</Link>
                    </li>
                </ul> 
                <motion.button animate={{x:[-100,0], move:1}} transition={{type:"tween", duration:4}}id="Sbtn" onClick={()=>{Navigate("/login")}}>Login</motion.button>
            </div>
        </nav>
        <div id="bottom">
            <div id="left">
                <p id="Sp">
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
                    Revolutionized the Fyp & Achievements Record And Give A <br />
                    Platform <br/>
                    To The Students To Showcase Their Records And <br />
                    Achievements!
                </p>
                <motion.div drag  dragConstraints={{ left: -250, right: 630, top: 10, bottom: 500 }}>
                    <button id="Sbtn2"onClick={()=>{Navigate("/login")}}>Login</button></motion.div>
                <div id="verticalline"></div>
            </div>
            <div id="right">
                <motion.div animate={{x:[100,-55,-55,100], move:1}}transition={{type:"tween", repeat:Infinity, duration:3}}id="Simg">
                </motion.div>
                <div id="circle"></div>
                <div id="rectangle"></div>
            </div>
        </div>
        </div>
    </>
  )
}

export default Splash