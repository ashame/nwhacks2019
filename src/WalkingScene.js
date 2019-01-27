import React, { Component } from 'react';
import Kyp1 from './assets/export_kyp.png';
import Kyp2 from './assets/export_kyp2.png';
import CityBG from './assets/city_bg_long.png';
import $ from 'jquery';

class WalkingScene extends Component {
    constructor(props) {
        super(props);
        this.state = { 
          s:true,
          time:""
        };
        this.stateChange = this.stateChange.bind(this);
    }

    componentDidMount(){
        // this.state.time = this.setInterval(this.stateChange, 1000);
        var id = setInterval(this.stateChange, 700);
        this.setState({
            time:id
        })
        // function myMove() {
        //     var elem = document.getElementsById("road");  
        //     var pos = 0;
        //     var id = setInterval(frame, 10);
        //     function frame() {
        //       if (pos == 350) {
        //         clearInterval(id);
        //       } else {
        //         pos++; 
        //         elem.style.left = pos + 'px'; 
        //       }
        //     }
        //   }
        //   myMove();

    }

    componentWillUnmount(){
        clearTimeout(this.state.time);
    }

    stateChange(){
        this.setState({
            s:!this.state.s
        })
    }

    render() { 
        var s = this.state.s;
        $("#road").animate({
            left: "-=1000"
            // height: "toggle"
          }, 20000, function() {
            // Animation complete.
          });
        return(
            <div>
                <img id="road" style={{width: 'auto',height: '100%',top:'0px',left:'0px',position: 'absolute'}} src={CityBG}></img>
                { s === true ? (
                    <div>
                        <img src={Kyp1} alt="kyp1" style={{width:'20%',height:'20%'}} />
                        {/* <p>
                        LampPostScene
                        </p> */}
                    </div>
                ) : s === false ? (
                    <div>
                        <img src={Kyp2} alt="kyp2" style={{width:'20%',height:'20%'}} />
                        {/* <p>
                        LampPostScene2
                        </p> */}
                    </div>
                ) : null}
                {/* <div id="road" style={{width: '50px',height: '50px',left:'0px',position: 'absolute',background: 'red'}}>
                    <p>Road</p>
                </div> */}
            </div>
        )
    }
}

export default WalkingScene;