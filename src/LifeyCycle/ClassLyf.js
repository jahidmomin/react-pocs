import React, { Component } from "react";

export default class ClassLyf extends Component {

  constructor(){
    super();
    this.state={username:"test"}
    alert("Constructor")
  }

  componentDidMount(){
    alert("Componenet Render - DID Mount")
  }

  componentWillMount(){
    alert("componentWillMount - INIALIZE COMPOONENET")
  }

  componentWillUnmount(){
    alert("WIll UNMOUNt- CLEAR")
  }
  render() {
    return <div>Hey I am Class Component</div>;
  }
}
