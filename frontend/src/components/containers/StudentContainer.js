import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchStudentThunk, deleteStudentThunk } from "../../store/thunks";
import { StudentView } from "../views";


class StudentContainer extends Component {

  constructor(props){
    super(props);
    this.state = {
      id: null,
      firstname: "", 
      lastname: "",
      imageUrl: "",
      email: "",
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
    return (  
      <StudentView 
        student={this.props.student}
        handleDelete={this.handleDelete}
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
    deleteStudent: (id) => dispatch(deleteStudentThunk(id)),
  };
};

export default connect(mapState, mapDispatch)(StudentContainer);