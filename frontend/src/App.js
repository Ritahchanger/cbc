import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Banner from "./pages/Banner/Banner";
import Login from "./components/Authentication/Login";
import Signup from "./components/Authentication/Signup";
import "./index.css";
import Home from "./pages/home/Home";
import Senior from "./pages/Senior/Senior";
import Pri from "./pages/Pri/Pri";
import Junior from "./pages/Junior/Junior";
import Mathematics from "./lessons/Mathematics";
import English from "./lessons/English";
import Swahili from "./lessons/Swahili";
import IntegratedScience from "./lessons/IntegratedScience";
import SocialStudies from "./lessons/SocialStudies";
import Business from "./lessons/Business";
import Agriculture from "./lessons/Agriculture";
import PreTechnical from "./lessons/PreTechnical";
import ReligiousStudies from "./lessons/ReligiousStudies";

// DASHBOARD ROUTES

import Announcements from "./components/Dashboard/Announcements";
import Assignment from "./components/Dashboard/Assignment";
import Notification from "./components/Dashboard/Notification";
import Messages from "./components/Dashboard/Messages";
import Overview from "./components/Dashboard/Overview";
import Profile from "./components/Dashboard/Profile";
import Progress from "./components/Dashboard/Progress";

const PrivateRoute = ({ component: Component, ...rest }) => {
  const isAuthenticated = !!localStorage.getItem("email");
  return (
    <Route
      {...rest}
      render={(props) =>
        isAuthenticated ? <Component {...props} /> : <Redirect to="/login" />
      }
    />
  );
};

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Banner} />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={Signup} />
          <PrivateRoute path="/home" component={Home} />
          <PrivateRoute path="/senior" component={Senior} />
          <PrivateRoute path="/primary" component={Pri} />
          <PrivateRoute path="/junior" component={Junior} />
          <PrivateRoute path="/subjects/mathematics" component={Mathematics} />
          <PrivateRoute path="/subjects/english" component={English} />
          <PrivateRoute path="/subjects/swahili" component={Swahili} />
          <PrivateRoute
            path="/subjects/integrated_science"
            component={IntegratedScience}
          />
          <PrivateRoute
            path="/subjects/social_studies"
            component={SocialStudies}
          />
          <PrivateRoute
            path="/subjects/business_studies"
            component={Business}
          />
          <PrivateRoute path="/subjects/agriculture" component={Agriculture} />
          <PrivateRoute
            path="/subjects/technical_cocurricular"
            component={PreTechnical}
          />
          <PrivateRoute
            path="/subjects/religious_education"
            component={ReligiousStudies}
          />

          {/* DASHBOARD ROUTING */}
          <PrivateRoute
            path="/details/profile"
            component={Profile}
          />
          <PrivateRoute
            path="/details/overview"
            component={Overview}
          />
          <PrivateRoute
            path="/details/announcements"
            component={Announcements}
          />
          <PrivateRoute
            path="/details/assignments"
            component={Assignment}
          />
          <PrivateRoute
            path="/details/progress-tracking"
            component={Progress}
          />
           <PrivateRoute
            path="/details/notification"
            component={Notification}
          />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
