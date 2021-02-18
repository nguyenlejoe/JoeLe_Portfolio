import React from 'react';
import styled from 'styled-components';
import {motion} from "framer-motion";

const AnimationCont = styled(motion.div)`
    width:100%;
    height:100%;
    max-width: 360px;
    max-height:600px;
    margin:5%;
`

const ProjectCont = styled.div`
    width:100%;
    height:100%;
    max-width: 360px;
    max-height:600px;
    background: rgba(23, 23, 23, 0.35);
    backdrop-filter: blur(55px);
    // box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 51px;
    display:flex;
    flex-direction:column;
    align-items:center; 
    justify-content:center;
    margin:5%;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.85));

    &:hover{
 
    color:#6AD2FF;
    }
`

const ProjectImage = styled.div`
    width:70%;
    height:70%;
    background-size:contain;
    background-position:center;
    background-repeat:no-repeat; 
    background-image:url(/${props=>props.bgimg ? props.bgimg : "none"});
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    
`;

const ProjectTitle = styled.div`
    height:10%;
    display:flex;  
    align-items:center;
    justify-content:center;
    font-size:23px;
`;

const ProjectType = styled.div`
    height:2%;
    display:flex;  
    align-items:center;
    justify-content:center;
    font-size:16px;
`;



const ProjectCard = ({title, subhead, bgimg, desc, delayAni, onClick}) => {

    const variants = {
        hidden:{
            opacity:0,
            y: '-30vh'
        },
        visible:{
            opacity:1,
            y: '-3vh',
            duration:1,
            transition: {
                type:"spring",
                stiffness:90,
                mass:0.8,
                damping:9,
                delay:delayAni
            }
        },
    }

    return (
        <AnimationCont
            variants={variants}
            initial="hidden"
            animate="visible"
            whileHover={{
                scale:1.1,
                transition:{
                    duration:.2
                }
            }}
        >
        <ProjectCont onClick={onClick}>
            <ProjectImage bgimg={bgimg}></ProjectImage>
            <ProjectTitle>{title}</ProjectTitle>
            <ProjectType>{subhead}</ProjectType>
        </ProjectCont>
        </AnimationCont>
    );
}

ProjectCard.defaultProps = {
    title: "Project",
    subhead: "Project type",
    desc: "Lorem Ipsum"
}

export default ProjectCard;