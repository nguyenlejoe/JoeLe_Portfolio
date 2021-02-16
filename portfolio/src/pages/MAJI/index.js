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
                  bgimg="./Maji.png"
                  text="
                  Home Chef is a home-made food marketplace for local exotic cuisine. We came up with the idea after seeing the numerous amounts of listings for homemade food on social media and other websites such as Facebook Marketplace, Craigslist, and even Instagram. 
                  Our objective is to create an environment that encourages home chefs to express and share their culture with others through food. By doing so, users have the opportunity to find food that they love, or explore and discover new cuisines from different backgrounds.
                  
                  We are also providing an opportunity to vendors who may not be in a financial state to open a restaurant and sell food or either have lost their restaurant/business. Chefs can also cook on their own schedule giving them the freedom to work stress-free and at their own pace.
                  
                  Our geographical community will be the Burnaby area since there is no app similar to this around the Lower Mainland and we saw that as a gap to fill. 
                  "
                  />
              </div>
              <div className="MyRole">
                <ProjectCont
                    title1="My Role"
                    title2="The Development Process"
                    text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley type specimen book. It has survived not only five centuries, but also the le hing software like Aldus PageMaker including versions of Lorem Ipsum.
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley type specimen book. It has survived not only five centuries, but also the le hing software like Aldus PageMaker including versions of Lorem Ipsum.
                    "
                    bgimg1="./Maji2.png"
                    bgimg2="./Maji3.png"
                    link1="./github.png"
                    link2="./heroku.png"
                    visit="HomeChef"
                />
              </div>  

             
            </div>

        </div>                   
    );
}