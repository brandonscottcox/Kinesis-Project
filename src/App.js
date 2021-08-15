import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import Navbar from "./components/navbar/Navbar";
import React from "react"
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import About from "./components/About";
import Products from "./components/Products";
import Home from "./components/Home";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="App">
      <Router>
      <Navbar />
      <Switch>
      <Route path="/" exact component={Home}/>
      <Route path="/about" component={About}/>
      <Route path="/products" component={Products} />
      <Route path="/contact" component={Contact} />
      </Switch>
      </Router>
    </div>
  );
}

export default App;