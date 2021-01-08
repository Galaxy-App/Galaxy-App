import React, { Component } from "react";
import Axios from "axios";

export default class MainLog extends Component {
  constructor(props) {
    super(props);
    console.log("hello props from MainLog", props);
    this.state = {
      name: "",
      email: "",
      view: props.view,
    };
  }
  handleNameChange(e) {
    this.setState({
      name: e.target.value,
    });
  }

  handleEmailChange(e) {
    this.setState({
      email: e.target.value,
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
  }
  componentDidMount() {
    Axios.get("http://localhost:8000/home", (req, res) => {
      console.log("hellllloooo");
    })
      .then((response) =>
        console.log("response from componentDidMount register", response)
      )
      .catch();
  }

  render() {
    return (
      <div>
        <h1 style={{ color: "white" }}>Enter your PseudoName</h1>
        <form>
          <label style={{ color: "white" }}>Name :</label>
          <input
            style={{ color: "white", margin: "20px" }}
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.handleNameChange.bind(this)}
          />
          <br />
          <label style={{ color: "white" }}>Email :</label>
          <input
            style={{ color: "white", margin: "20px" }}
            type="email"
            name="name"
            value={this.state.email}
            onChange={this.handleEmailChange.bind(this)}
          />
          <br />
        </form>
        <button
          onClick={this.handleLogin.bind(this)}
          style={{ color: "white" }}
        >
          Submit
        </button>
      </div>
    );
  }
}
