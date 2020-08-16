import React from 'react';
import './App.css';

import TimelineHeader from './components/TimelineHeader.js';
import Timeline from './components/Timeline.js';

function App() {

  return (
    <div>
      <TimelineHeader />
      <Timeline startDate="1983-05-01" initialDate="2005-01-01"></Timeline>
    </div>
  )

}

export default App;
