import React, { useState } from 'react';
import styled, {css} from 'styled-components';
import {Link} from 'react-router-dom';

const MenuCont = styled.div`
    display:flex;
    width:500px;
    height:100%;
    position:fixed;
    left:85vw;
    transition: all 0.4s ease;
    top:4%;

    ${props => props.active === true && css`
    position:fixed;
    left:40vw;
    `}
`;

const MenuButton = styled.div`
    width:50px;
    height:50px;
    background-image: url(menu.svg);
    background-size:contain;
`;

const MenuBox = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    position:relative;
    bottom:30px;
    margin-left:10px;
    width:45vw;
    height:100vh;
    background: rgba(0, 0, 0, 0.87);
    border-radius: 30px 0px 0px 30px;
`;

const MenuTabs = styled.div`
    margin:20px;
    display:flex;
    justify-content:center;
    align-items:center;
    width:80%
    height:20%;

    ${props => props.active === true && css`
    border-bottom: 2px solid #6AD2FF;
    color:#6AD2FF;
    border-spacing: 25px;
`}
`;

const HamburgerMenu = ({HomeActive, ProjectsActive, ContactActive, ResumeActive}) =>{

    const [active, setActive] = useState(false)

    return (
    <MenuCont active={active} >
        <MenuButton onClick={()=>{
            if(!active){
              setActive(true)  
            }else{
              setActive(false)  
            }
            
        }}/>
        <MenuBox>
                <Link style={{ textDecoration: 'none' , color:'white' }} to="/">
                    <MenuTabs active={HomeActive}>Home</MenuTabs>
                </Link>
                    
                <Link style={{ textDecoration: 'none' , color:'white' }} to="/Projects">
                    <MenuTabs active={ProjectsActive}>Projects</MenuTabs>
                </Link>

                <Link style={{ textDecoration: 'none' , color:'white' }} to="/Contact">
                    <MenuTabs active={ContactActive}>Contact</MenuTabs>
                </Link>

                <Link style={{ textDecoration: 'none' , color:'white' }} to="/">
                    <MenuTabs active={ResumeActive}>Resume</MenuTabs>
                </Link>
        </MenuBox>
    </MenuCont>
    );
}

export default HamburgerMenu;