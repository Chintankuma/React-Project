import React, { Component } from "react";
import logo from "../images/logo.svg";
import { FaAlignRight } from "react-icons/fa";
import { Link } from "react-router-dom";

export default class Navbar extends Component {
  state = {
    isOpen: false,
  };
  handleToggle = () => {
    this.setState(
      {
        isOpen: !this.state.isOpen,
      },
      console.log(this.state.isOpen)
    );
  };
  render() {
    const checkOpen = (isOpen) => {
      if (isOpen === true) {
        return "nav-links show-nav";
      } else {
        return "nav-links";
      }
    };
    return (
      <nav className="navbar">
        <div className="nav-center">
          <div className="nav-header">
            <Link to="/">
              <img src={logo} alt="Beach Resort"></img>
            </Link>
            <button
              type="button"
              className="nav-btn"
              onClick={this.handleToggle}
            >
              <FaAlignRight className="nav-icon"></FaAlignRight>
            </button>
          </div>
          <ul
            className={checkOpen(this.state.isOpen)}
            // className={
            //   this.state.className ? "nav-links show-nav" : "nav-links"
            // }
          >
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/rooms">Rooms</Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
