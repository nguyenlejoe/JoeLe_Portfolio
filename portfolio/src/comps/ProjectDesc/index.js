import React from 'react';
import styled from 'styled-components';

const ProjectCont = styled.div`
    width:100%;
    height:100%;
    max-height:100%;
    min-height:400px;
    background: rgba(23, 23, 23, 0.35);
    backdrop-filter: blur(55px);
    display:flex;
    flex-wrap:wrap;
    align-items:center; 
`;
  
const ProjectImg = styled.div`
    width:100%;
    height:100%;
    max-height:500px;
    min-height:300px;
    max-width:600px;
    min-width:200px;
    background-size:contain;
    background-position:center;
    background-repeat:no-repeat; 
    background-image:url(/${props=>props.bgimg ? props.bgimg : "none"});
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
`
const ProjectText = styled.div`
    width:100%;
    height:80%;
    max-width:50%;
    min-width:250px;
    max-height:900px;
    min-height:400px;
`;

const ProjectTools = styled.div`
    width:100%;
    height:70%;
    display:flex;                     
    align-items:center;

`

const ProjectIcons = styled.div`
    width:50%;
    height:50%;
    background-size:contain;
    background-position:center;
    background-repeat:no-repeat;
    background-image:url(/${props=>props.bgimg ? props.bgimg : "none"});
`;

const ProjectDesc = ({bgimg, text, icon1, icon2, icon3}) =>  { 
    return (
        <ProjectCont> 
            <ProjectImg bgimg={bgimg}></ProjectImg>
            <ProjectText>
                {text}
                <ProjectTools>
                    <ProjectIcons bgimg={icon1}/>
                    <ProjectIcons bgimg={icon2}/>
                    <ProjectIcons bgimg={icon3}/>
                </ProjectTools>
            </ProjectText>
        </ProjectCont>
    );
}

export default ProjectDesc;