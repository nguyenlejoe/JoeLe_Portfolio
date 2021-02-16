import React from 'react';
import styled from 'styled-components';
import ProjectLinks from '../../comps/ProjectLinks';

const ContentCont = styled.div`
    display:flex;
    flex-direction:column;
    width:100%;
    height:100%;
    margin-top: 5%;
   
`

const ContentText = styled.div`
    width:100%;
    height:80%;
    max-width:50%;
    min-width:250px;
    max-height:900px;
    min-height:400px;
    display:flex;
    justify-content:center;
    flex-direction:column;

`

const ContentTitle = styled.div`
    h3{
        font-size:30px;
        font-weight:normal;
    }
`

const ContentImg = styled.div`
    width:55%;
    height:500px;
    max-height:500px;
    min-height:400px;
    max-width:600px;
    min-width:200px;
    background-size:contain;
    background-position:center;
    background-repeat:no-repeat; 
    background-image:url(/${props=>props.bgimg ? props.bgimg : "none"});
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
`

const ContentBox = styled.div`
    display:flex;
    height:100%;
    justify-content:center;
    align-items:center;
    margin-top:${props=>props.margin ? props.margin : ""};
    background-color:${props=>props.bgcolor ? props.bgcolor : ""};
    flex-wrap:wrap-reverse;
`;

const LinkCont = styled.div`
    display:flex;
    height:100%;
    width:100%;
    justify-content:center;
    align-items:center;
    margin-top:${props=>props.margin ? props.margin : ""};
    background-color:${props=>props.bgcolor ? props.bgcolor : ""};
`;

const ContentLinks = styled.div`
    width:200px;
    height:200px;
    background-size:contain;
    background-position:center;
    background-repeat:no-repeat; 
    background-image:url(/${props=>props.bgimg ? props.bgimg : "none"});
    margin: 2%;
`





const ProjectCont = ({bgimg1,bgimg2, text, title1, title2, link1, link2, visit}) =>  { 
    return (
        <ContentCont> 

            <ContentBox>
                <ContentText>
                <ContentTitle><h3>{title1}</h3></ContentTitle>
                    {text}
                </ContentText>
                <ContentImg bgimg={bgimg1}></ContentImg>
            </ContentBox>

            <ContentBox margin="10%">
                <ContentImg bgimg={bgimg2}></ContentImg>
                <ContentText>
                <ContentTitle><h3>{title2}</h3></ContentTitle>
                    {text}
                </ContentText>
            </ContentBox>

            <LinkCont margin="10%" bgcolor="#252525">
                <ContentText>
                    <ContentTitle><h3>Take a closer look at {visit}  </h3></ContentTitle>
                </ContentText>
               <ContentLinks bgimg={link1}></ContentLinks>
               <ContentLinks bgimg={link2}></ContentLinks>
            </LinkCont>
              
        </ContentCont>   
    );
}

export default ProjectCont;