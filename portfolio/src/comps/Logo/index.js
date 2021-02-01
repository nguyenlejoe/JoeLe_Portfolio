import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
 
const LogoCont = styled.div`
    width: 100px;
    height: 100px;
    border: 3px solid #FFFFFF;
    box-sizing: border-box;
    display:flex;
    align-items:center;
    justify-content:center;
    color:#6AD2FF; 
`;

const ContentCont = styled.div`
    font-size: 50px;
`;

const Logo = ({text}) =>{
    return (
        <Link style={{ textDecoration: 'none' , color:'white' }}  to="/">
        <LogoCont>
           <ContentCont>JL</ContentCont>
        </LogoCont>
        </Link>
    );
}

Logo.defaultProps = {
    text:"Learn more"
}

export default Logo;