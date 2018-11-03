import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
} from 'react-router-dom';
import { connect } from 'react-redux';
import './App.css';
import Signin from './components/Signin/Signin';
import Profile from './components/Profile/profile'
import WritePost from './components/WritePost/WritePost';
import DisplayPostContent from './components/DisplayPost/Content/Content';
import Home from './components/Home/Home';
import SiginUp from './components/Signup/Signup';
//check for authentication and render the required route
const PrivateRoute = ({ component: Component, auth: auth, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props =>
        auth == 'True' ? (
          <Component {...props} />
        ) : (
            <Redirect
              to={{
                pathname: "/signin",
                state: { from: props.location }
              }}
            />
          )
      }
    />
  )
};

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <PrivateRoute exact path="/" auth={this.props.auth} component={Profile} />
          <PrivateRoute path="/profile" auth={this.props.auth} component={Profile} />
          <PrivateRoute  path="/home" auth={this.props.auth} component={Home} />
          <PrivateRoute exact path="/writepost" auth={this.props.auth} component={WritePost} />
          <PrivateRoute path = "/displaypost" auth = {this.props.auth} component = {DisplayPostContent} />
          <Route  path="/signup" auth={this.props.auth} component={SiginUp} />
          <Route export path="/signin" component={Signin} />
        </div>
      </Router>
    );
  }
}

function mapStateToProps(data) {
  return { auth: data.userData.auth };
}

export default connect(mapStateToProps)(App);
