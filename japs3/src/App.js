import React from 'react';
import './App.css';
import logo from './image/logo.png';
import yellow from './image/yellowgirl.png';

const App = () => {
  return (
    <div className="home-container">

      <div className="japs3"><img src={logo} alt='logo'/></div>
        <button className="btn about">About</button>
        <button className="btn courses">Courses</button>
        <button className="btn project">Project</button>
        <div className="yellowrectangle">
          <div className="yellow"><img src={yellow} alt='yellow'/></div>
        </div>
        <div className="school-title">Your Modern Online School</div>
        <div className="description">
          JAPS3 is an aggregator of multimedia educational materials from around the world
        </div>
        <button className="btn JoinIn">Join In</button>
        <button className="btn SignIn">Sign In</button>
        <div className="descript">Trusted by</div>
        <div className="Box"></div>
        <div className="learner">500+</div>      
        <div className="learner2">learners</div>
    </div>
  );
}

export default App;
