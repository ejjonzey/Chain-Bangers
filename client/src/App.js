import React, { Component } from 'react';

import Home from './components/Home';
import Course from './components/Course';
import AddCourse from './components/AddCourse';
class App extends Component {
  render() {
    return (
      <div>
        <Home/>
        <Course/>
        <AddCourse/>
      </div>
    );
  }
}

export default App;
