import React from 'react'
import { Link } from 'react-router-dom'
import { auth } from '../../firebase/firebase.utils'

import { ReactComponent as Logo } from '../../assets/crwn.svg'

import './header.styles.scss'

const Header = ({ currentUser }) => (
  <div className="header">
    <Link className="logo-container" to="/">
      <Logo className="logo" />
    </Link>
    <div className="options">
      <Link className="option" to="/shop">
        shop
      </Link>
      <Link className="option" to="/contact">
        contact
      </Link>
      <Link className="option" to="/signin">
        {currentUser ? <div className='option' onClick={() => auth.signOut()}> SING OUT</div> : <Link className='option' to='/signin'> SIGN IN </Link>}
      </Link>
    </div>
  </div>
)

export default Header
