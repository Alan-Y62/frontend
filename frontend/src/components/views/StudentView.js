import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import { Link } from "react-router-dom";

import '../css/Navbar.css'

const StudentView = (props) => {
  const { student, handleEdit, handleDelete} = props;

  function checkCampus(e) {
    if(e !== null) {
      return(
        <Link to={`/campus/${student.campus.id}`}>
            <h3>{student.campus.name}</h3>
        </Link>
      )
    }
    else {
      return(
        <h3>Not a student at any campus</h3>
      )
    }
  }
  return (
    <div>
      <AppBar position="static" elevation={0} className="AppBar">
          <Toolbar>
            <Typography variant="h6" className="title">
              CRUD App
            </Typography>

            <Link className="id" to={'/campuses'} >
              <Button variant="contained" color="primary" style={{marginRight: '10px'}}>
                All Campuses
              </Button>
            </Link>

            <Link className="id" to={'/students'} >
              <Button variant="contained" color="primary">
                All Students
              </Button>
            </Link>
          </Toolbar>
        </AppBar>
        <div style={{marginLeft: 5+"vw", marginTop: 2+"vh"}}>
          <h1>Name: {student.firstname + " " + student.lastname}</h1>
          <img src={student.imageUrl} alt="profile"></img>
          {checkCampus(student.campus)}
          <h3>Email: {student.email}</h3>
          <h3>GPA: {student.gpa}</h3>
          <button class="btn btn-warning" onClick={handleEdit}>Edit</button>
          <button class="btn btn-danger" onClick={() => {handleDelete(student.id)}}>X</button>
        </div>
    </div>
  );
};

export default StudentView;