/*Functional component example*/
/*function User(Props){

    return <>
        <h1 className="primary">Name: {Props.name}</h1>
        <h1 className="secondary">Age: {Props.age}</h1>
        <h1 className="info">Place: {Props.place}</h1>
    </>
}*/

/*import React from "react"

class User extends React.Component{

    render(){
        return <>
        <h1 className="primary">Name: {this.Props.name}</h1>
        <h1 className="secondary">Age: {this.Props.age}</h1>
        <h1 className="info">Place: {this.Props.place}</h1>
    </>
    }

}*/
/*
function User(Props){

    return <>
        <h1 className="primary">Id: {Props.id}</h1>
        <h1 className="primary">Name: {Props.name}</h1>
        <h1 className="secondary">Age: {Props.age}</h1>
        <h1 className="info">Place: {Props.place}</h1>
    </>
}
*/
import React from "react"
class User extends React.Component{

    render(){
        return <div style={{border:"10 solid #ccc"}}>
        
        <h1 className="primary">Name: {this.props.name}</h1>
        <h1 className="secondary">Age: {this.props.age}</h1>
        <h1 className="info">Place: {this.props.place}</h1>
        <h1 className="primary">Id: {this.props.row_id}</h1>
    </div>
    }

}
export default User;