import React from "react";
import { Route, Switch } from "react-router-dom";
import Header from "./common/Header";
import PageNotFound from "./PageNotFound";
import HomePage from "./home/HomePage";
import AboutPage from "./about/AboutPage";
import LoginPage from "./login/LoginPage";
import RegisterPage from "./register/RegisterPage";

const App = () => {
  return (
    <div className="container-fluid">
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/about" component={AboutPage} />
        <Route path="/login" component={LoginPage} />
        <Route path="/sign-up" component={RegisterPage} />
        <Route component={PageNotFound} />
      </Switch>
      {/* <ToastContainer autoClose={3000} hideProgressBar /> */}
    </div>
  );
}

export default App;
