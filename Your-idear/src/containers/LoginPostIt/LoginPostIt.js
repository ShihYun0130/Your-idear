import React, {Component} from 'react';
import './LoginPostIt.css';
import { Link } from 'react-router-dom';
import cookie from 'react-cookies';

class LoginPostIt extends Component{

  constructor(props){
    super(props);
  }

  componentDidMount(){
    // cookie.remove('userName', { path: '/' });
    // cookie.remove('wallName', { path: '/' });
    // cookie.remove('wallDescription', { path: '/' });
    // console.log("cookie all loginpages: ", cookie.loadAll());
  }
  render() {
    if(this.props.wallState === "name")
      return <div className="loginPage">
          <div className="nameContent">
            <div className="name"> What's Your Name? </div>
            <input className="nameInput" placeholder="Guest" value={this.props.userName} onChange={this.props.handleUserName}/>
          </div>
          <div className="button start">
            <button><Link to="/Login/wallName">Start</Link></button>
          </div>
      </div>;

    else if(this.props.wallState === "inputWall")
      return <div className="loginPage inputwallbg">
        <div className="content">
          <div className="name"> WALL NAME <br/> you want to enter? </div>
          <input className="nameInput" placeholder="Ex: Design" value={cookie.load("wallName")} onChange={this.props.inputWallName}/>
          <div className="loginHint">
            <button className="createWall" onClick={this.props.createWall}>
              <Link to="/Login/CreateWall">Don't have a wall?</Link>
            </button>
            <span className="check">{this.props.checkInput}</span>
          </div>
        </div>
        <div className="button">
          <button onClick={this.props.name}><Link to="/">Back</Link></button>
          <button><Link to="/Self" onClick={this.props.enterWall}>Next</Link></button>
        </div>
    </div>;

    else
      return <div className="loginPage createwallbg">
        <div className="nameContent">
          <div className="name newWallName"> name your wall: </div>
          <input className="nameInput newWall" placeholder="Ex: Design Thinking" value={this.props.wallName} onChange={this.props.createWallName}/>
          <span className="check">{this.props.checkCreate}</span>
          <div className="name newWallDes"> add some desciption to your wall: </div>
          <input className="nameInput newWall" placeholder="Ex: This Wall is for ..." value={this.props.wallDescription} onChange={this.props.handleWallDes}/>
          <span className="check">(Limited 20 words)</span>
        </div>
        <div className="button">
          <button onClick={this.props.inputWall}>
            <Link to="/Login/wallName">Back</Link>
          </button>
          <button><Link to="/Self" onClick={this.props.postWallName}>Next</Link></button>
        </div>
    </div>;
  }
}

export default LoginPostIt;