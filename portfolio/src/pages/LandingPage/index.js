import React from 'react';
import '../../App.scss';
import Button from '../../comps/Button';
import {Link} from 'react-router-dom';

export default function LandingPage(){
    return (
        <div className="Landing">
           <div className="Content">
                <div className="Name">Joe Le</div>
                <div className="Title">Front-End Web Developer</div>
                <Link style={{ textDecoration: 'none' , color:'white' }} to="/Home" >
                    <div className="Button"><Button/></div>
                </Link>
           </div> 
        </div>
    );
}