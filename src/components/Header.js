import React, { Component } from "react";
import { Nav } from "reactstrap";
import { Link } from "react-router-dom";

class Header extends Component {
  render() {
    return (
      <Nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto col-6 d-flex justify-content-around">
            <li className="nav-item active">
              <Link to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link to="/prices">Prices</Link>
            </li>
            <li>
              <Link to="/album">Album</Link>
            </li>
          </ul>
        </div>
      </Nav>
    );
  }
}
export default Header;
