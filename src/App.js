import React from 'react';
import logo from './logo.svg';
import ProducerComp from "./Apps/Producer_Display/ProducerComp.jsx";
import data from "./data/data.json";
import './App.css';

class App extends React.Component{
  constructor(props) {
    super(props);
      this.state = {
        producers: data
      }

  }
  render () {
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
        <section>
          {this.props.menu.coffee.map((item, i) => <ProducerComp key = {i} coffee = {item} />)}
        </section>
      </React.Fragment>
    );
  }
}
export default App;
