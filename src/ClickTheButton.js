import React, { Component } from 'react';
import './ClickTheButton.css';

class ClickTheButton extends Component {

    componentDidMount(){

        // // $('.btn').prepend('<div class="hover"><span></span><span></span><span></span><span></span><span></span></div>');
        // var theParent = document.getElementById("theParent");

        // var theKid = '<div class="hover"><span></span><span></span><span></span><span></span><span></span></div>'

        // // prepend theKid to the beginning of theParent
        // document.getElementsByClassName("btnClicker").insertBefore(theKid, document.getElementsByClassName("btnClicker").firstChild);
    }

    render() {
      return (
        <div>
          <a href="#" className="btnClicker red">Red</a>
        </div>
      )
    }  
  }

  export default ClickTheButton;
  