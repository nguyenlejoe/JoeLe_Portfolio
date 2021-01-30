import React from 'react';
import styled from 'styled-components';
import Nav from '../NavBar';
import Logo from '../Logo';

const HeaderCont = styled.div`
    height: 100%;
    width:100%;
    display:flex;
    align-items:center;
    box-shadow: 0px 0px 0px rgba(0, 0, 0, 0.25);
`;


const HeaderComp = ({text, HomeActive, ProjectsActive, ContactActive, ResumeActive}) =>{
    return (
        <HeaderCont>
            <div><Logo/></div>
            <Nav
                HomeActive={HomeActive}
                ProjectsActive={ProjectsActive}
                ContactActive={ContactActive}
                ResumeActive={ResumeActive}
            />
        </HeaderCont>
    );
}

HeaderComp.defaultProps = {
    text:"Learn more"
}

export default HeaderComp;