import './global-styles/App.scss';
//react router dom
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
//page components
import HomePage from './pages/homepage/hompage.component';
import ProjectsPage from './pages/projectspage/projectspage.component';
import AboutMePage from './pages/aboutmepage/aboutmepage.component';
import ContactMePage from './pages/contactpage/contactmepage.component';
import ResumePage from './pages/resumepage/resumepage.component';
//animations
import { AnimatePresence } from 'framer-motion';

function App() {
  return (
    <Router>
      <Route
        render={({ location }) => (
          <AnimatePresence exitBeforeEnter initial={true}>
            <Switch location={location} key={location.pathname}>
              <Route exact path="/">
                <HomePage/>
              </Route>
              <Route path="/projects">
                <ProjectsPage/>
              </Route>
              <Route path="/aboutme">
                <AboutMePage/>
              </Route>
              <Route path="/contact">
                <ContactMePage/>
              </Route>
              <Route path="/resume">
                <ResumePage/>
              </Route>
            </Switch>
          </AnimatePresence>
        )}
      />
    </Router>
  )
}

export default App;
