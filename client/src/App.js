import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Home from './components/Home';
import Course from './components/Course';
import AddCourse from './components/AddCourse';


class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <div>
            <Link to='/'>Home</Link>
            <Link to='/AddCourse'>Add Course</Link>
          </div>
          <div>
            <Route exact path="/" component={Home}/>
            <Route  path="/AddCourse" component={AddCourse}/>
          </div>
        </div>
        </Router>
    );
  }
}

export default App;
