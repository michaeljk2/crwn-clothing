import React from 'react';
import { Switch, Route, Link } from 'react-router-dom'
import HomePage from './pages/homepage/homepage.component'
import './App.css';

const HatsPage = (props) =>{
  console.log(props);
  
  return (
    <div>
      <Link to={`${props.match.url}/14`}>To Topic 14</Link>
      <h1>This is the HatsPage Details to: {props.match.params.topicId}</h1>
    </div>
  )
}
const HatsPageDetail = (props) =>{
  console.log(props);
  
  return (
    <div>
      <h1>This is the HatsPage {props.match.params.topicId}</h1>
    </div>
  )
}

function App() {
  return (
    <div className="App">
      <Route exact path='/' component={HomePage} />
      <Route exact path='/hats' component={HatsPage} />
      <Route path='/hats/:topicId' component={HatsPageDetail} />
    </div>
  );
}

export default App;
