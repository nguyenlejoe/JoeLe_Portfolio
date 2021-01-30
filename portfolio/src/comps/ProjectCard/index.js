import React from 'react';
import styled from 'styled-components';

const CardCont = styled.div`
    display:flex;
    width: 1012px;
    height: 391px;
    background: #252525;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 51px;
    margin-top: 15%;
`;

const Content = styled.div`
    width:60%;
    padding: 10px 10px 10px 0;
`;

const ProjectHeader = styled.div`
    h1{
        font-weight:normal;
    }
    h2{
        margin-top:-20px;
        font-weight:normal;
    }
    hr{
        margin-top:-10px;
        border-color:#6AD2FF;
    }
`;

const ProjectImg = styled.div`
    width:350px;
    height:500px;
    position:relative;
    bottom:100px;
    background-image:url(/${props=>props.bgimg ? props.bgimg : "none"});
    background-size:contain;
   
`
const ProjectDesc = styled.div` 
    margin-top:30px;
`

const ProjectButton = styled.button`
    display:flex;
    position:relative;
    bottom:-4c0px;
    right:-300px;
    justify-content:center;
    align-items:center;
    width: 305px;
    height: 81px;
    border: 3px solid #24BDFF;
    box-sizing: border-box;
    border-radius: 27px;
    background-color:transparent;
    color:white;
    font-size:20px;
    font-weight:normal;
`;

const ProjectCard = ({title, subhead, bgimg, desc}) => {
    return (
        <CardCont>
            <ProjectImg bgimg={bgimg}></ProjectImg>
            <Content>
                <ProjectHeader>
                    <h1>{title}</h1>
                    <h2>{subhead}</h2>
                    <hr></hr>
                </ProjectHeader>
                <ProjectDesc><p>{desc}</p></ProjectDesc> 
                <ProjectButton>Learn More</ProjectButton>
            </Content>
        </CardCont>
    );
}

ProjectCard.defaultProps = {
    title: "Project",
    subhead: "Project type",
    desc: "Lorem Ipsum"
}

export default ProjectCard;