import React from 'react';
import './PostIt.css';
import Input from '../Input/Input';

// class PostIt extends Component {
//   render() {
//     if()
//     return (
//       <div className="postit-container">
//         <div className="postit"><Input /></div>
        
//       </div>
//     );
//   }
// }

// export default PostIt;

export default ( { state, postText, postTextContent } ) => 
{ 
  if(state === "original")
    return <div className="postit-container">
      <div className="postit">
        <div className="inputField">
          <textarea disabled cols="30vw" rows="30vw" value={postTextContent}>
          </textarea>
          {/* <input placeholder="Write down something..."/> */}
        </div>
      </div>
    </div>;
  else
    return <div className="postit-container">
      <div className="postit">
        <Input postText={postText} postTextContent={postTextContent}/>
      </div>
    </div>;
    
}