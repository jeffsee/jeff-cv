import React from 'react';
import './App.css';

import SplashScreen from './components/SplashScreen.js';
import Timeline from './components/Timeline.js';

function App() {

  return (
    <div>
      <SplashScreen />
      <Timeline startDate="1995-01-01" initialDate="2005-01-01"></Timeline>
    </div>
  )

}

export default App;
