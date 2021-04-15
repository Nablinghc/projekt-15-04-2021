import React from 'react';
import {
BrowserRouter as Router,
Switch,
Route,
Link
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
        <Switch>
          <Route path="./"><Front /></Route>
          <Route path="./GetInTouch"><GetInTouch /> </Route>
          <Route path="./MaintainAble"><MaintainAble /></Route>
          <Route path="./WhatWeDo"><WhatWeDo /></Route>
        </Switch>
      </section>
    </Router>
  )
}

export default App;
