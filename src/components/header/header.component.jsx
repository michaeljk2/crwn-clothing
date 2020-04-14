import React from "react";
import { Link } from "react-router-dom";

import { ReactComponent as Logo } from "../../assets/crwn.svg";

import "./header.styles.scss";

const Header = (props) => (
  <div className='header'>
    <Link className='logo-container' to='/'>
        <Logo className='logo' />
    </Link>
    <div className='options'>
        <Link className='option' to='/shop'>
            shop
        </Link>
        <Link className='option' to='/contact'>
            contact
        </Link>
        <Link className='option' to='/signin'>
            signin
        </Link>
    </div>
  </div>
)

export default Header