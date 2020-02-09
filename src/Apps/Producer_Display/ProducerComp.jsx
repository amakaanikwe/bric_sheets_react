import React from 'react';


class ProducerComp extends React.Component{
      
    render () {
      return (
        <section className="container containerStyle">
          <div className="row">
            <div className="col-lg-8">
              <h3>{person.firstName + " " + person.lastName}</h3>
            </div>
            <div className="col-lg-4">{person.emailAddress}</div>
          </div>
          <div className="row">
            <h5 className="col-lg-12">Bric Certifications</h5>
            <div className="col-lg-8">
              <ul>
                <li>{ person.bricCertification}</li>
              </ul>
            </div>
            <h5 className="col-lg-12">Work Experience</h5>
            <div className="col-lg-8">
              <ul>
                <li>{person.workExperience}</li>
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
  
  export default ProducerComp;