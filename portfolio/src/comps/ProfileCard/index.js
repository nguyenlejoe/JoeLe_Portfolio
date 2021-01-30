import React from 'react';
import styled from 'styled-components';

const ProfileCont = styled.div`
    width: 912px;
    height: 300px;
    background: #252525;
    box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.25);
    border-radius: 51px;
    display:flex;
    padding:50px;
    align-items:center;
`;

const Avatar = styled.div`
    width: 261px;
    height: 261px;
    background-color:white;
    border-radius:200px;
    background-image:url(/me.png);
    background-size:cover;
    margin-left:50px;
    
`;

const ContentCont = styled.div`
    width:60%;
    height:80%;
    margin-left:100px;
`;

const TitleCont = styled.div`
    margin-top:-25px;    
    h2{
        font-weight:normal;
        margin-top:-20px;
    }
    h1{
        font-weight:normal;
    }
    hr{
        width:100%;
        border-color:#6AD2FF;
    }
`;

const BioCont = styled.p`
    
`;

const ProfileCard = ({text}) =>{
    return (
        <ProfileCont>
            <Avatar></Avatar>
            <ContentCont>
                <TitleCont>
                    <h1>Tan (Joe) Le</h1>
                    <h2>Front-End Web Developer</h2>
                    <hr></hr>
                    <BioCont>
                    A BCIT student striving to join the ever growing technology industry with an active passion for computing and web/app development. Strong problem-solving and leadership skills from participating in multiple team projects. Hard working and is always willing to learn more.                    </BioCont>
                </TitleCont>
                
            </ContentCont>
        </ProfileCont>
    );
}

ProfileCard.defaultProps = {

}

export default ProfileCard;