import React from 'react';
import ProducerTempComp from "./ProducerTemplate.jsx"


class ProducerComp extends React.Component{
      
    render () {
      return (
        <div>
          {this.props.producers.map((producer, i) => <ProducerTempComp key = {i} producer = {producer} />)}
        </div>
      )
    }
  
  };
  
  export default ProducerComp;