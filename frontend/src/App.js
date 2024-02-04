import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./index.css";
import Banner from "./pages/Banner/Banner";
import Login from "./components/Authentication/Login";
import Signup from "./components/Authentication/Signup";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Banner} />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={Signup} />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
