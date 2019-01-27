import React, { Component } from 'react';

import './LightPostScene.css';

class LightPostScene extends Component {
    constructor(props) {
        super(props);
        this.state = {
            s: true,
            time: ""
        };
        this.stateChange = this.stateChange.bind(this);
    }

    componentDidMount() {
        var id = setInterval(this.stateChange, 700);
        this.setState({
            time: id
        })
    }

    componentWillUnmount() {
        clearTimeout(this.state.time);
    }

    stateChange() {
        this.setState({
            s: !this.state.s
        })
    }
    render() {
      return (
        <div className="presentation-content">
            <img id="lampost" src={require('../../assets/streelight_bg_new.png')} alt="logo" width="1600" height="1000"/>
            {this.state.s === true ? (
              <div>
                <img id="kypLight" src={require('../../assets/export_kyp.png')} alt="logo"/>
              </div>
            ) : this.state.s === false ? (
              <div>
                <img id="kypLight" src={require('../../assets/export_kyp2.png')} alt="logo"/>
              </div>
          ) : null}
            <p id="textGield">How am I going to get back home?</p>
        </div>
      )
    }  
  }

  export default LightPostScene;
  