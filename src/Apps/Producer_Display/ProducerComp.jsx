import React from 'react';


class ProducerComp extends React.Component{
      
    render () {
      return (
        <div className="container-fluid">
          <div className='row'>
            <div className='col-lg-12'>
              <div>Coffee & Tea</div>
            </div>
          </div>
          <table className='row'>
            <tbody className='col-sm-12'>
                <br></br>
                {this.props.menu.coffee.map((item, i) => <CoffeeTeaComp key = {i} coffee = {item} />)}
            </tbody>
          </table>
        </div>
      )
    }
  
  };
  
  export default ProducerComp;