import React, { Component } from 'react';

import './LightPostScene.css';

class LightPostScene extends Component {

    componentDidMount(){

        // // $('.btn').prepend('<div class="hover"><span></span><span></span><span></span><span></span><span></span></div>');
        // var theParent = document.getElementById("theParent");

        // var theKid = '<div class="hover"><span></span><span></span><span></span><span></span><span></span></div>'

        // // prepend theKid to the beginning of theParent
        // document.getElementsByClassName("btnClicker").insertBefore(theKid, document.getElementsByClassName("btnClicker").firstChild);
    }

    render() {
      return (
        <div className="presentation-content">

            <img id="lampost" src={require('../../assets/new_kyp_streetlight.png')} alt="logo" width="1600"/>
            <img id="kypLight" src={require('../../assets/export_kyp.png')} alt="logo"/>
        </div>
      )
    }  
  }

  export default LightPostScene;
  