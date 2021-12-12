import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchStudentThunk, editStudentThunk, fetchAllCampusesThunk } from "../../store/thunks";
import { EditStudentView } from "../views";
import { Redirect } from 'react-router-dom';

class EditStudentContainer extends Component {

  constructor(props){
    super(props);
    this.state = {
      id: this.props.student.id,
      firstname: this.props.student.firstname, 
      lastname: this.props.student.lastname,
      imageUrl: this.props.student.imageUrl,
      email: this.props.student.email,
      gpa: this.props.student.gpa,
      redirect: false, 
      redirectId: null,
    };
  }

  componentDidMount() {
    //getting student ID from url
    this.props.fetchStudent(this.props.match.params.id);
    this.props.fetchAllCampuses();
  }

  handleChange = async event => {
    await this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleSubmit = async event => {
    event.preventDefault();
    this.setState({
      editState: false
    })

    let cId = null;
    if(event.target.campusId.value !== "none") {
      cId = event.target.campusId.value
    }

    let student = {
      id: this.props.match.params.id,
      firstname: this.state.firstname,
      lastname: this.state.lastname,
      imageUrl: this.state.imageUrl,
      email: this.state.email,
      campusId: cId,
      gpa: this.state.gpa
    };
    await this.props.editStudent(student);

    this.setState({
      redirect: true,
      redirectId: student.id
    });
  }

  render() {
    //attempting to redirect back to student view does not work
    if(this.state.redirect) {
        return (<Redirect to={`/student/${this.state.redirectId}`}/>)
    }
    return (  
      <EditStudentView 
        student={this.props.student}
        handleSubmit={this.handleSubmit}
        handleChange={this.handleChange}
        allCampuses={this.props.allCampuses}
      />
    );
  }
}

// map state to props
const mapState = (state) => {
  return {
    student: state.student,
    allCampuses: state.allCampuses
  };
};

// map dispatch to props
const mapDispatch = (dispatch) => {
  return {
    fetchStudent: (id) => dispatch(fetchStudentThunk(id)),
    editStudent: (student) => dispatch(editStudentThunk(student)),
    fetchAllCampuses: () => dispatch(fetchAllCampusesThunk())
  };
};

export default connect(mapState, mapDispatch)(EditStudentContainer);