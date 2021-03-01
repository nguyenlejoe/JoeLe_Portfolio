import React from 'react';
import '../../App.scss';
import Header from '../../comps/Header';
import Contact from '../../comps/ContactBox';
import Logo from '../../comps/Logo';
import Menu from '../../comps/HamburgerMenu';
import Button from '../../comps/Button';

export default function ContactPage(){
    return (
        <div className="Contact-Page">
            <div className="HeaderCont">
                <div className="NavBar"><Header ContactActive={true}></Header></div>
                    <div className="Menu">
                        <div className="Logo"><Logo/></div>
                        <Menu ContactActive={true}></Menu>
                    </div> 
                </div>
            <div className="Content">
                <Contact></Contact>
                            
            </div>
        </div>
    );
}