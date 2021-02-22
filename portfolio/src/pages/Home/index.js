import React from 'react';
import '../../App.scss';
import Header from '../../comps/Header';
import Profile from '../../comps/ProfileCard';
import Menu from '../../comps/HamburgerMenu';
import Logo from '../../comps/Logo';
import {motion} from "framer-motion";

export default function HomePage(){
    
    const variants = {
        hidden:{
            opacity:0,
            x: '-20vw'
        },
        visible:{
            opacity:1,
            x: '0vw',
            transition: {
                type:"spring",
                stiffness:50,
                ease:"easeIn"
            }
        },
    }

    const variantsRight = {
        hidden:{
            opacity:0,
            x: '20vw'
        },
        visible:{
            opacity:1,
            x: '0vw',
            transition: {
                type:"spring",
                stiffness:50,
            }
        },
    }

    return (
        <div className="Home">
            <div className="HeaderCont">
                <div className="NavBar"><Header HomeActive={true}></Header></div>
                <div className="Menu">
                    <div className="Logo"><Logo/></div>
                    <Menu HomeActive={true}></Menu>
                </div> 
            </div>
            <div className="Content">
               
                    <motion.div className="Title"
                        variants={variants}
                        initial="hidden"
                        animate="visible"
                    >
                        <div className="Name">Joe Le</div>
                        <div className="Position">Front-End Web Developer</div>
                        <div className="Bio"><p>An aspiring Front-End developer striving to join the ever going technology industry with an active passion for web/app development. Strong problem-solving and leadership skills from participating in multiple team projects. Hard working and is always willing to learn more.</p></div>
                        <div className="SocialLinks">
                            <a href="https://github.com/nguyenlejoe" className="git"></a>
                            <a href="https://www.linkedin.com/in/joe-tan-le/" className="linkedin"></a>
                        </div>
                    </motion.div>

                <motion.div className="Competencies"
                    variants={variantsRight}
                    initial="hidden"
                    animate="visible"
                >
                    <Profile></Profile>
                </motion.div>
            </div>
        </div>
    );
}