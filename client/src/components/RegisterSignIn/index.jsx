import React, { Component } from 'react';
import Axios from 'axios';



export default class MainLog extends Component {
    constructor(props){
        super(props)
        console.log('hello props from MainLog',props)
        this.state={
            name: "",
            email: "",
            view:props.view,
            id:props.id
        }
        this.updateId=this.props.updateId.bind(this)
        this.handleLogin=this.handleLogin.bind(this)
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
handleIdChange (param) {
 this.props.updateId(param)

    }
handleLogin() {
        Axios
        .post("http://localhost:8000/",{"username":this.state.name,"email":this.state.email,"score":this.state.globalScore})
        .then((res)=>{ console.log("response is sent",res.body)})
        .catch((err)=>{console.log("error from the server to post request",err)});

        Axios
        .get("http://localhost:8000/home",(req,res)=>{console.log("hellllloooo")})
        .then((response)=>{console.log("response from register",response)})
        .catch()

        console.log("updateId?", this.props);
        Axios
        .get('http://localhost:8000/user',{
            params:{
                "username":this.state.name,
                "email":this.state.email
            }
        })
        .then( (response)=>{this.updateId(response.data); console.log("this is the id",this.state.id)
        if (this.state.email !== "" && this.state.name !== "") {
            this.props.changeView("Rps");
            console.log("props???", this.state.view);
            } else {
            alert("you have to fill the blankes");}
            })
        .catch((err)=>{console.log("error from the server to get request /user",err)});


}

    render() {
        console.log("this is the id 22",this.state.id)
                return(
                    <div>
                    <h1 style={{color:"white"}}>Enter your PseudoName</h1>
                    <form>
                        <label style={{color:"white"}}>PseudoName :</label>
                        <input type="text" name="name" value={this.state.name} onChange={this.handleNameChange.bind(this)} />
                        <br />
                        <label style={{color:"white"}}>Email :</label>
                        <input type="text" name="email"  value={this.state.email} onChange={this.handleEmailChange.bind(this)} />
                        <br />
                    </form>
                    <button onClick={()=>{this.handleLogin()}}>Submit</button>
                    </div>
                )
            }
    }
