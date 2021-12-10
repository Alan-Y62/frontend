import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import { Link } from "react-router-dom";

import '../css/Navbar.css'

const StudentView = (props) => {
  const { student, handleChange, handleSubmit} = props;

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
      <h1>{student.firstname + " " + student.lastname}</h1>
      <img src={student.imageUrl} alt="profile"></img>
      {checkCampus(student.campus)}
      <h3>{student.email}</h3>
      <h3>{student.gpa}</h3>
      <form id="edit-stud" onSubmit={handleSubmit}>
          <label> First Name: 
            <input type="text" name="firstname" onChange ={(e) => handleChange(e)}></input>
          </label>
          <br/>
          <label> Last Name: 
            <input type="text" name="lastname" onChange ={(e) => handleChange(e)}></input>
          </label>
          <br/>
          <label> ImageUrl: 
            <input type="text" name="imageurl" onChange ={(e) => handleChange(e)}></input>
          </label>
          <br/>
          <label> Email: 
            <input type="email" name="email" onChange ={(e) => handleChange(e)}></input>
          </label>
          <br/>
          <label> Campus: 
            <input type="text" name="campusId" onChange ={(e) => handleChange(e)}></input>
          </label>
          <br/>
          <label> GPA: 
            <input type="number" min="0.0" max="4.0" step=".1" name="gpa" onChange ={(e) => handleChange(e)}></input>
          </label>
          <br/>
          <button type="submit">Submit</button>
        </form>
    </div>
  );

};

export default StudentView;