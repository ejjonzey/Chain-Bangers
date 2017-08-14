import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Home from './components/Home';
import Course from './components/Course';
import AddCourse from './components/AddCourse';
import EditHole from './components/EditHole';
import Hole from './components/Hole';



class App extends Component {

  
  render() {
    return (
      <Router>
        <div>
          <div>
            <Link to='/'>Home</Link>
          </div>
          <div>
            <Route exact path="/" component={Home}/>
            <Route path="/AddCourse" component={AddCourse}/>
            <Route path="/Course" component={Course}/>
            <Route path="/EditHole" component={EditHole}/>
            <Route path="/Hole" component={Hole}/>
            
          </div>
        </div>
        </Router>
    );
  }
}

export default App;
