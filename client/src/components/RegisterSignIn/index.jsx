import React, { Component } from 'react';
import Axios from 'axios';



export default class MainLog extends Component {
    constructor(props){
        super(props)
        console.log('hello props from MainLog',props)
        this.state={
            name: "",
            email: "",
            id:new Date(),
            view:props.view
        }
    };
handleNameChange (e) {
        this.setState({
            name: e.target.value,
            globalScore:this.props.globalScore
            });
        }

handleEmailChange (e) {
this.setState({
    email: e.target.value
    });
}
handleLogin() {
    console.log("EMail: " + this.state.email);
    console.log("Name: " + this.state.name);
    if (this.state.email !== "" && this.state.name !== "") {
    this.props.changeView("Rps");
    console.log("props???", this.state.view);
    } else {
    alert("you have to fill the blankes");
    }
    console.log("props???", this.state.view);
        console.log('props???',this.state.view)
        Axios
        .post("http://localhost:8000/",{"username":this.state.name,"email":this.state.email, "id":this.state.id,"score":this.state.globalScore}
        ).then((res)=>{
            console.log("response is sent",res.body)
        }).catch((err)=>{
            console.log("error from the server to post request",err)
        })
        Axios
        .get("http://localhost:8000/home",(req,res)=>{
            console.log("hellllloooo")
        })
        .then((response)=>console.log("response from register",response))
        .catch()
}
// componentDidMount(){

//     Axios
//     .get("http://localhost:8000/home",(req,res)=>{
//         console.log("hellllloooo")
//     })
//     .then((response)=>console.log("response from componentDidMount register",response))
//     .catch()
// }



    render() {
                return(
                    <div>
                    <h1>Enter your PseudoName</h1>
                    <form>
                        <label>Name :</label>
                        <input type="text" name="name" value={this.state.name} onChange={this.handleNameChange.bind(this)} />
                        <br />
                        <label>Email :</label>
                        <input type="text" name="email"  value={this.state.email} onChange={this.handleEmailChange.bind(this)} />
                        <br />
                    </form>
                    <button onClick={this.handleLogin.bind(this)}>Submit</button>
                    </div>
                )
            }
    }
