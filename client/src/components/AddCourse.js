import React, { Component } from 'react';
import {Link, Redirect}from 'react-router-dom';
import axios from 'axios';



class AddCourse extends Component {
  constructor(){
    super();
    this.state = {
      redirect: false,
    course: {
      name: "",
      location: "",
      holes: "",
      image: "",
      description: ""
    }
    }
  }

  _handleSubmit = (e) => {
    e.preventDefault();
    axios.post("/api/course", this.state.course).then((res) => {
      console.log("Success!");
      this.setState({redirect:true})
    })
    .catch(err => console.log(err));
  };

  _handleChange =(event)=>{
    const attributeName = event.target.name;
    const attributeValue = event.target.value;
    const course = {...this.state.course};
    course[attributeName] = attributeValue;

    this.setState({course})
  }


    render() {
      if (this.state.redirect){
        return <Redirect to='/Course'/>
      } else
        return (
            <div>
               <div>
                   <h1>Add A Course</h1>
               <form onSubmit={this._handleSubmit}>
               <label>
              Name:
              <input type="text" name="name" onChange={this._handleChange} value={this.state.course.name}/>
              <br/>
              Location:
              <input type="text" name="location" onChange={this._handleChange} value={this.state.course.location}/>
              <br/>
              Holes:
              <input type="text" name="holes" onChange={this._handleChange} value={this.state.course.holes}/>
              <br/>
              Image:
              <input type="text" name="image" onChange={this._handleChange} value={this.state.course.image}/>
              <br/>
              description:
              <input type="text" name="description"onChange={this._handleChange} value={this.state.course.description} />
              <button type="submit" value="Submit">Submit</button>
               </label>
              </form>    
               </div> 
               <Link to='/EditCourse'>Edit course</Link>
            </div>
        );
    }
}

export default AddCourse;