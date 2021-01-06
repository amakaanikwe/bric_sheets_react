import React from 'react';


class ProducerTempComp extends React.Component{
   
    render () {
      return (
          <>
            <section className="producerTempStyle">
            <div className="row">
                <div className="col-lg-9">
                <h3>{this.props.producer.firstName + " " + this.props.producer.lastName}</h3>
                </div>
                <div className="col-lg-3">{this.props.producer.emailAddress}</div>
            </div>
            <div className="row producerListStyle">
                <h5 className="col-lg-12">Bric Certifications</h5>
                <div className="col-lg-8">
                <ul>
                    <li>{this.props.producer.bricCertification}</li>
                </ul>
                </div>
                <h5 className="col-lg-12">Work Experience</h5>
                <div className="col-lg-8">
                <ul>
                    <li>{this.props.producer.workExperience}</li>
                </ul>
        </div>
 
        </div>
        <div>
                <a>
                <button type="button" className="btn-info">more details</button>
            </a>
            </div>
        </section>
    </>
      )
    }
  
  };
  
  export default ProducerTempComp;