import React from 'react';
import { useState, useEffect } from "react-redux";
import ProducerComp from "./ProducerComp.jsx";
import data from "../../../data/data.json";
import '../../../App.css';

const ProducerIndexComp = () =>{

      // this.state = {
      //   producers: data
      // }

  
    return (
      <>
        <header>
          <h1>Producer Search</h1>
        </header>
        <section>
          <ProducerComp producers={data} />
        </section>
      </>
    );
}
export default ProducerIndexComp;