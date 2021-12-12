import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchCampusThunk, 
  editStudentThunk,
  fetchAllStudentsThunk } from "../../store/thunks";

import { CampusView} from "../views";

class CampusContainer extends Component {

  constructor(props){
    super(props);
    this.state = {
      name: this.props.match.name, 
      address: this.props.campus.address,
      description: this.props.match.description,
    }
  }

  componentDidMount() {
    //getting campus ID from url
    this.props.fetchCampus(this.props.match.params.id);
  }

  render() {
    return (
      <CampusView 
        campus={this.props.campus}
        students={this.props.students}
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