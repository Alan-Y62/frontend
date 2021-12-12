import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import { Link } from "react-router-dom";

import '../css/Navbar.css'

const AllStudentsView = (props) => {
  const {deleteStudent} = props;

  function showStudents() {
    if(!props.students.length) {
      return (
        <h1> There are no students </h1>
      )
    }
    else {
      return (
        <div>
          {props.students.map((student) => (
            <div key={student.id}> 
              <Link to={`/student/${student.id}`}>
                <h1>{student.firstname + " " + student.lastname}</h1>
              </Link>
              <button className="btn btn-danger" onClick={() => deleteStudent(student.id)}>X</button>
              <br/>
              <img src={student.imageUrl} alt="img crashed" style={{height: 100+"px", width: 100+"px"}}></img>
              <br/><br/>
            </div>
          ))}
        </div>
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

            <Link className="id" to={'/'} >
              <Button variant="contained" color="primary" style={{marginRight: '10px'}}>
                Home
              </Button>
            </Link>

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
      {showStudents()}
      <Link to={`/newstudent`}>
        <button className='btn btn-primary'>Add New Student</button>
      </Link>
    </div>
  );
};


export default AllStudentsView;