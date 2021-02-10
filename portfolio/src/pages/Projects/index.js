import React from 'react';
import '../../App.scss';
import Header from '../../comps/Header';
import ProjectCard from '../../comps/ProjectCard';
import Menu from '../../comps/HamburgerMenu';
import Logo from '../../comps/Logo';
import {motion} from "framer-motion";

export default function ProjectsPage(){
    const variants = {
        hidden:{opacity:0},
        visible:{opacity:1}
    }

    return (
        <div className="Project">
            <div className="HeaderCont">
            <div className="NavBar"><Header ProjectsActive={true}></Header></div>
                <div className="Menu">
                    <div className="Logo"><Logo/></div>
                    <Menu ProjectsActive={true}></Menu>
                </div> 
            </div>
            <div className="Content">
                    <ProjectCard 
                        title="MAJI"
                        subhead="Water Usage Application"
                        bgimg="./MAJI.png"
                        delayAni="0.2"
                        desc="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley type specimen book. It has survived not only five centuries, but also the le hing software like Aldus PageMaker including versions of Lorem Ipsum. "
                    />
                <ProjectCard 
                    title="HomeChef"
                    subhead="Food Marketplace Platform"
                    bgimg="./homechef.png"
                    delayAni="0.4"
                    desc="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley type specimen book. It has survived not only five centuries, but also the le hing software like Aldus PageMaker including versions of Lorem Ipsum. "
                />
                <ProjectCard 
                    title="Not So Sherlock"
                    subhead="Kids Interactive Game"
                    bgimg="./Sherlock.png"
                    delayAni="0.6"
                    desc="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley type specimen book. It has survived not only five centuries, but also the le hing software like Aldus PageMaker including versions of Lorem Ipsum. "
                    
                />
            </div>
        </div>
    );
}