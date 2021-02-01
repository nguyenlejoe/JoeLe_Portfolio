import React from 'react';
import '../../App.scss';
import Header from '../../comps/Header';
import Profile from '../../comps/ProfileCard';
import Menu from '../../comps/HamburgerMenu';
import Logo from '../../comps/Logo';

export default function HomePage(){
    return (
        <div className="Home">
            <div className="HeaderCont">
                <div className="NavBar"><Header HomeActive={true}></Header></div>
                <div className="Menu">
                    <div className="Logo"><Logo/></div>
                    <Menu></Menu>
                </div> 
            </div>
            <div className="Content">
                <div className="Title">
                    <div className="Name">Joe Le</div>
                    <div className="Position">Front-End Web Developer</div>
                    <div className="Bio"><p>An aspiring Front-End developer striving to join the ever going technology industry with an active passion for web/app development. Strong problem-solving and leadership skills from participating in multiple team projects. Hard working and is always willing to learn more.</p></div>
                </div>
                <div className="Competencies">
                    <Profile></Profile>
                </div>
            </div>
        </div>
    );
}