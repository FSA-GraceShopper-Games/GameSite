import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Navbar extends Component {
  constructor(props) {
    super(props);

    this.renderLoginSignup = this.renderLoginSignup.bind(this);
    this.renderLogout = this.renderLogout.bind(this);
  }

  renderLoginSignup() {
    return (
      <ul className="navbar-nav navbar-inline">
        <li>
          <NavLink className="btn btn-info margin" to="/signup" activeClassName="active" role="button">Signup</NavLink>
        </li>
        <li>
          <NavLink className="btn btn-info" to="/login" activeClassName="active" role="button">Login</NavLink>
        </li>
      </ul>
    );
  }

  renderLogout() {
    return (
      <ul className="navbar-nav">
        <li>
          <button
            className="btn btn-info"
            onClick={this.props.logout}>
            Logout
          </button>
        </li>
      </ul>
    );
  }

  render() {
    return (
      <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="#">Ninja</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <a className="nav-link" href="#">Games <span className="sr-only">(current)</span></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Accessories</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Best Sellers</a>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="http://example.com" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Genre
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                <a className="dropdown-item" href="#">Action</a>
                <a className="dropdown-item" href="#">Adventure</a>
                <a className="dropdown-item" href="#">Role-playing</a>
                <a className="dropdown-item" href="#">Simulation</a>
                <a className="dropdown-item" href="#">Strategy</a>
                <a className="dropdown-item" href="#">Sports</a>
              </div>
            </li>
          </ul>
          <form className="form-inline mr-auto">
            <input className="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
          </form>
          { this.props.currentUser ? this.renderLogout() : this.renderLoginSignup() }
        </div>
      </nav>
    );
  }
}

export default Navbar
