import React from 'react';
import '../../App.scss';
import Header from '../../comps/Header';

export default function ContactPage(){
    return (
        <div className="Contact">
            <div className="HeaderCont">
                <Header ContactActive={true}></Header>
            </div>
            <div className="Content">

            </div>
        </div>
    );
}