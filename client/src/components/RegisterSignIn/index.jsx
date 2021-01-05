import React, { Component } from 'react';
import Axios from 'axios';



export default class MainLog extends Component {
    constructor(props){
        super(props)
        console.log('hello props from MainLog',props)
        this.state={
            name: "",
            email: "",
            view:props.view
        }
    };
handleNameChange (e) {
        this.setState({
            name: e.target.value
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
    this.props.changeView("Rps")
        console.log('props???',this.state.view)
}



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
