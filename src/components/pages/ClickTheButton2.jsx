import React, { Component } from 'react';
import './ClickTheButton2.css';

class ClickTheButton2 extends Component {

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
            <p>Hmm... What does this button do?</p>
            <button className="retro-button red-button" onClick={this.props.handleClick}>EJECT</button>
        </div>
      )
    }
  }

  export default ClickTheButton2;
