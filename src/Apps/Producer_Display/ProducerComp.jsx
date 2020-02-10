import React from 'react';
import ProducerTempComp from "./ProducerTemplate.jsx"


class ProducerTempComp extends React.Component{
      
    render () {
      return (
        <section className="container">
          <div className="row">
            <div className="col-lg-8">
              <h3>{this.props.firstName + " " + this.props.lastName}</h3>
            </div>
            <div className="col-lg-4">{this.props.emailAddress}</div>
          </div>
          <div className="row">
            <h5 className="col-lg-12">Bric Certifications</h5>
            <div className="col-lg-8">
              <ul>
                <li>{this.props.bricCertification}</li>
              </ul>
            </div>
            <h5 className="col-lg-12">Work Experience</h5>
            <div className="col-lg-8">
              <ul>
                <li>{this.props.workExperience}</li>
              </ul>
              <div>
            <a>
            <button type="button" className="btn-info">details</button>
          </a>
        </div>
      </div>
    </div>
    </section>
      )
    }
  
  };
  
  export default ProducerTempComp;