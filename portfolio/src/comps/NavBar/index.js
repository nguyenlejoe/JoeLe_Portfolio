// import React from 'react';
// import styled, {css} from 'styled-components';
// import {Link} from 'react-router-dom';

// const NavCont = styled.div`
//     display:flex;
//     align-items:center;
//     justify-content: flex-end;
//     height:10%;
//     min-width: 90%;
//     max-width:20%;
//     margin-right:100px;
// `;

// const NavButtons = styled.div`
//     margin:10px 60px 0 60px;
//     height:40px;
    
//     ${props => props.active === true && css`
//     border-bottom: 2px solid #6AD2FF;
//     color:#6AD2FF;
//     border-spacing: 25px;
//         `}
// `;




// const NavBar = ({HomeActive, ProjectsActive, ContactActive, ResumeActive}) =>{

//     return (
//         <NavCont>
            // <Link style={{ textDecoration: 'none' , color:'white' }} to="/">
            //      <NavButtons active={HomeActive}>Home</NavButtons>
            // </Link>
                
            // <Link style={{ textDecoration: 'none' , color:'white' }} to="/Projects">
            //     <NavButtons active={ProjectsActive}>Projects</NavButtons>
            // </Link>

            // <Link style={{ textDecoration: 'none' , color:'white' }} to="/Contact">
            //     <NavButtons active={ContactActive}>Contact</NavButtons>
            // </Link>

            // <Link style={{ textDecoration: 'none' , color:'white' }} to="/">
            //      <NavButtons active={ResumeActive}>Resume</NavButtons>
            //  </Link>
//         </NavCont>
//     );
// }

// NavBar.defaultProps = {
// active: false
// }

// export default NavBar;