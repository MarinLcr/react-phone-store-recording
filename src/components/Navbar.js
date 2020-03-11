import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import logo from '../logoW1.png'
import styled from 'styled-components'
import {ButtonContainer} from './Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

class Navbar extends Component { 
    render() {
        return (
            <div>
                <NavWrapper className="navbar navbar-expand-sm navbar-dark px-sm-5">
                {/* 
                https://www.iconfinder.com/icons/1243689/call_phone_icon
                Creative Commons (Attribution 3.0 Unported);
                https://www.iconfinder.com/Makoto_msk */}
                <Link to ='/'>
                    <img src={logo} alt="store" className="navbar-brand w-25"></img>
                </Link>
                <ul className="navbar-nav align-items-center ml-auto">
                    <li className="nav ml-5">
                        <Link to="/" className="nav-link">products</Link>
                    </li>
                </ul>
                <Link to="/cart">
                        <FontAwesomeIcon icon={faShoppingCart} style={{color: "#FFF"}} /> 
                </Link>
                </NavWrapper>
            </div>
        );
    }
}

const NavWrapper = styled.nav`
background:var(--mainBlue);
position: absolute;
background: transparent;
border-bottom: 1px solid rgba(255, 255, 255, 0.3);;
width: 100%;
height: 69px;
.nav-link {
    color:var(--mainWhite)!important;
    font-size:16px;
    font-weight: 500;
}
`



export default Navbar;