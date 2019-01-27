import React, { Component } from 'react';
import Kyp1 from '../../assets/new_kyp_walk_left.png';
import Kyp2 from '../../assets/new_kyp_walk_left2.png';

import './WalkingScene.css';

class WalkingScene extends Component {
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
        var s = this.state.s;
        return (
            <div className="container">
                <div className="sliding-background">
                </div>
                {s === true ? (
                    <div>
                        <img className="kypW" src={Kyp1} alt="kyp1" style={{ width: '20%', height: '20%' }} />
                    </div>
                ) : s === false ? (
                    <div>
                        <img className="kypW" src={Kyp2} alt="kyp2" style={{ width: '20%', height: '20%' }} />
                    </div>
                ) : null}
            </div>
        )
    }
}

export default WalkingScene;
