import React from "react";
import Navbartop from './Components/Navbartop/Navbartop';
import NavBar from './Components/NavBar/NavBar';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import Services from './Components/Services/Services';
import Signup_Craftsman from './Components/Registration/Craftsman/Signup_Craftsman';
import Signup_Customer from './Components/Registration/Customer/Signup_Customer';
import Login from './Components/Registration/Login/Login';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbartop />
        <NavBar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/services" component={Services} />
          <Route path="/About" component={About} />
          <Route path="/Contact" component={Contact} />
          <Route path="/Signup_Craftsman" component={Signup_Craftsman} />
          <Route path="/Signup_Customer" component={Signup_Customer} />
          <Route path="/Login" component={Login} />
        </Switch>
      </div>
    </Router>
  );
}
export default App;
