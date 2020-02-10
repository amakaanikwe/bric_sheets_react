import React from 'react';
import ProducerTempComp from "./ProducerTemplate.jsx"


class ProducerComp extends React.Component{
      
    render () {
      return (
        <React.Fragment>
          {this.props.data.map((item, i) => <ProducerTempComp key = {i} coffee = {item} />)}
        </React.Fragment>
      )
    }
  
  };
  
  export default ProducerComp;