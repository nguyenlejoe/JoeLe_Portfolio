import React from 'react';
import styled from 'styled-components';
import {motion} from "framer-motion";
const ContactCont = styled(motion.div)`
    width:100%;
    height:100%;
    max-width:60%;
    max-height:60%;
    background: rgba(23, 23, 23, 0.35);
    backdrop-filter: blur(55px);
    border-radius: 51px;
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

    const variants = {
        hidden:{
            opacity:0,
            y: '-30vh'
        },
        visible:{
            opacity:1,
            y: '2vh',
            duration:1,
            transition: {
                type:"spring",
                stiffness:90,
                mass:0.8,
                damping:9
            }
        },
    }

    return (
        <ContactCont
        variants={variants}
        initial="hidden"
        animate="visible"
        >
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