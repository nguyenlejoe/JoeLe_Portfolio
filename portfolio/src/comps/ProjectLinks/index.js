import React from 'react';
import styled from 'styled-components';

const LinkCont = styled.div`
    display:flex;
    align-items:center;
    justify-content:center;
    width:100%
    height:100%;
    background-color:#504D4D;
`;

const LinkBox = styled.div`
    width:20%;
    height:20%;             
    background-color:blue;
`;

const ProjectLinks = () => {
    return (
        <LinkCont>     
        testr        
            <LinkBox>test</LinkBox>
            <LinkBox>test</LinkBox>
        </LinkCont>
    );
}

export default ProjectLinks;