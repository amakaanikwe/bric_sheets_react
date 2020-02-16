import React from 'react';


class ProducerTempComp extends React.Component{

    // Pagination

    function pagFunc () {
        this.currentPage = 1,
        this.numPerPage = 5,
        this.maxSize = 5;

        let begin = (($scope.currentPage - 1) * $scope.numPerPage)
        let end = begin + $scope.numPerPage;
    
        $scope.filteredProducers = $scope.producers.slice(begin, end);

    }
      
    render () {
      return (
          <React.Fragment>
            <section className="container containerStyle borderBottom">
            <div className="row">
                <div className="col-lg-9">
                <h3>{this.props.producer.firstName + " " + this.props.producer.lastName}</h3>
                </div>
                <div className="col-lg-3">{this.props.producer.emailAddress}</div>
            </div>
            <div className="row">
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
                <div>
                <a>
                <button type="button" className="btn-info">details</button>
            </a>
            </div>
        </div>
        </div>
        </section>
        <section class="container" >
        <pagination uib-pagination ng-model="currentPage" total-items="producers.length" max-size="maxSize" items-per-page="numPerPage" boundary-links="true"  class="pagination-sm pagination" previous-text="&lsaquo;" next-text="&rsaquo;" first-text="&laquo;" last-text="&raquo;"></pagination>
        </section>
    </React.Fragment>
      )
    }
  
  };
  
  export default ProducerTempComp;