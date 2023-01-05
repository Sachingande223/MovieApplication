import React, { Component } from "react";
import { Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import AuthService from "./services/auth.service";

import Login from "./components/login.component";
import Register from "./components/register.component";
import Home from "./components/Home/home.component";
import Profile from "./components/profile.component";
import Footer from './components/Footer/Footer.jsx';
import Dashboard from './components/Dashboard/Dashboard';
import ReadNow from './components/ReadNow/ReadNow';
import SearchHome from './search_components/Home/Home';
import NotFound from './search_components/NotFound/NotFound';
import Movie from './search_components/Movie/Movie';
import Card from "./components/card/Card";

class App extends Component {
  constructor(props) {
    super(props);
    this.logOut = this.logOut.bind(this);

    this.state = {
    
      currentUser: undefined
    };
  }

  componentDidMount() {
    const user = AuthService.getCurrentUser();

    if (user) {
      this.setState({
        currentUser: user,
      });
    }
  }

  logOut() {
    AuthService.logout();
  }

  render() {
    const { currentUser} = this.state;

    return (
      <div className="app">
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <Link to={"/"} className="navbar-brand">
            StarBuff
          </Link>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
          {currentUser && (
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to={"/home"} className="nav-link">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/favorite"} className="nav-link">
                Favorite
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/search"} className="nav-link">
                Search
              </Link>
            </li>
          </ul>
          )}

          {currentUser ? (
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link className="nav-link">
                  Welcome {currentUser.username}
                </Link>
              </li>
              <li className="nav-item">
                <a href="/login" className="nav-link" onClick={this.logOut}>
                  LogOut
                </a>
              </li>
            </ul>
          ) : (
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link to={"/login"} className="nav-link">
                  Login
                </Link>
              </li>

              <li className="nav-item">
                <Link to={"/register"} className="nav-link">
                  Sign Up
                </Link>
              </li>
            </ul>
          )}
          </div>
        </nav>

        <div>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/home" component={Dashboard} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/profile" component={Profile} />
            <Route exact path="/favorite" component={ReadNow} />
            <Route exact path="/search" component={SearchHome} />
            <Route exact path="/ss" component={Card} />
            <Route path="/:movieId" component={Movie} exact />
            <Route component={NotFound} />
          </Switch>
        </div>
        <Footer footertext = "Copyright &copy; 2022 StarBuff"/>
      </div>
    );
  }
}

export default App;
