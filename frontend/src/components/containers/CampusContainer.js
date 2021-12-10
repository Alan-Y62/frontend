import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchCampusThunk, deleteStudentThunk } from "../../store/thunks";

import { CampusView } from "../views";

class CampusContainer extends Component {
  componentDidMount() {
    //getting campus ID from url
    this.props.fetchCampus(this.props.match.params.id);
  }

  render() {
    return (
      <CampusView 
        campus={this.props.campus}
        students={this.props.students}
        deleteStudent={this.props.deleteStudent}
      />
    );
  }
}

// map state to props
const mapState = (state) => {
  console.log(state)
  return {
    campus: state.campus,
    students: state.campus.students
  };
};

// map dispatch to props
const mapDispatch = (dispatch) => {
  return {
    fetchCampus: (id) => dispatch(fetchCampusThunk(id)),
    deleteStudent: (id) => dispatch(deleteStudentThunk(id))
  };
};

export default connect(mapState, mapDispatch)(CampusContainer);