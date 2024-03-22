import React from 'react'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
import Banner from './pages/Banner/Banner'
import Login from './components/Authentication/Login'
import Student from './components/Authentication/Student'
import Tutor from './components/Authentication/Tutor'
import Parent from './components/Authentication/Parent'
import './index.css'
import Home from './pages/home/Home'
import Senior from './pages/Senior/Senior'
import Pri from './pages/Pri/Pri'
import Junior from './pages/Junior/Junior'
import Mathematics from './lessons/Mathematics'
import English from './lessons/English'
import Swahili from './lessons/Swahili'
import IntegratedScience from './lessons/IntegratedScience'
import SocialStudies from './lessons/SocialStudies'
import Business from './lessons/Business'
import Agriculture from './lessons/Agriculture'
import PreTechnical from './lessons/PreTechnical'
import ReligiousStudies from './lessons/ReligiousStudies'

// DASHBOARD ROUTES
import Assignment from './components/Dashboard/Assignment'
import Notification from './components/Dashboard/Notification'
import UserProfile from './components/Profile/UserProfile'
import Overview from './components/Dashboard/Overview'
import Progress from './components/Dashboard/Progress'
import Branch from './components/Branch/Branch'

import { useState, useEffect } from 'react'

const PrivateRoute = ({ component: Component, ...rest }) => {
  const isAuthenticated = !!localStorage.getItem('email')
  return (
    <Route
      {...rest}
      render={props =>
        isAuthenticated ? <Component {...props} /> : <Redirect to='/login' />
      }
    />
  )
}
const App = () => {
  const [currentIframe, setCurrentIframe] = useState(null)
  const [iframeSrc, setIframeSrc] = useState('')

  const handleNavLinkClick = iframeSrc => {
    setCurrentIframe(iframeSrc)
  }
  const extractSrcFromIframe = iframeCode => {
    const srcRegex = /<iframe[^>]*src="([^"]*)"[^>]*>/
    const match = iframeCode.match(srcRegex)
    if (match && match.length >= 2) {
      return match[1]
    }
    return null
  }
  useEffect(() => {
    if (currentIframe) {
      const extractedSrc = extractSrcFromIframe(currentIframe)
      if (extractedSrc) {
        setIframeSrc(extractedSrc)
      }
    }
  }, [currentIframe])
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={Banner} />
          <Route path='/login' component={Login} />
          <Route path='/tutor-signup' component={Tutor} />
          <Route path='/parent-signup' component={Parent} />
          <Route path='/student-signup' component={Student} />
          <Route path='/branch' component={Branch} />
          <Route path='/home' component={Home} />
          <PrivateRoute path='/senior' component={Senior} />
          <PrivateRoute path='/primary' component={Pri} />
          <PrivateRoute path='/junior' component={Junior} />
          <PrivateRoute path='/subjects/mathematics' component={Mathematics} />
          <PrivateRoute path='/subjects/english' component={English} />
          <PrivateRoute path='/subjects/swahili' component={Swahili} />
          <PrivateRoute
            path='/subjects/integrated_science'
            component={IntegratedScience}
          />
          <PrivateRoute
            path='/subjects/social_studies'
            component={SocialStudies}
          />
          <PrivateRoute
            path='/subjects/business_studies'
            component={Business}
          />
          <PrivateRoute path='/subjects/agriculture' component={Agriculture} />
          <PrivateRoute
            path='/subjects/technical_cocurricular'
            component={PreTechnical}
          />
          <PrivateRoute
            path='/subjects/religious_education'
            component={ReligiousStudies}
          />
          {/* DASHBOARD ROUTING */}
          <PrivateRoute path='/details/profile' component={UserProfile} />
          <PrivateRoute path='/details/overview' component={Overview} />
          <PrivateRoute path='/details/assignments'>
            <Assignment
              currentIframe={currentIframe}
              handleNavLinkClick={handleNavLinkClick}
              setCurrentIframe={setCurrentIframe}
              iframeSrc={iframeSrc}
            />
          </PrivateRoute>
          <PrivateRoute
            path='/details/progress-tracking'
            component={Progress}
          />
          <PrivateRoute path='/details/notification' component={Notification} />
        </Switch>
      </BrowserRouter>
    </div>
  )
}

export default App
