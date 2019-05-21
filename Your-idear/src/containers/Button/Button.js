import React from 'react';
import './Button.css';

// class Button extends Component {
//   render() {
//     return (
//       <button></button>
//     );
//   }
// }

// export default Button;

export default ({ image, text, hint, onClick }) => 
{ 
  if(text === "")
    return <div className="myButton">
      <button onClick={onClick}><img src={image} className="myButton1" /></button>
      <span className="hint">{hint}</span>
    </div>;
  else
    return <div className="myButton2">
    <img src={image}/>
    <div>{text}</div>
  </div>;
}
