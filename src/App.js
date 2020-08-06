import React from 'react';
import './App.css';

import CVBody from './components/CVBody.js';
import BackgroundDiv from './components/BackgroundDiv.js';

import { timelineStartDate } from './common/DateFunctions.js';
import { useScrollListener } from './common/ScrollFunctions.js';
import { getDivHeightForDates } from './common/EraFunctions.js';

import cvEras from './data/cvEras.js';

function App() {

  const { windowPosition, viewingDate } = useScrollListener();

  // Get the pixel height of the div
  var divHeight = getDivHeightForDates(Date.now(), timelineStartDate);

  const appStyle = {
    height: divHeight + "px"
  }

  // Get the background divs for background styling
  const backgroundComponents = cvEras.sort(e => e.startDate).reverse().map(era => <BackgroundDiv key={era.id} era={era} />);

  return (
    <div className="App" style={appStyle}>
      {backgroundComponents}
      <CVBody windowPosition={windowPosition} viewingDate={viewingDate} />
    </div>
  );
}

export default App;
