import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Banner from "./pages/Banner/Banner";
import Login from "./components/Authentication/Login";
import Signup from "./components/Authentication/Signup";
import './index.css'
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/home/Home";
const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Banner} />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={Signup} />
          <Route path="/home" component={Home} />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
