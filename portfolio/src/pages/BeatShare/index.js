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

export default function BeatShare(){
    const variants = {
        hidden:{opacity:0},
        visible:{opacity:1}
    }

    return (
        <div className="BeatShare-Project">
            <div className="HeaderCont">
            <div className="NavBar"><Header ProjectsActive={true}></Header></div>
                <div className="Menu">
                    <div className="Logo"><Logo/></div>
                    <Menu ProjectsActive={true}></Menu>
                </div> 
            </div>
            <div className="Content">

            <div className="Header">
                <h1>BeatShare</h1>
                <hr></hr>
                <h3>Social Media Clone</h3>
            </div>

              <div className="ProjectDesc">
                  <ProjectDesc 
                  bgimg="./beat1.png"
                  text="BeatShare is catered towards music lovers, they can share music and express their thoughts on them. Many users who listen to music are using various apps like Spotify, Apple music, and Soundcloud. These are great apps to listen to music and share their playlists. This feature cannot be shared if one user is on another app, so we thought it would be a great idea to have one platform where all users can share their love for different kinds of music. Our app’s design will be a sleek, modern, and colorful interface. We will incorporate a dark styling like spotify with a taste of color throughout. Component styling will be a nice mix of neomorphism to be simplistic yet beautiful. "
                  icon1="./react.png"
                  icon2="./node.png"
                  icon3="./sass.png"
                  />
              </div>
              <div className="MyRole">
                <ProjectCont
                    title1="My Role"
                    title2="The Development Process"
                    text1="My role for BeatShare was the Full-Stack developer. I was in charge of creating the database and schema for it using mySQL. I was also responsible for delegating tasks to the other developers on my team, these tasks include, creating components in react, styling them and pages with SaSS and Styled-Components. After creating endpoints using express and node js, I connected the back-end to the front-end. Since we had a 1 month deadline, I had to carefully delegate tasks to my team to ensure that we could implement most of the functionality from our mockups."
                    text2="Our application was made to be a social media clone and had many features to it. Users are capable of accessing many of the features we have created such as,  have profiles where they can post their taste of music in the news feed and choose if they recommend it or not, like and comment, view their profiles and others, view how many total likes they have, an option to display their favourite artist(s)/band(s) and favourite songs. Since we had a 1 month deadline, I had to carefully delegate tasks to my team to ensure that we could implement most of the functionality from our mockups. I started with creating a database using mySQL and components for the front-end. After static pages and components were built, I created end points in the backend using node js and express for the main functionalities of our app. Connecting the back-end to the front-end was the last step to this process."
                    bgimg1="./beat3.png"
                    bgimg2="./beat2.png"
                    link1="./githubwhite.png"
                    link2="./heroku.png"
                    visit="BeatShare"
                    href1="https://github.com/nguyenlejoe/BeatShare"
                    href2="https://beatshareapp.herokuapp.com/"
                />
              </div>  

             
            </div>

        </div>                   
    );
}