import React from 'react';
import styled from 'styled-components';

const ContactCont = styled.div`
    width:100%;
    height:100%;
    max-width:60%;
    max-height:60%;
    background-color:#252525;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 51px;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.85));
    display:flex;
    justify-content: center;
    align-items:center;
    flex-wrap: wrap;
`;

const ContactBox = styled.div`
    width:33%;
    height:25%;
    margin:2%;
`;

const ContactLabel = styled.div`

`;

const ContactInput = styled.input`
    width:100%;
    height:30%;
    margin-top:2%;
    max-width:${props => props.width ? props.width : "50%"}
    min-height:25px;
    border-style:none;
    box-shadow: 0px 2px 1px rgba(0, 0, 0, 0.10), 0px 0px 1px rgba(0, 0, 0, 0.25);
    border-radius: 8px;
    padding-left:15px;

`;

const ContactMessage = styled.input`
    width:70%;
    margin-top:-6%;
    height:50%;
    max-width:${props => props.width ? props.width : "50%"}
    min-height:25px;
    border-style:none;
    box-shadow: 0px 2px 1px rgba(0, 0, 0, 0.10), 0px 0px 1px rgba(0, 0, 0, 0.25);
    border-radius: 8px;
    padding-left:15px;
`;


const Contact = () => {
    return (
        <ContactCont>
            <ContactBox>
                <ContactLabel>Name</ContactLabel>
                <ContactInput ></ContactInput>
            </ContactBox>
            <ContactBox>
                <ContactLabel>Email</ContactLabel>
                <ContactInput ></ContactInput>
            </ContactBox>
            <ContactMessage></ContactMessage>
        </ContactCont>
    );
}

export default Contact;