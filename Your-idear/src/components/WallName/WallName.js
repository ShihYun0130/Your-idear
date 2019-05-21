import React, { Component } from 'react';
import '../../containers/LoginPostIt/LoginPostIt';
import Button from '../../containers/Button/Button';
import { Link } from 'react-router-dom'

class WallName extends Component{

  constructor(props){
    super(props);
    this.state = {
    }
  }

  render(){
    return <div className="loginPage inputwallbg">
        <div className="content">
          <div className="name"> WALL NAME <br/> you want to enter? </div>
          <input className="nameInput" placeholder="Ex: Design" value={this.props.userInputWall} onChange={this.props.inputWallName}/>
          <div className="loginHint">
            <button className="createWall" onClick={this.props.createWall}>Don't have a wall?</button>
            <span className="check">{this.props.checkInput}</span>
          </div>
        </div>
        <div className="button">
          <button>Back</button>
          <button><Link to="/Board" onClick={this.props.enterWall}>Next</Link></button>
        </div>
    </div>;
  }
}

export default WallName;