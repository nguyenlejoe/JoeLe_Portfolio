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
    background-image:url(/me2.jpg);
    background-size:140%;
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
    width:100%;
    // width:${props=>props.width ? props.width : "0px"};
    background: rgba(0, 0, 0, 0.21);
    backdrop-filter: blur(4px);
    border-radius: 5px;
    margin-left:20px;

    
`

const GraphFill = styled.div`
    height:100%;
    width:${props=>props.width ? props.width : "0px"};
    transition: all 1s ease;
    background: rgba(106, 210, 255, 0.8);
    backdrop-filter: blur(4px);
    border-radius: 5px;
`




const ProfileCard = ({text}) =>{

    
    
    const [GraphReact, setReact] = useState("0%");
    const [GraphJavascript, setJavascript] = useState("0%");
    const [GraphHTML, setHTML] = useState("0%");
    const [GraphCSS, setCSS] = useState("0%");

    useEffect(()=>{
        setInterval(() => {
            setReact("100%");
            setJavascript("85%")
            setHTML("75%")
            setCSS("65%")
        }, 750);
    }, [])

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
                    <GraphBox>
                        <GraphFill width={GraphReact}></GraphFill>
                    </GraphBox>
                    <GraphBox>
                        <GraphFill width={GraphJavascript}></GraphFill>
                    </GraphBox>
                    <GraphBox>
                        <GraphFill width={GraphHTML}></GraphFill>
                    </GraphBox>
                    <GraphBox>
                        <GraphFill width={GraphCSS}></GraphFill>
                    </GraphBox>
                </GraphCont>
            </ContentCont>
        </ProfileCont>
    );
}

ProfileCard.defaultProps = {

}

export default ProfileCard;