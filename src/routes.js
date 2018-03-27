import React from "react";
import {Switch , Route} from "react-router-dom";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import ClassList from "./components/ClassList/ClassList";
import Student from "./components/Student/Student";

export default (
    <Switch >
      <Route exact path="/" component={Home}/>
      <Route path="/about" component={About} />                  
      <Route component={ ClassList } path="/classlist/:class"/>
      <Route path="/Student/:id" component={Student}/>
    </Switch>
)