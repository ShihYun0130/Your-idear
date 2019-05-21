import React from 'react';
import './Toolbar.css';
import board from './board.png';
import profile from './profile.png';
import Button from '../Button/Button';
import Board from '../../components/Board/Board';
import textIcon from './text.png';
import pen from './drawpen.png';
import done from './done.png';
import deleteIcon from './delete.png';
import leftalign from './leftalign.png';
import centeralign from './centeralign.png';
import rightalign from './rightalign.png';
import upload from './upload.png';
import { BrowserRouter } from 'react-router-dom';
import { NavLink, Switch, Route, Redirect, Link } from 'react-router-dom';
import cookie from 'react-cookies';

export default ( props ) => 
{ 
  if(props.state === "original")
    return <div className="toolbar">
        <div className="left">
          <Link to="/Board"><Button image={board} text="" hint={props.wallName} /></Link>
        </div>
        <div className="right">
          <div className="function">
            <Button image={deleteIcon} text="" hint="clear" onClick={props.clearContent} />
            <Button image={upload} text="" hint="upload" onClick={props.postPostIt} />
            <Button image={textIcon} text="" hint="type" onClick={props.textState} />
            <Button image={pen} text="" hint="draw" onClick={props.drawButton}/>
            {/* <Button image={pen} text="" hint="draw" onClick={props.drawState}/> */}
          </div>
          <Link to="/" onClick={props.logout}><Button image={profile} text={props.userName} hint=""/></Link>
        </div>
    </div>;

  else if(props.state === "text")
    return <div className="toolbar">
      <div className="left">
        {/* <Button image={board} text="" hint=""/> */}
      </div>
      <div className="right">
        <div className="textfunction">
          {/* <Button image={deleteIcon} text="" hint="clear"/> */}
          <Button image={done} text="" hint="done" onClick={props.originalState}/>
          <Button image={leftalign} text="" hint="left" onClick={props.leftAlignButton}/>
          <Button image={centeralign} text="" hint="center" onClick={props.centerAlignButton}/>
          <Button image={rightalign} text="" hint="right"onClick={props.rightAlignButton}/>
        </div>
        <Button image={profile} text="Guest" hint="" onClick={props.logout}/>
      </div>
  </div>;
  else if(props.state === "draw")
    return <div></div>;
}

// class Toolbar extends Component {
//   render() {
//     return (
//       <div className="toolbar">
//         <div className="left">
//           <Button image={board} text="" hint=""/>
//         </div>
//         <div className="right">
//           <div className="function">
//             <Button image={deleteIcon} text="" hint="clear"/>
//             <Button image={done} text="" hint="done"/>
//             <Button image={textIcon} text="" hint="type"/>
//             <Button image={pen} text="" hint="draw"/>
//           </div>
//           <Button image={profile} text="Guest" hint=""/>
//         </div>
//       </div>
//     );
//   }
// }

// export default Toolbar;


