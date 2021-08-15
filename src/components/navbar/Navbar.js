import React, { Component } from "react";
import { MenuItems } from "./MenuItems";
import "./Navbar.css"
import logo from "../../anon.svg";
import "../../App.css";
import { Button } from "../Button"
import {Link} from "react-router-dom"


class Navbar extends Component {
    state = { clicked: false }

    handleClick = () => {
        this.setState({ clicked: !this.state.clicked })
    }

  render() {
    return (
    <header>
      <nav className="NavbarItems">
      <div className="App-img">
          <img src={logo} className="App-logo" alt="logo" />
        </div>
        <h1 className="navbar-logo">Kinesis<i className="fab fa-react"></i></h1>
        <div className="menu-icon" onClick={this.handleClick}>
            <i className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}></i>
        </div>
        <ul className={this.state.clicked ? "nav-menu active" : "nav-menu"}>
          {MenuItems.map((item, index) => {
            return (
              <Link to={item.url}>
              <li key={index}>
                <a className={item.cName} href={item.url}>
                    {item.title}
                </a>
              </li>
              </Link>
            );
          })}
        </ul>
        <Button>Sign Up</Button>
      </nav>
      </header>
    );
  }
}

export default Navbar;
