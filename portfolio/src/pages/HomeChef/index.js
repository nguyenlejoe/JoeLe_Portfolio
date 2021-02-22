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

export default function HomeChef(){
    const variants = {
        hidden:{opacity:0},
        visible:{opacity:1}
    }

    return (
        <div className="HomeChef-Project">
            <div className="HeaderCont">
            <div className="NavBar"><Header ProjectsActive={true}></Header></div>
                <div className="Menu">
                    <div className="Logo"><Logo/></div>
                    <Menu ProjectsActive={true}></Menu>
                </div> 
            </div>
            <div className="Content">

            <div className="Header">
                <h1>HomeChef</h1>
                <hr></hr>
                <h3>Food Market Web App</h3>
            </div>

              <div className="ProjectDesc">
                  <ProjectDesc 
                  bgimg="./homechef.png"
                  text="
                  Home Chef is a home-made food marketplace for local exotic cuisine. We came up with the idea after seeing the numerous amounts of listings for homemade food on social media and other websites such as Facebook Marketplace, Craigslist, and even Instagram. 
                  Our objective is to create an environment that encourages home chefs to express and share their culture with others through food. By doing so, users have the opportunity to find food that they love, or explore and discover new cuisines from different backgrounds.
                  
                  We are also providing an opportunity to vendors who may not be in a financial state to open a restaurant and sell food or either have lost their restaurant/business. Chefs can also cook on their own schedule giving them the freedom to work stress-free and at their own pace.
                  
                  Our geographical community will be the Burnaby area since there is no app similar to this around the Lower Mainland and we saw that as a gap to fill. 
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
                    text1="My role during the HomeChef project was lead developer. I was assigned this role because of my previous experiences in programming and knowledge in back-end development. I assigned the team with tasks such as creating components and putting together the different pages based on the mock up designs. My responsibilities were to overview my team’s code and help them debug any issues. I also was in charge of communicating with our full-stack developer and connecting the front-end with the database. "
                    text2="After assisting the design team with creating the final mock-up for HomeChef, We split up the components that needed to be created amongst all members of the team. I assisted them with debugging and creating the pages. When all the static pages were done, I turned my focus to developing the main features which were, logging in/creating accounts, adding items to the cart, and filtering through different types of products. Since I have experience with back-end development, I was in charge of communicating with our full-stack and connecting the front-end with the database he had created."
                    bgimg1="./finalhom1.png"
                    bgimg2="./finalhome2.png"
                    link1="./githubwhite.png"
                    link2="./heroku.png"
                    visit="HomeChef"
                    href1="https://github.com/nguyenlejoe/HomeChef"
                    href2="https://home-chef-idsp.herokuapp.com/"
                />
              </div>  

             
            </div>

        </div>                   
    );
}