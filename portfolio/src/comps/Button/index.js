import React from 'react';
import styled from 'styled-components';

const ButtonCont = styled.div`
    width: 305px;
    height: 81px;
    left: 144px;
    top: 563px;
    border: 3px solid #6AD2FF;
    box-sizing: border-box;
    display:flex;
    align-items:center;
    justify-content:center;
    color:#6AD2FF;
    
`;

const ContentCont = styled.div`

`;

const MainButton = ({text}) =>{
    return (
        <ButtonCont>
           <ContentCont>{text}</ContentCont>
        </ButtonCont>
    );
}

MainButton.defaultProps = {
    text:"Learn more"
}

export default MainButton;