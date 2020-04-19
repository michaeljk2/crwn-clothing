import React from 'react'
import { Switch, Route, Link } from 'react-router-dom'
import { auth } from './firebase/firebase.utils'

import HomePage from './pages/homepage/homepage.component'
import ShopPage from './pages/shop/shop.component'
import SignInAndSignOutPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component'
import Header from './components/header/header.component'
import './App.css'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      currentUser: null,
    }
  }
  unsubscribeFromAuth = null

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged((user) => {
      this.setState({ currentUser: user })
      console.log(this.state.currentUser)
    })
  }
  componentWillUnmount() {
    // die onAuthStateChanged Funktion returned für gewöhnlich 
    // weil wir diese zu unsubscribeFromAuth() assigned haben
    // ist diese Funktion nun Firebase.Unsubscribe
    // wenn diese aufgerufen wird, gibts keinen Observer mehr der schaut
    // wegen sign in oder sign out change
    this.unsubscribeFromAuth();
  }
  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser}/>
        <div className="mainBody">
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/shop" component={ShopPage} />
            <Route exact path="/signin" component={SignInAndSignOutPage} />
          </Switch>
        </div>
      </div>
    )
  }
}

export default App
