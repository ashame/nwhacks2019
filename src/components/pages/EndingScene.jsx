import React, { Component } from 'react';

class EndingScene extends Component {

    
    render() {
      return (
        <div>
            <img id="kyper" alt="" src={require('../../assets/export_kyp.png')} style={{ width: '20%', height: '20%' }}/>
            <img id="kypParent1" alt="" src={require('../../assets/parent1.png')} style={{ width: '20%', height: '20%' }}/>
            <img id="kypParent2" alt="" src={require('../../assets/parent2_new.png')} style={{ width: '20%', height: '20%' }}/>
            <img src={require('../../assets/the_end.png')} alt="logo"/>
        </div>
      )
    }  
  }

  export default EndingScene;
  