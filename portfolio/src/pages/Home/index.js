import React from 'react';
import '../../App.scss';
import Header from '../../comps/Header';
import Profile from '../../comps/ProfileCard';

export default function HomePage(){
    return (
        <div className="Home">
            <div className="HeaderCont">
                <Header HomeActive={true}></Header>
            </div>
            <div className="Content">
                <div className="ProfileCard"><Profile/></div>
            </div>
        </div>
    );
}