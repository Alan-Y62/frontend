import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchStudentThunk, editStudentThunk, deleteStudentThunk } from "../../store/thunks";
import { StudentView } from "../views";
import { Redirect } from 'react-router-dom';


class StudentContainer extends Component {

  constructor(props){
    super(props);
    this.state = {
      id: null,
      firstname: "", 
      lastname: "",
      imageUrl: "",
      email: "",
      campusId: null,
      gpa: null,
      redirect: false, 
      redirectId: null,
      editState: false
    };
  }

  componentDidMount() {
    //getting student ID from url
    this.props.fetchStudent(this.props.match.params.id);
  }

  handleChange = async event => {
    await this.setState({
      [event.target.name]: event.target.value
    });
  }

  edit = () => {
    this.setState(state => {
      return{ 
        editState: !state.editState,
        id: this.props.student.id,
        firstname: this.props.student.firstname, 
        lastname: this.props.student.lastname,
        imageUrl: this.props.student.imageUrl,
        email: this.props.student.email,
        campusId: this.props.student.campusId,
        gpa: this.props.student.gpa
      }
    })
  }

  handleDelete = async event => {
    this.props.deleteStudent(event)
    this.setState({
      redirect: true,
    })
  }

  handleSubmit = async event => {
    event.preventDefault();
    this.setState({
      editState: false
    })

    if(!this.state.campusId || this.state.campusId === "") {
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
      campus: this.state.campus,
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
    //attempting to redirect back to student view does not work
    // if(this.state.redirect && this.state.redirectId !== null) {
    //   return (<Redirect to={`/student/${this.state.redirectId}`}/>)
    // }
    let editState = this.state.editState
    if(this.state.redirect) {
      return (<Redirect to={`/students/`}/>)
    }
    return (  
      <StudentView 
        student={this.props.student}
        editState={editState}
        edit={this.edit}
        handleDelete={this.handleDelete}
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}
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
    editStudent: (student) => dispatch(editStudentThunk(student)),
    deleteStudent: (id) => dispatch(deleteStudentThunk(id))
  };
};

export default connect(mapState, mapDispatch)(StudentContainer);