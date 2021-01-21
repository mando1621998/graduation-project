import React  from "react";
import NavBar from './Components/NavBar/NavBar'
import Home from './Components/Home/Home'
import About from './Components/About/About'
import Contact from './Components/Contact/Contact'
import Services from './Components/Services/Services'

import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/services" component={Services} />
          <Route path="/About" component={About} />
          <Route path="/Contact" component={Contact} />
            
        </Switch>
      </div>
    </Router>
  );
}

export default App;
