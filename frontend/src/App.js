import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Banner from "./pages/Banner/Banner";
import Login from "./components/Authentication/Login";
import Signup from "./components/Authentication/Signup";
import './index.css'
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
          <Route path="/subjects/mathematics" component={Mathematics} />
          <Route path="/subjects/english" component={English} />
          <Route path="/subjects/swahili" component={Swahili} />
          <Route path="/subjects/integrated_science" component={IntegratedScience} />
          <Route path="/subjects/social_studies" component={SocialStudies} />
          <Route path="/subjects/business_studies" component={Business} />
          <Route path="/subjects/agriculture" component={Agriculture} />
          <Route path="/subjects/technical_cocurricular" component={PreTechnical} />
          <Route path="/subjects/religious_education" component={ReligiousStudies} />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
