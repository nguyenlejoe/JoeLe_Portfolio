import React from 'react';
import '../../App.scss';
import Header from '../../comps/Header';
import Profile from '../../comps/ProfileCard';
import Menu from '../../comps/HamburgerMenu';
import Logo from '../../comps/Logo';
import {motion} from "framer-motion";

export default function ResumePage(){
    
    
    const variants = {
        hidden:{
            opacity:0,
            y: '60vh'
        },
        visible:{
            opacity:1,
            y: '-3vh',
            duration:1,
            transition: {
                type:"spring",
                stiffness:90,
                mass:0.8,
                damping:20,
            }
        },
    }


    return (
        <div className="Resume">
            <div className="HeaderCont">
                <div className="NavBar"><Header ResumeActive={true}></Header></div>
                <div className="Menu">
                    <div className="Logo"><Logo/></div>
                    <Menu HomeActive={true}></Menu>
                </div> 
            </div>
            <div className="Content">
               <motion.div 
                variants={variants}
                initial="hidden"
                animate="visible"
               className="ResumeCont"></motion.div>
               <a href="https://joetanle.com/Portfolio/JoeLe_Resume.pdf" target="_blank"><div className="button">PDF Version</div></a>
            </div>
        </div>
    );
}