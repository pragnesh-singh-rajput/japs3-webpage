import React from 'react';
import './App.css';
import logo from './image/logo.png';
import yellow from './image/yellowgirl.png';
// import purple from './image/purplegirl.png';
// import cyan from './image/cyanboy.png';
// import red from './image/redgirl.png';
// import blue from './image/blueboy.png';
// import green from './image/greengirl.png';


const App = () => {
  return (
    <div className="home-container">

        <div className="japs3"><img src={logo} alt='logo'/></div>
        <button className="btn about">About</button>
        <button className="btn courses">Courses</button>
        <button className="btn project">Project</button>
        
        <img src={yellow} className="yellow" alt="yellow" />
        <div className="yellowrectangle"> </div>

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
