import React, { Component } from 'react';
import axios from "axios";
export default class Student extends Component {
  constructor() {
    super();
     this.state ={
       studentInfo :{}
     }

  }
componentDidMount(){
  return axios.get(`http://localhost:3005/students/${this.props.match.params.id}`)
             .then(results=>{
               console.log(results.data)
               this.setState(
                 {
                   studentInfo : results.data
                 });
             });
}
  render() {
   const {studentInfo} = this.state;
    return (
      <div className="box">
        <h1>Student:</h1>
        <h1>{studentInfo.first_name} {studentInfo.last_name}</h1>
        <h4>Grade : {studentInfo.grade}</h4>
        <h4>Email : {studentInfo.email}</h4>
      </div>

    )
  }
}