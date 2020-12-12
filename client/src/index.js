import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Redirect, BrowserRouter as Router } from "react-router-dom";
import WelcomePage from "./components/welcomePage/WelcomePage";
import HomePage from "./components/homePage/HomePage";
import LoginPage from "./components/loginPage/LoginPage";
import SignUpPage from "./components/signUpPage/SignUpPage";

const routing = (
  <Router>
    <div id="routing-container">
      <Route exact path="/">
        <Redirect to="/welcome"/>
      </Route>
      <Route path="/welcome" component={WelcomePage}></Route>
      <Route path="/home" component={HomePage}></Route>
      <Route path="/login" component={LoginPage}></Route>
      <Route path="/signup" component={SignUpPage}></Route>
    </div>
  </Router>
);

ReactDOM.render(routing, document.getElementById("root"));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

