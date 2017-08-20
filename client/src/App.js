import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import styled from 'styled-components';


import Home from './components/Home';
import Course from './components/Course';
import AddCourse from './components/AddCourse';
import EditCourse from './components/EditCourse';
import Hole from './components/Hole';
import CoursePage from './components/CoursePage';



class App extends Component {

  
  render() {
    const NavBar = styled.div`
    display: flex;
    justify-content: space-between;
    color: white;
    background-color:black;
    height: 5vh;
    align-items: center;
    padding-left: 15px;
    a {
      text-decoration: none;
      color: #7448A1;
    }
    a:hover{
      color: #59387C;
    }
`
    return (
      <Router>
        <div>
          <div>
            <NavBar>
            <Link to='/'>Home</Link>
            </NavBar>
          </div>
          <div>
            <Route exact path="/" component={Home}/>
            <Route path="/AddCourse" component={AddCourse}/>
            <Route path="/Course" component={Course}/>
            <Route path="/CoursePage/:courseId" component={CoursePage}/>
            <Route path="/EditCourse/:courseId" component={EditCourse}/>
            <Route path="/Hole" component={Hole}/>
          </div>
        </div>
        </Router>
    );
  }
}

export default App;
