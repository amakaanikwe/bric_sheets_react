import React from 'react';
import ProducerComp from "./ProducerComp.jsx";
import data from "../../../data/data.json";
import '../../../App.css';

class ProducerIndexComp extends React.Component{
  constructor(props) {
    super(props);
      this.state = {
        producers: data
      }

  }
  render () {
    return (
      <>
        <header>
          <img src="https://www.dropbox.com/s/zh6tgeyqvnffw33/broadcastCamcorder.jpg?raw=1" className="appPic" alt="Camera Image" />
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
          <ProducerComp producers={this.state.producers} />
        </section>
      </>
    );
  }
}
export default ProducerIndexComp;