import React, { Component } from 'react';
import Logo from '../../assets/kyp_title.png';

class HomePage extends Component {
    render() { 
        return(
            <div>
                <img src={Logo} alt="kyp" style={{width:'50%', height:'50%'}}/>
                <div style={{top:'-40px'}}>
                    <p>
                        Kyp is a story about finding home
                    </p>
                    <button onClick={this.props.handleClick}>Play</button>
                </div>
            </div>
        )
    }
}

export default HomePage;