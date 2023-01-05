import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import AuthService from "../services/auth.service";

import "./profile.css";

export default class Profile extends Component {      // On login the Profile component is 
                                                      // rendered and redirected to the home page
  constructor(props) {
    super(props);

    this.state = {
      redirect: null,
      userReady: false,
      currentUser: { username: "" }
    };
  }

  componentDidMount() {
    const currentUser = AuthService.getCurrentUser();

    if (!currentUser) this.setState({ redirect: "/home" });
    this.setState({ currentUser: currentUser, userReady: true })
    
  }

  render() {
    if (this.state.redirect) {
      return <Redirect to={this.state.redirect} />
    }

    return (
      <div className="container">
        {(this.state.userReady) ?
        <div>
          <Redirect to={"/home"} />
      </div>: null}
      </div>
    );
  }
}
