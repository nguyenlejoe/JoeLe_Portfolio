import React from 'react';
import '../../App.scss';
import Header from '../../comps/Header';
import ProjectCard from '../../comps/ProjectCard';
import Menu from '../../comps/HamburgerMenu';
import Logo from '../../comps/Logo';
import {motion} from "framer-motion";
import {useHistory} from "react-router-dom";

export default function ProjectsPage(){
    const variants = {
        hidden:{opacity:0},
        visible:{opacity:1}
    }

    const history = useHistory();

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
                        title="BeatShare"
                        subhead="Social Media Clone"
                        bgimg="./beat1.png"
                        delayAni="0.2"
                        onClick={()=>{
                            history.push("/BeatShare")
                        }}
                        desc="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley type specimen book. It has survived not only five centuries, but also the le hing software like Aldus PageMaker including versions of Lorem Ipsum. "
                    />
                <ProjectCard 
                    title="HomeChef"
                    subhead="Food Marketplace Platform"
                    bgimg="./homechef.png"
                    delayAni="0.4"
                    onClick={()=>{
                        history.push("/HomeChef")
                    }}
                    desc="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley type specimen book. It has survived not only five centuries, but also the le hing software like Aldus PageMaker including versions of Lorem Ipsum. "
                />
                <ProjectCard 
                    title="Inclusio"
                    subhead="Team Managment Application"
                    bgimg="./inclusio.png"
                    delayAni="0.6"
                    onClick={()=>{
                        history.push("/Inclusio")
                    }}
                    desc="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley type specimen book. It has survived not only five centuries, but also the le hing software like Aldus PageMaker including versions of Lorem Ipsum. "
                    
                />
            </div>
        </div>
    );
}