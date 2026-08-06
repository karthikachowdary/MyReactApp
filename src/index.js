import React from "react";
import ReactDOM from "react-dom/client";
import AppC from './App';

/*let h1 = React.createElement('h1',{},"this is h1 tag");
let root = ReactDOM.createRoot(document.getElementById('root'));
root.render(h1);*/

 let root = ReactDOM.createRoot(document.getElementById('root'));

// let name = 'Karthika';

// let menu =(<ul>
//   <li>{name}</li>
//   <li>Home</li>
// <li>About</li>
// </ul>)
// function Menu(){
//   /*console.log(p);
//   console.log(x);
//   console.log(xyz);
//   return menu;*/
// }
// function Header(){
//   //return (header);
// }
// class Menuclass extends React.Component{

//   render(){
//     let menus = ['Home','About','Test'];
    
// let header = <header><ul>
//   <li>{menus[0]}</li>
//   <li>{menus[1]}</li>
//   <li>{menus[2]}</li>
//   </ul></header>
//     return header;
//   }
// }
//root.render(<Menu></Menu>);
// root.render(<AppC/>)
//root.render(<Header></Header>);
//root.render(<Menuclass/>)
/* child props*/

root.render(<AppC name='btns'>
  <h1>This is my first application</h1>
<button style={{margin:10}}>call</button>
<button>text</button>

</AppC>);
//export default Header
