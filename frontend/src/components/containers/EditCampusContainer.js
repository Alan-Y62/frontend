import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchCampusThunk, 
  editCampusThunk, editStudentThunk,
  fetchAllStudentsThunk 
} from "../../store/thunks";
import { Redirect } from 'react-router-dom';
import { EditCampusView, } from "../views";

class EditCampusContainer extends Component {

    constructor(props){
      super(props);
      this.state = {
        show: false,
        removed: false,
        name: this.props.match.name, 
        address: this.props.campus.address,
        description: this.props.match.description,
        redirect: false, 
        redirectId: null
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

    componentWillUnmount() {
        this.setState({redirect: false, redirectId: null});
    }
  
    handleChange = async event => {
      await this.setState({
        [event.target.name]: event.target.value
      });
    }
  
    handleSubmit = async event => {
      event.preventDefault();
      console.log(event.target.id.value)
      let campus = {
        id: this.props.match.params.id,
        name: this.state.name,
        address: this.state.address,
        description: this.state.description
      };
      await this.props.editCampus(campus);
      this.setState({
        show: false,
        redirect: true,
        redirectId: campus.id
      })
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
        if(this.state.redirect) {
            return (<Redirect to={`/campus/${this.state.redirectId}`}/>)
        }
        return (
            <EditCampusView
                campus={this.props.campus}
                students={this.props.students}
                showForm={this.showForm}
                handleChange={this.handleChange}
                handleSubmit={this.handleSubmit}
            />
        )
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
    editCampus: (campus) => dispatch(editCampusThunk(campus)),
    editStudent: (student) => dispatch(editStudentThunk(student)),
    fetchAllStudents: () => dispatch(fetchAllStudentsThunk())
};
};
  
  export default connect(mapState, mapDispatch)(EditCampusContainer);