import React, { Component } from "react";
 
import Navbar from "reactjs-navbar";
import './style.css';
import logo from "./logo.png";
import Loader from "react-loader-spinner";
import {
  
  faUserCircle,

} from "@fortawesome/free-solid-svg-icons";
 
import "reactjs-navbar/dist/index.css";
 
class App extends Component {
  state = {
    isLoading: false,
  };
 
  render() {
    return (
      <Navbar
        logo={logo}
        loader={<Loader type="Puff" color="#000000" height={25} width={25} />}
        isLoading={this.state.isLoading}
        menuItems={[
          {
            icon:  faUserCircle,
            title: "Admin",
            isAuth: true,
            
          },
        ]}
      />
    );
  }
}

export default App
