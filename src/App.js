import React from 'react';
import logo from './logo.svg';
import ProducerComp from "./Apps/Producer_Display/ProducerComp.jsx";
import './App.css';

function App() {
  return (
    <React.Fragment>
      <header>
        <img src="https://www.dropbox.com/s/zh6tgeyqvnffw33/broadcastCamcorder.jpg?raw=1" className="App-logo" alt="Camera Image" />
        {/* <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
      </header>
      <ProducerComp />
    </React.Fragment>
  );
}

export default App;
