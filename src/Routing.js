import React from "react";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import Home from "./components/Home";
import JobList from "./components/JobList";
import NavBar from "./components/NavBar";
import Read from "./components/Read";

function Routing() {
  return (
    <div class="container ">
      <NavBar />
      <Router>
        {/* <button class="btn btn-success mt-3 shadow-lg ">
          <Link to="/home">
            <strong class="text-white">Companies</strong>
          </Link>
        </button> */}
        <Route exact path="/jobs" component={JobList}></Route>
        <Route exact path="/read" component={Read}></Route>
        <Route exact path="/" component={Home}></Route>
      </Router>
    </div>
  );
}

export default Routing;
