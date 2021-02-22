import React from 'react';
import '../../App.scss';
import Header from '../../comps/Header';
import ProjectCard from '../../comps/ProjectCard';
import Menu from '../../comps/HamburgerMenu';
import Logo from '../../comps/Logo';
import {motion} from "framer-motion";
import ProjectDesc from '../../comps/ProjectDesc';
import ProjectCont from '../../comps/ProjectContent';
import ProjectLinks from '../../comps/ProjectLinks';

export default function Inclusio(){
    const variants = {
        hidden:{opacity:0},
        visible:{opacity:1}
    }

    return (
        <div className="Inclusio-Project">
            <div className="HeaderCont">
            <div className="NavBar"><Header ProjectsActive={true}></Header></div>
                <div className="Menu">
                    <div className="Logo"><Logo/></div>
                    <Menu ProjectsActive={true}></Menu>
                </div> 
            </div>
            <div className="Content">

            <div className="Header">
                <h1>Inclusio</h1>
                <hr></hr>
                <h3>Team Managment Web App</h3>
            </div>

              <div className="ProjectDesc">
                  <ProjectDesc 
                  bgimg="./inclusio.png"
                  text="
                  Inclusio is an application catered to help project managers keep track of their team and their availability. Our team researched and found that leading a team can be challenging because it can be overwhelming to manage everyone and their tasks. We thought of a solution and developed an application that could aid project managers and their team.  Inclusio’s features include adding members, deleting them and editing their status. The application can keep track of a members status on the task they are assigned to. Users can also easily check each member’s profile to see what they specialize in or what department they are from.
                  "
                  icon1="./react.png"
                  icon2="./javascript1.png"
                  icon3="./sass.png"
                  />
              </div>
              <div className="MyRole">
                <ProjectCont
                    title1="My Role"
                    title2="The Development Process"
                    text1="My role for Inclusio was lead developer. During the development phase I assigned certain tasks to each group member depending on their level of programming skills. As a team, we all contributed to creating the components but since I was the lead developer, I had to focus on creating the database. I was also in charge of helping the group members with debugging and connecting the front-end with the back-end."
                    text2="During the design phase, I created the database so that we could store users that were added onto the list. After creating the backend, I developed end points for each action that was needed for Inclusio’s features. The actions were, pulling all users from the database, creating new members, and editing them. I then assisted my team with connecting the front-end with the newly created back-end. Using axios and mapping, we pulled the data from the server and displayed them for the user on the application."
                    bgimg1="./inclusio2.png"
                    bgimg2="./inclusio3.png"
                    link1="./githubwhite.png"
                    visit="Inclusio"
                    href1="https://github.com/nguyenlejoe/Inclusio_DynamicContent"
                />
              </div>  

             
            </div>

        </div>                   
    );
}