import React , {useEffect, useState} from 'react';
import styled from 'styled-components';

const ProfileCont = styled.div`
    width:100%;
    margin-right:10px;
    min-width:300px;
    max-width:350px;
    height:100%;
    background: rgba(23, 23, 23, 0.35);
    backdrop-filter: blur(55px);
    border-radius: 51px;
    display:flex;
    flex-direction:column;
    padding:50px;
    align-items:center;
`;

const ProfileTitle = styled.div`
    h1{
        font-weight:normal;
    }
`;

const Avatar = styled.div`
    width: 220px;
    height: 220px;
    background-color:white;
    border-radius:200px;
    background-image:url(/me.png);
    background-size:cover;
    background-position:center;
    box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.25);
    
`;

const ContentCont = styled.div`
    height:200px;
    width:100%;
    display:flex;
    margin:10px;

`;

const TitleCont = styled.div` 
        display:flex;
        flex-direction:column;
        width:25%;
        height:100%;
        justify-content:space-between;
        font-size:18px;

`;

const GraphCont = styled.div`
    display:flex;
    flex-direction:column;
    width:70%;
    height:100%;
    justify-content:space-between;
    
`

const GraphBox = styled.div`
    height:10%;
    width:${props=>props.width ? props.width : "0px"};
    background-color:#6AD2FF;
    margin-left:20px;
    
`


const ProfileCard = ({text}) =>{
    

    return (
        <ProfileCont>
            <Avatar></Avatar>
            <ProfileTitle><h1>Competencies</h1></ProfileTitle>
            <ContentCont>
                <TitleCont>
                <label>REACT</label>
                <label>Javascript</label>
                <label>HTML</label>
                <label>CSS</label>
                </TitleCont>
                 <GraphCont>
                    <GraphBox width="100%"></GraphBox>
                    <GraphBox width="90%"></GraphBox>
                    <GraphBox width="90%"></GraphBox>
                    <GraphBox width="70%"></GraphBox>
                </GraphCont>
            </ContentCont>
        </ProfileCont>
    );
}

ProfileCard.defaultProps = {

}

export default ProfileCard;