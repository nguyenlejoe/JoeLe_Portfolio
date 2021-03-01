import React from 'react';
import styled from 'styled-components';
import {motion} from "framer-motion";

const ContactCont = styled(motion.div)`
    width: 675px;
    height: 675px;
    background: rgba(23, 23, 23, 0.35);
    backdrop-filter: blur(55px);
    border-radius: 51px;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    
`;

const ContactInput = styled.div`
    width:100%;
    height:15%;
    display:flex;
    justify-content:center;
    flex-direction:column;
    align-items:center;

`

const MessageCont = styled.div`
    width:100%;
    height:45%;
    display:flex;
    justify-content:center;
    flex-direction:column;
    align-items:center;
`

const InputBox = styled.input`
    border-style:none;
    background: #FEFEFE;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 9px;
    width:75%;
    height:40%;
`

const InputLabel = styled.label`
    margin: 2% 0 2% 0;
    font-size:20px;
    position:relative;
    right:200px;
`

const InputMessage = styled.input`
    border-style:none;
    background: #FEFEFE;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 9px;
    width:75%;
    height:70%;
`

const ContactButton = styled.div`
    width: 532px;
    height: 60px;
    background: rgba(23, 23, 23, 0.7);
    backdrop-filter: blur(55px);
    border-radius: 10px;
    display:flex;
    justify-content:center;
    align-items:center;
    color:white;
    margin-top:4%;
    font-size:20px;
`


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
        <ContactInput>
            <InputLabel>Email</InputLabel>
            <InputBox></InputBox>
        </ContactInput>

        <ContactInput>
            <InputLabel>Subject</InputLabel>
            <InputBox></InputBox>
        </ContactInput>

        <MessageCont>
            <InputLabel>Message</InputLabel>
            <InputMessage></InputMessage>
        </MessageCont>

        <ContactButton>Submit</ContactButton>
        
        </ContactCont>
    );
}

export default Contact;