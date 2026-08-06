/*child props example */

function App(props){
    console.dir(props);
    return (
        <>
        <h1>Karthika J</h1>
        <p style={{display:'flex',padding:20}}>{props.children}</p>
        </>
    )
}
// function App(){

//     return <div>Functional component</div>;
// }

// let App = ()=>{
//     return <h1>Arrow function component 
//      </h1>
// }
// let App = function (){
//     return <h1>Annonymous function component</h1>
    
// }
/*Props in Recat*/

/*import User from "./User";

function App(){

    let users = [
        {id:'1', name:'Karthi',age:'37',place:'Hyderabad'},
        {id:'2', name:'Karthi1',age:'37',place:'Hyderabad'},
        {id:'3', name:'Karthi2',age:'37',place:'Hyderabad'}
    ]
    return ( <>
    {
        users.map(
            (item)=>{
                return <User key={item.id} row_id={item.id} name={item.name} age={item.age} place={item.place} />
            }
        )
    }
    </>
    )
}

*/
/* attributes In React examples */
/*import './App.css'

export default function App(){
    let s1 = {color:'green', fontSize:'15px'}
    return (
    <>
    
    <h1  className='primary'>This is my App component</h1>
    <p>Paragraph</p>
    </>)

}

*/
/*export let person = {name:'karthika',
    age:36,
    location:'Test'

};
export let x =100;
let y = 20*10;
export default y;*/
/* Including header file example */

/*import {Header} from './Header';

function Test(){
    return <div>
<h1>My Name Is </h1>
<Header/>

    </div>;
}
export default Test;*/

export default App