import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import { Link } from "react-router-dom";

import '../css/Navbar.css'

const StudentView = (props) => {
  const { student, edit, editState, handleDelete, handleChange, handleSubmit} = props;

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
  if(!editState) {
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
          <button className="btn btn-warning" onClick={edit}>Edit</button>
          <button className="btn btn-danger" onClick={() => {handleDelete(student.id)}}>X</button>
        </div>
    </div>
    );
  }
  else {
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
          <div style={{marginLeft: 10+"vw", marginTop: 5+"vh"}}> 
              <h1>Edit Form</h1>
              <form id="edit-stud" onSubmit={handleSubmit}>
                  <label style= {{color:'#11153e', fontWeight: 'bold'}}>First Name: </label>
                  <input type="text" name="firstname" defaultValue={student.firstname} required={true} onChange ={(e) => handleChange(e)}/>
                  <br/>
                  <label style={{color:'#11153e', fontWeight: 'bold'}}>Last Name:  </label>
                  <input type="text" name="lastname" defaultValue={student.lastname} required={true} onChange ={(e) => handleChange(e)}/>
                  <br/>
                  <label style={{color:'#11153e', fontWeight: 'bold'}}>Email:  </label>
                      <input type="email" name="email" defaultValue={student.email} required={true} onChange ={(e) => handleChange(e)}/>
                  <br/>
                  <label style={{color:'#11153e', fontWeight: 'bold'}}>imageurl:  </label>
                      <input type="text" name="imageUrl" defaultValue={student.imageUrl} onChange ={(e) => handleChange(e)}/>
                  <br/>
                  <label style={{color:'#11153e', fontWeight: 'bold'}}>Campus:  </label>
                      <input type="text" name="campusId" defaultValue={student.campusId} onChange ={(e) => handleChange(e)}/>
                  <br/>
                  <label style={{color:'#11153e', fontWeight: 'bold'}}>GPA:  </label>
                      <input type="number" defaultValue={student.gpa} required={true} min="0.0" max="4.0" step=".1" name="gpa" onChange ={(e) => handleChange(e)}/>
                  <br/>
                  <button className='btn btn-primary' type="submit">Submit</button>
              </form>
              <button className='btn btn-default' onClick={edit}>Cancel</button>
         </div>
      </div>
    );
  }
};

export default StudentView;