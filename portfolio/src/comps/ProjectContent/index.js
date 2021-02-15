import React from 'react';
import styled from 'styled-components';

const ContentCont = styled.div`
    display:flex;
    flex-direction:column;
    width:100%;
    height:100%;
    margin-top: 5%;
   
`

const ContentText = styled.div`
    width:50%;
    height:100%;
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
    width:25%;
    height:500px;
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
`;




const ProjectCont = ({bgimg1,bgimg2, text, title1, title2}) =>  { 
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
        </ContentCont>   
    );
}

export default ProjectCont;