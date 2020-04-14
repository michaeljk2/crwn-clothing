import React from 'react';
import { Switch, Route, Link } from 'react-router-dom'

import HomePage from './pages/homepage/homepage.component'
import ShopPage from './pages/shop/shop.component'
import SignInAndSignOutPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component'
import Header from './components/header/header.component'
import './App.css';

function App() {
  return (
    <div>
      <Header />
      <div className='mainBody'>
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route exact path='/shop' component={ShopPage} />
          <Route exact path='/signin' component={SignInAndSignOutPage} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
