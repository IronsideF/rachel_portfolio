import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import './FooterNav.css'

const FooterNav = () => {
  return (
    <Navigation>
        <li>
            <Link className='nav-link' to='/rachel_portfolio'>Portfolio</Link>
        </li>
        <li>
            <Link className='nav-link' to='/about'>About</Link>
        </li>
        <li>
            <Link className='nav-link' to='/contact'>Contact</Link>
        </li>
    </Navigation>
  )
}

const Navigation = styled.footer`
  background-color: black;
  display:flex;
  justify-content: space-evenly;
  margin-top: 3vh;
  position:absolute;
  bottom: 0;
  width: 100vw;
  height: 5vh
`;

export default FooterNav;