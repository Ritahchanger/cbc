import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Banner from "./pages/Banner/Banner";
import Login from "./components/Authentication/Login";
import Signup from "./components/Authentication/Signup";
import './index.css'
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/home/Home";
import Senior from "./pages/Senior/Senior";
import Pri from "./pages/Pri/Pri";
import Junior from "./pages/Junior/Junior";
const App = () => {




  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Banner} />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={Signup} />
          <Route path="/home" component={Home} />
          <Route path="/senior" component={Senior} />
          <Route path="/primary" component={Pri} />
          <Route path="/junior" component={Junior} />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
