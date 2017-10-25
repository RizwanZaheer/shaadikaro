import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "../actions";

import Header from "./Header";
import Dashboard from "./Dashboard";
import SurveyNew from "./surveys/SurveyNew";
import "./app.css";

const Landing = () => <h2>Welcome in ShaadiKaro!</h2>;
const Surveys = () => <h2>Surveys Dashboard</h2>;

class App extends Component {
  componentDidMount = () => {
    this.props.fetchUser();
  };

  render() {
    return (
      <Router>
        <div className="container">
          <Header />
          <Route exact path="/" component={Landing} />
          <Route exact path="/surveys" component={Dashboard} />
          <Route path="/surveys/all" component={Surveys} />
          <Route path="/surveys/new" component={SurveyNew} />
        </div>
      </Router>
    );
  }
}

export default connect(null, actions)(App);
