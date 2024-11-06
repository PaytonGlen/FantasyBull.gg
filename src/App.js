import React, { useRef } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import SignUp from './Signup.js'; 
import Login from './Login.js';
import haloinf from '/Users/pglen/Desktop/1TourneyZone/TourneyZone/src/images/halo inf/haloinf3.webp'

import './style.css';
import './App.css';

import TZ2 from '/Users/pglen/Desktop/1TourneyZone/TourneyZone/src/images/Images for Website/TZ2.svg';
import RL from '/Users/pglen/Desktop/1TourneyZone/TourneyZone/src/images/rocketleague/rocketleague1.webp';
import LoL from '/Users/pglen/Desktop/1TourneyZone/TourneyZone/src/images/LOL/LOL2.webp';
import CSGO from '/Users/pglen/Desktop/1TourneyZone/TourneyZone/src/images/CSGO/CSGO3.webp';
import R6 from '/Users/pglen/Desktop/1TourneyZone/TourneyZone/src/images/rsix/rsix.webp'
import dota from '/Users/pglen/Desktop/1TourneyZone/TourneyZone/src/images/Dota/Dota1.webp'
import pubg from '/Users/pglen/Desktop/1TourneyZone/TourneyZone/src/images/pubg/pubg.webp'
import fortnite from '/Users/pglen/Desktop/1TourneyZone/TourneyZone/src/images/fortnite/fortnite.webp'
import apex from '/Users/pglen/Desktop/1TourneyZone/TourneyZone/src/images/apexlegends/apexlegends.webp'
import smashbros from '/Users/pglen/Desktop/1TourneyZone/TourneyZone/src/images/smashbros/smashbro.webp'
import sc2 from '/Users/pglen/Desktop/1TourneyZone/TourneyZone/src/images/starcraft/starcraft.webp'
import mw3 from '/Users/pglen/Desktop/1TourneyZone/TourneyZone/src/images/COD/MW3.webp'

function App() {
  const scrollableSectionRef = useRef(null);

  const scrollLeftFunction = () => {
    if (scrollableSectionRef.current) {
      scrollableSectionRef.current.scrollBy({
        left: -150,
        behavior: 'smooth',
      });
    }
  };

  const scrollRightFunction = () => {
    if (scrollableSectionRef.current) {
      scrollableSectionRef.current.scrollBy({
        left: 150,
        behavior: 'smooth',
      });
    }
  };

  return (
    <Router>
      <div>
        <header className="header">
          <div className="logo">
            <img src={TZ2} alt="Tourney Zone Logo" className="logo-img" />
          </div>
          <nav className="navigation">
            <Link to="/">Home</Link>
            <div className="dropdown">
              <Link to="/tourney-zone">Tourney-Zone</Link>
            </div>
            <Link to="/make-your-team">Make your team</Link>
            <Link to="/how-to-play">How to Play</Link>
            <Link to="/download">Download</Link>
            <Link to="/help-center">Help Center</Link>
            <Link to="/signup" className="button signup">Sign Up</Link>
            <Link to="/login" className="button login">Log In</Link>
          </nav>
        </header>
        

        <div className="scrollable-container" style={{ position: 'relative' }}>
          <button className="arrow arrow-left" onClick={scrollLeftFunction}>‹</button>
          <div className="scrollable-section" ref={scrollableSectionRef}>
            <div className="game-card"><div className="game-name">
            <img src={LoL} alt="League of Legends" className="gamecard-img"/>LoL</div></div>
            <div className="game-card"><div className="game-name">
              <img src={RL} alt="Rocket League" className="gamecard-img"/>Rocket League</div></div>
            <div className="game-card"><div className="game-name">
              <img src={haloinf} alt="Halo Infinite" className="gamecard-img"/>Halo Infinite</div></div>
            <div className="game-card"><div className='game-name'>
              <img src={R6} alt='Rainbow 6' className='gamecard-img'/>Rainbow 6</div></div>
            <div className="game-card"><div className='game-name'>
              <img src={dota} alt='Dota 2' className='gamecard-img'/>Dota 2</div></div>
            <div className="game-card"><div className='game-name'>
              <img src={pubg} alt='PubG' className='gamecard-img'/>PubG</div></div>
            <div className="game-card"><div className="game-name">
              <img src={CSGO} alt="Counter Strike" className="gamecard-img"/>CSGO</div>
            </div>
            <div className="game-card"><div className='game-name'>
              <img src={mw3} alt='Call of Duty' className='gamecard-img'/>Call of Duty MW3</div></div>
            <div className="game-card"><div className='game-name'>
              <img src={apex} alt='Apex Legends' className='gamecard-img'/>Apex Legends</div></div>
              <div className="game-card"><div className='game-name'>
              <img src={smashbros} alt='Super Smash Bro' className='gamecard-img'/>Super Smash Bros</div></div>
            <div className="game-card"><div className='game-name'>
              <img src={fortnite} alt='Fortnite' className='gamecard-img'/>Fortnite</div></div>
              <div className="game-card"><div className='game-name'>
              <img src={sc2} alt='Starcraft' className='gamecard-img'/>Starcraft</div></div>
          </div>
          <button className="arrow arrow-right" onClick={scrollRightFunction}>›</button>
        </div>

        <section className="contest-types">
          <h2>How to play</h2>
          <div className="contest-cards">
            <div className="contest-card">
              <h2>Deposit funds</h2>
              <p style={{ fontSize: '18px' }}>Deposit as much as you'd like!</p>
            </div>
            <div className="contest-card">
              <h2>Select which game</h2>
              <p style={{ fontSize: '18px' }}>You can draft your own team for as many games as you'd like!</p>
            </div>
            <div className="contest-card">
              <h2>Pick your line up!</h2>
              <p style={{ fontSize: '18px' }}>Build your team and start earning $!</p>
            </div>
          </div>
        </section>

        <Routes>
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          {/* Additional routes can be added here */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;