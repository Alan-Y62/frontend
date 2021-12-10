import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchStudentThunk, editStudentThunk } from "../../store/thunks";
import { StudentView } from "../views";
import { EditStudentView } from "../views";
import { Redirect } from 'react-router-dom';


class StudentContainer extends Component {

  constructor(props){
    super(props);
    this.state = {
      firstname: this.props.match.firstname, 
      lastname: this.props.match.lastname,
      imageUrl: this.props.match.imageUrl,
      email: this.props.match.email,
      campusId: this.props.match.campusId,
      gpa: this.props.match.gpa,
      redirect: false, 
      redirectId: null,
      edit: false
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

  handleEdit = () => {
    if(this.state.edit) {
      this.setState({
        edit: false
      })
    }
    else {
      this.setState({
        edit: true
      })
    }
  }

  handleSubmit = async event => {
    event.preventDefault();
    if(this.state.campusId === "") {
      this.setState({
        campusId: null
      })
    }
    let student = {
      id: this.props.match.params.id,
      firstname: this.state.firstname,
      lastname: this.state.lastname,
      imageUrl: this.state.imageUrl,
      email: this.state.email,
      campusId: this.state.campusId,
      gpa: this.state.gpa
    };
    await this.props.editStudent(student);

    this.setState({
      redirect: true,
      redirectId: student.id
    });
  }

  render() {
    if(this.state.redirect) {
      return (<Redirect to={`/students`}/>)
    }
    if(this.state.edit) {
      return (<EditStudentView
        student={this.props.student}
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}
        handleEdit={this.handleEdit}
      />
      )
    }
    else {
      return (  
        <StudentView 
          student={this.props.student}
          handleEdit={this.handleEdit}
        />
      );
    }
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
    editStudent: (student) => dispatch(editStudentThunk(student))
  };
};

export default connect(mapState, mapDispatch)(StudentContainer);