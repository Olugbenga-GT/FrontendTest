import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import {lazy, Suspense} from 'react'
import ball from './asset/ball.png'


const LandingPage = lazy(() => import("./views/active/Active"));
const SpacePage = lazy(() => import("./views/group/Group"));

function App() {
  return (
    <Router>
        <Suspense fallback = { <img src ={ball} alt = "ball" className ='ball'/>}>
          <Switch>
            <Route exact path = "/" component = {LandingPage} />
            <Route exact path = "/space" component = {SpacePage} />
          </Switch>
        </Suspense>
    </Router>
  );
}

export default App;
