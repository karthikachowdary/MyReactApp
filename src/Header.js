//HTML attribute declartions examples
//import './index.css';
export function Header(){

    return(<h1 id='name' className="text-color">
        Karthika
        <div>
            {sum(5,9)}
            <label htmlFor="click_name">click here</label>
            <input type="checkbox" id="click_name" />
        </div>
    </h1>)
}
function sum(t1,t2){
    return alert(t1*t2);
}










/*let menus = ['Home','About','Test'];
    
let header = <header><ul>
  <li>{menus[0]}</li>
  <li>{menus[1]}</li>
  <li>{menus[2]}</li>
  </ul></header>

  export function Header(){

    return header;
  }
  //export default Header;*/