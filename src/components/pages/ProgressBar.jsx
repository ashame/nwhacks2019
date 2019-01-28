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
      percentage: this.state.percentage + 100 / 12
      // percentage: this.state.percentage + 100/18
    })
    this.props.handleClick();
  }

  render() {
    var pagesNoButton = [1, 4, 11, 14, 17];
    return (
      <div className="progressBar">
        <ProgressBar percentage={this.state.percentage} />
        {!pagesNoButton.includes(this.props.page) ? (
          <div>
            <button
              onClick={this.nextStep}
              className="progressButton"
            >
              next
            </button>
          </div>
        ) : null}
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
