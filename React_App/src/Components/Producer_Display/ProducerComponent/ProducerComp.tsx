import React from 'react';
import ProducerTempComp from "./ProducerTemplate.jsx"


const ProducerComp = ({producers}) => {
      

      return (
        <div>
          {producers.map((producer, i) => <ProducerTempComp key = {i} producer = {producer} />)}
        </div>
      )

  
  };
  
  export default ProducerComp;