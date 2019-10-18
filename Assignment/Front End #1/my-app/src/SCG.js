import React, { Component } from 'react';
import './App.css';
import  Header  from "./header";
import  Footer  from "./footer";
import  Content  from "./content";

class SCG extends Component {
  render() {
    return (
      <div className="App-content">
        <Header/>
        <Content/>
        <Footer/>
      </div>
    );
  }
}




export default SCG;
