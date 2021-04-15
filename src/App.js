import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './App.css';
import Navigation from "./components/Navigation";
import Front from './components/Front';
import GetInTouch from './components/GetInTouch';
import MaintainAble from './components/MaintainAble';
import WhatWeDo from './components/WhatWeDo';


const App = () => {
  return (
    <Router>
      <Navigation />
      <section>
        <Switch> {/* Lav aldrig dots foran slash på Routes... Men gerne på Navigation/ Link... */}
          <Route exact path="/Front" component={Front}><Front /></Route>
          <Route exact path="/GetInTouch" component={GetInTouch}><GetInTouch /> </Route>
          <Route exact path="/MaintainAble" component={MaintainAble}><MaintainAble /></Route>
          <Route exact path="/WhatWeDo" component={WhatWeDo}><WhatWeDo /></Route>
        </Switch>
      </section>
    </Router>
  )
}

export default App;
