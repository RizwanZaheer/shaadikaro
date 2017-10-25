import React, { Component } from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import Payments from "./Payments";

class Header extends Component {
  renderContent() {
    switch (this.props.auth) {
      case null:
        return;
        break;
      case false:
        return <li>
          <a href="/auth/google">Login With Google</a>
        </li>
        break;
      default:
        return [
          <li key='1'>
            <Payments />
          </li>,
          <li key='2' style={{padding:'0 20px'}}> 
            Credits: {this.props.auth.credits}
          </li>,
          <li key='3'>
            <NavLink to="/api/logout">Logout</NavLink>
          </li>
        ];
      break;
    }
  }
  render() {
    return (
      <nav>
        <div className="nav-wrapper">
          <NavLink className="left brand-logo" to={this.props.auth ? "/surveys" : "/"}>
            ShaadiKaro
          </NavLink>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            {this.renderContent()}
          </ul>
        </div>
      </nav>
    );
  }
}
// pass state as a props
// state.auth usad at place of auth ES6 distruct using
const mapStateToProps = ({ auth }) => {
  // return { auth: state.auth} OR state.auth come form store
  // auth come from store state obj
  // return pass this state as a prop in component to render etc
  return { auth };
};

export default connect(mapStateToProps)(Header);
