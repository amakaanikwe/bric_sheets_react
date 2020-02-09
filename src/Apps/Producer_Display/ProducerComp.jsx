import React from 'react';


class ProducerComp extends React.Component{
      
    render () {
      return (
        <section class="container containerStyle" ng-repeat="person in filteredProducers |orderBy: 'lastName' ">
          <div class="row">
            <div class="col-lg-8">
              <h3>{{ person.firstName + " " + person.lastName }}</h3>
            </div>
            <div class="col-lg-4">{{person.emailAddress}}</div>
          </div>
          <div class="row">
            <h5 class="col-lg-12">Bric Certifications</h5>
            <div class="col-lg-8">
              <ul>
                <li>{{ person.bricCertification }}</li>
              </ul>
            </div>
            <h5 class="col-lg-12">Work Experience</h5>
            <div class="col-lg-8">
              <ul>
                <li>{{ person.workExperience }}</li>
              </ul>
              <div>
            <a ng-click="openModal(person)">
            <button type="button" class="btn-info">details</button>
          </a>
        </div>
      </div>
    </div>
  </section>
      )
    }
  
  };
  
  export default ProducerComp;