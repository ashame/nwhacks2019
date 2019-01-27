import React, { Component } from 'react';
import Kyp1 from './assets/export_kyp.png';
import Kyp2 from './assets/export_kyp2.png';

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
        setInterval(this.stateChange, 1000);
    }

    // componentWillUnmount(){
    //     clearTimeout(this.state.time);
    // }

    stateChange(){
        this.setState({
            s:!this.state.s
        })
    }

    render() { 
        var s = this.state.s;
        return(
            <div>
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
            </div>
        )
    }
}

export default WalkingScene;