import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchCampusThunk, 
  editStudentThunk,
  fetchAllStudentsThunk } 
from "../../store/thunks";

import { CampusView} from "../views";

class CampusContainer extends Component {

  componentDidMount() {
    //getting campus ID from url
    this.props.fetchCampus(this.props.match.params.id);
    this.props.fetchAllStudents();
  }

  removeStudent = async event => {
    let student = {
      id: event.id,
      firstname: event.firstname,
      lastname: event.lastname,
      email: event.email,
      campusId: null,
      gpa: event.gpa
    };
    await this.props.editStudent(student)
    await this.props.fetchCampus(this.props.match.params.id);
    await this.props.fetchAllStudents(); //refreshes without having refresh the page
  }

  addStudent = async event => {
    let student = {
      id: event.id,
      firstname: event.firstname,
      lastname: event.lastname,
      email: event.email,
      campusId: this.props.campus.id,
      gpa: event.gpa
    };
    await this.props.editStudent(student)
    await this.props.fetchCampus(this.props.match.params.id);
    await this.props.fetchAllStudents();
  }

  render() {
    return (
      <CampusView 
        campus={this.props.campus}
        students={this.props.students}
        allStudents={this.props.allStudents}
        addStudent={this.addStudent}
        removeStudent={this.removeStudent}
      />
    );
  }
}

// map state to props
const mapState = (state) => {
  return {
    campus: state.campus,
    students: state.campus.students,
    allStudents: state.allStudents
  };
};

// map dispatch to props
const mapDispatch = (dispatch) => {
  return {
    fetchCampus: (id) => dispatch(fetchCampusThunk(id)),
    editStudent: (student) => dispatch(editStudentThunk(student)),
    fetchAllStudents: () => dispatch(fetchAllStudentsThunk())
  };
};

export default connect(mapState, mapDispatch)(CampusContainer);