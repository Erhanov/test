import React from 'react';
import './App.css';
import MatchMedia from './components/match-media.js';
import ProgressBar from './components/progress-bar.js';


function App() {
  return (
    <div className="App">
      <MatchMedia/>
      <ProgressBar/>
    </div>
  );
}

export default App;
