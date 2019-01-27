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
        if (this.state.percentage === 100) 
          return 
        this.setState({ 
          percentage: this.state.percentage + 10 
        })
        this.props.handleClick();
    }
    
    render() {
      return (
        <div className="progressBar">
          <ProgressBar percentage={this.state.percentage} />
          
          <div>  
            <button 
              onClick={this.nextStep}
              className="progressButton"
             >
              next
            </button>  
          </div>
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
