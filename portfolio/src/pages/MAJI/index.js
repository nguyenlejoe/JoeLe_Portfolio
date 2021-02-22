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

export default function Maji(){
    const variants = {
        hidden:{opacity:0},
        visible:{opacity:1}
    }

    return (
        <div className="Maji-Project">
            <div className="HeaderCont">
            <div className="NavBar"><Header ProjectsActive={true}></Header></div>
                <div className="Menu">
                    <div className="Logo"><Logo/></div>
                    <Menu ProjectsActive={true}></Menu>
                </div> 
            </div>
            <div className="Content">

            <div className="Header">
                <h1>Maji</h1>
                <hr></hr>
                <h3>Water Usage Web App</h3>
            </div>

              <div className="ProjectDesc">
                  <ProjectDesc 
                  bgimg="./MAJI.png"
                  text="Maji is similar to a carbon footprint application but instead, calculates water usage. Majority of society will use water everyday not knowing how much they use and how it affects the world around them. Since there is a water crisis in many parts of the world like in Uganda, our team thought it would be a good idea to create an application to spread awareness. This app will ask the user a series of questions and will calculate how much water in gallons they used. Depending on the number, the application will provide advice on how to use less water and how it will impact countries who have a water crisis."
                  icon1="./javascript1.png"
                  icon2="./css.png"
                  icon3="./html.png"
                  />
              </div>
              <div className="MyRole">
                <ProjectCont
                    title1="My Role"
                    title2="The Development Process"
                    text1="My role was project manager and lead developer for the Maji project. As the project manager, I was responsible for organizing daily meetings and delegating roles and tasks to each member. As for the lead developer role, I took on the main features of the application and helped the other group members with any problems that they had. Checking the overall code and debugging was also one of the main responsibilities I had."
                    text2="After creating the high fidelity mockup from our research and user testings, we began developing the application. I assigned tasks such as css styling and creating pages to my team members while I developed the app’s major feature. During the development phase, I had to think about all the possible answers the user could get depending on what answers they chose. My researcher gave me a tree of all possible results to how much water the users consumed and with that, I integrated it within the application."
                    bgimg1="./maji2.png"
                    bgimg2="./maji3.png"
                    link1="./githubwhite.png"
                    link2="./heroku.png"
                    visit="Maji"
                    href1="https://github.com/noahmah/MajiWater"
                    href2="https://majiwaterapp.herokuapp.com/"
                />
              </div>  

             
            </div>

        </div>                   
    );
}