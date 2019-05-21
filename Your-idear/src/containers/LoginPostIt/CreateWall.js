import React from 'react';
import './LoginPostIt.css';
import { Link } from 'react-router-dom'

export default (  props  ) => 
{ 
  if(props.state === "name")
    return <div className="loginPage">
        <div className="nameContent">
          <div className="name"> What's Your Name? </div>
          <input className="nameInput" placeholder="Guest" value={props.userName} onChange={props.handleUserName}/>
        </div>
        <div className="button start">
          <button onClick={props.inputWall}>Start</button>
        </div>
    </div>;

  else if(props.state === "inputWall")
    return <div className="loginPage inputwallbg">
      <div className="content">
        <div className="name"> WALL NAME <br/> you want to enter? </div>
        <input className="nameInput" placeholder="Ex: Design" value={props.userInputWall} onChange={props.inputWallName}/>
        <div className="loginHint">
          <button className="createWall" onClick={props.createWall}>Don't have a wall?</button>
          <span className="check">{props.checkInput}</span>
        </div>
      </div>
      <div className="button">
        <button onClick={props.name}>Back</button>
        <button><Link to="/Self" onClick={props.enterWall}>Next</Link></button>
      </div>
  </div>;

  else
    return <div className="loginPage createwallbg">
      <div className="nameContent">
        <div className="name"> name your wall: </div>
        <input className="nameInput" placeholder="Ex: Design" value={props.wallName} onChange={props.createWallName}/>
        <span className="check">{props.checkCreate}</span>
      </div>
      <div className="button">
        <button onClick={props.inputWall}>Back</button>
        <button><Link to="/Self" onClick={props.postWallName}>Next</Link></button>
      </div>
  </div>;
    
}