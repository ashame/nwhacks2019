import React, { Component } from 'react';
import $ from 'jquery';

class HomePage extends Component {
    componentDidMount() {
        $(document).ready(function () {
          var audioElement = document.createElement('audio');
          audioElement.setAttribute('src', 'http://www.kozco.com/tech/piano2-CoolEdit.mp3');
          audioElement.addEventListener('ended', function () {
            this.play();
          }, true);
          audioElement.play().then(function(){

          });
        //   setTimeout(function(){
            
        //     console.log("asdf")
        //   }, 4000)
          
        });
      }

    render() { 
        return(
            <div>
                <div class="logo">
                    <img src={require('../../assets/logo.png')} alt="logo" height="250" />
                </div>
                <button className="play" onClick={this.props.handleClick}>Play!</button>
            </div>
        )
    }
}

export default HomePage;