import React, { Component } from "react";
import './Dashboard.css'

import UserService from "../../services/user.service";

export default class Home extends Component {   // Renders the contents for the landing page
  constructor(props) {
    super(props);

    this.state = {
      content: ""
    };
  }

  componentDidMount() {
    UserService.getPublicContent().then(
      response => {
        this.setState({
          content: response.data
        });
      },
      error => {
        this.setState({
          content:
            (error.response && error.response.data) ||
            error.message ||
            error.toString()
        });
      }
    );
  }

  render() {
    return (
      <div className="img1">
            <div className="dashboard">
                <h1 class="font-weight-bold">Unlimited Movies</h1>
                <h1 class="font-weight-bold">Unlimited Entertainment</h1>
            </div>
      </div>
    );
  }
}
