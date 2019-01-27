import React, { Component } from 'react';
import './ProgressBar.css';

class ProgressBarExample extends Component {
    constructor(props) {
      super(props)
      
      this.state = {
        percentage: 0
      }
      this.nextStep = this.nextStep.bind(this)
    }
    
    nextStep() {
        if(this.state.percentage === 100) return 
        this.setState({ percentage: this.state.percentage + 10 })
        this.props.handleClick();
    }
    
    render() {
      return (
        <div className="progressBar">
          
          {/* <h2> A React Progress Bar </h2> */}
          <ProgressBar percentage={this.state.percentage} />
          
          <div>  
            <button 
              onClick={this.nextStep}
              className="progressButton"
             >
              Next Step
            </button>  
          </div>   
          
          {/* Added for convenience of viewing */}
          {/* <div style={{marginTop: '10px', color: 'blue', marginBottom: '15px'}} onClick={() => this.setState({ percentage: 0 })}>
            Reset
          </div> */}
        </div>
      )
    }  
  }
  
  const ProgressBar = (props) => {
    return (
        <div className="progress-bar">
          <Filler percentage={props.percentage} />
        </div>
      )
  }
  
  const Filler = (props) => {
    return <div className="filler" style={{ width: `${props.percentage}%` }} />
  }

  export default ProgressBarExample;
  
//   ReactDOM.render(
//     <ProgressBarExample />,
//     document.querySelector('#app')
//   )
  
  
  // Other React Stuff
  
  // Check out my free youtube video on how to build a thumbnail gallery in react
  // https://www.youtube.com/watch?v=GZ4d3HEn9zg
  
  // https://medium.com/@ItsMeDannyZ/build-an-image-slider-with-react-es6-264368de68e4
  
  // Follow me on Github!
  // https://github.com/DZuz14