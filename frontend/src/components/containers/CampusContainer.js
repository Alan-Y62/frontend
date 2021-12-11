import React, { Component } from "react";
import { connect } from "react-redux";
import { editStudent } from "../../store/actions/actionCreators";
import { fetchCampusThunk, deleteStudentThunk, editCampusThunk, editStudentThunk } from "../../store/thunks";

import { CampusView } from "../views";

class CampusContainer extends Component {

  constructor(props){
    super(props);
    this.state = {
      show: false,
      removed: false,
      name: this.props.match.name, 
      address: this.props.match.address,
      description: this.props.match.description,
    }
  }

  showForm = () => {
    this.setState(state => {
      return{ show: !state.show}
    })
  }

  componentDidMount() {
    //getting campus ID from url
    this.props.fetchCampus(this.props.match.params.id);
  }

  handleChange = async event => {
    await this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleSubmit = async event => {
    event.preventDefault();
    this.setState({
      show: false
    })

    let campus = {
      id: this.props.match.params.id,
      name: this.state.name,
      address: this.state.address,
      description: this.state.description
    };
    await this.props.editCampus(campus);
  }

  removeStudent = async event => {
    this.setState(state => {
      return{ removed: !state.show}
    })
    let student = {
      id: event.id,
      firstname: event.firstname,
      lastname: event.lastname,
      email: event.email,
      campusId: null,
      gpa: event.gpa
    };
    await this.props.editStudent(student)
  }

  render() {
    let show = this.state.show;
    return (
      <CampusView 
        campus={this.props.campus}
        students={this.props.students}
        removeStudent={this.removeStudent}
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}
        show ={show}
        showForm={this.showForm}
      />
    );
  }
}

// map state to props
const mapState = (state) => {
  return {
    campus: state.campus,
    students: state.campus.students
  };
};

// map dispatch to props
const mapDispatch = (dispatch) => {
  return {
    fetchCampus: (id) => dispatch(fetchCampusThunk(id)),
    editCampus: (campus) => dispatch(editCampusThunk(campus)),
    editStudent: (student) => dispatch(editStudentThunk(student)),
    deleteStudent: (id) => dispatch(deleteStudentThunk(id))
  };
};

export default connect(mapState, mapDispatch)(CampusContainer);