import React, { Component } from 'react';
import {Link}from 'react-router-dom';

class AddCourse extends Component {
    render() {
        return (
            <div>
               <div>
               <h1>Hello from Add course</h1>    
               </div> 
               <Link to='/EditHole'>Edit Hole</Link>
            </div>
        );
    }
}

export default AddCourse;