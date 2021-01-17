import React from 'react';


const ProducerTempComp = ({producer}) => {
   
      return (
          <>
            <section className="producerTempStyle">
            <div className="row">
                <div className="col-lg-9">
                <h3>{producer.firstName + " " + producer.lastName}</h3>
                </div>
                <div className="col-lg-3">{producer.emailAddress}</div>
            </div>
            <div className="row producerListStyle">
                <h5 className="col-lg-12">Bric Certifications</h5>
                <div className="col-lg-8">
                <ul>
                    <li>{producer.bricCertification}</li>
                </ul>
                </div>
                <h5 className="col-lg-12">Work Experience</h5>
                <div className="col-lg-8">
                <ul>
                    <li>{producer.workExperience}</li>
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

  
  };
  
  export default ProducerTempComp;