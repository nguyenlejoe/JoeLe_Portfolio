import React from 'react';
import styled, {css} from 'styled-components';
import Logo from '../Logo';
import {Link} from 'react-router-dom';

const HeaderCont = styled.div`
    height: 100%;
    width:100%;
    display:flex;
    justify-content:flex-end;
    align-items:center;
    box-shadow: 0px 0px 0px rgba(0, 0, 0, 0.25);
    background-color:#252525;
`;

const NavCont = styled.div`
    height:100%;
    width:100%;
    min-width:50%;
    max-width:55%;
    display:flex;
    justify-content:space-around;
    align-items:center; 
    // background-color:blue;
`;

const NavButtons = styled.div`
    width:100%;
    height:50%;
    display:flex;
    align-items:center;
    justify-content:center;

    ${props => props.active === true && css`
        border-bottom: 2px solid #6AD2FF;
        color:#6AD2FF;
        border-spacing: 25px;
    `}
  
`;

const LogoCont = styled.div`
    width:100px;
    display:flex;
    align-items:center;
    justify-content:center;
    position:absolute;
    left:2%;
`;


const HeaderComp = ({text, HomeActive, ProjectsActive, ContactActive, ResumeActive}) =>{
    return (
        <HeaderCont>
            <LogoCont>
                <Logo></Logo>
            </LogoCont>
       
            <NavCont>
                <Link style={{ textDecoration: 'none' , color:'white' }} to="/">
                    <NavButtons active={HomeActive}>Home</NavButtons>
                </Link>
                    
                <Link style={{ textDecoration: 'none' , color:'white' }} to="/Projects">
                    <NavButtons active={ProjectsActive}>Projects</NavButtons>
                </Link>

                <Link style={{ textDecoration: 'none' , color:'white' }} to="/Contact">
                    <NavButtons active={ContactActive}>Contact</NavButtons>
                </Link>

                <Link style={{ textDecoration: 'none' , color:'white' }} to="/">
                    <NavButtons active={ResumeActive}>Resume</NavButtons>
                </Link>
            </NavCont>
            
            {/* <Nav
                HomeActive={HomeActive}
                ProjectsActive={ProjectsActive}
                ContactActive={ContactActive}
                ResumeActive={ResumeActive}
            /> */}
        </HeaderCont>
    );
}

HeaderComp.defaultProps = {
    text:"Learn more"
}

export default HeaderComp;