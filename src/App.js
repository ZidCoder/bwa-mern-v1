import React from "react";
import { BrowserRouter as Router, Route } from 'react-router-dom'

import "assets/scss/style.scss";
// import Button from "./index.js";
import LandingPage from "pages/LandingPage.js";

function App() {
  return (
    <div className="App">
      <Router>
        <Route path="/" component={LandingPage}>

        </Route>
      </Router>
    </div>
  );
}

export default App;
