import React from 'react';
import './Input.css';

export default (props) => 
{ 
  return <div className="inputField">
    <textarea cols="30vw" rows="30vw" placeholder="寫些什麼..." value={props.postTextContent} onChange={props.postText}>
    </textarea>
    {/* <input placeholder="Write down something..."/> */}
  </div>;
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


