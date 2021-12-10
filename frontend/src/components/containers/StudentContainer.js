import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchStudentThunk, editStudentThunk } from "../../store/thunks";
import { StudentView } from "../views";
import { Redirect } from 'react-router-dom';


class StudentContainer extends Component {

  constructor(props){
    super(props);
    this.state = {
      firstname: "", 
      lastname: "",
      imageurl: "",
      email: "",
      campusId: null,
      gpa: null,
      redirect: false, 
      redirectId: null
    };
  }

  componentDidMount() {
    //getting student ID from url
    this.props.fetchStudent(this.props.match.params.id);
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleSubmit = async event => {
    event.preventDefault();
    
    let student = {
      firstname: this.state.firstname,
      lastname: this.state.lastname,
      imageurl: this.state.imageurl,
      email: this.state.email,
      campusId: this.state.campusId,
      gpa: this.state.gpa
    };
  
    let editStudent = await this.props.editStudent(student);

    this.setState({
      redirect: true,
      redirectId: this.props.match.params.id
    });
  }

  render() {
    console.log(this.props)
    if(this.state.redirect) {
      return (<Redirect to={`/students`}/>)
    }
    return (
      
      <StudentView 
        student={this.props.student}
        handleSubmit={this.handleSubmit}
        handleChange={this.handleChange}
      />
    );
  }
}

// map state to props
const mapState = (state) => {
  return {
    student: state.student,
  };
};

// map dispatch to props
const mapDispatch = (dispatch) => {
  return {
    fetchStudent: (id) => dispatch(fetchStudentThunk(id)),
    editStudent: (id) => dispatch(editStudentThunk(id))
  };
};

export default connect(mapState, mapDispatch)(StudentContainer);