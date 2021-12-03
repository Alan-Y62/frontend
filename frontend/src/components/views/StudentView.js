import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import { Link } from "react-router-dom";

import '../css/Navbar.css'

const StudentView = (props) => {
  const { student } = props;
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
      <Link to={`/campus/${student.campus.id}`}>
            <h3>{student.campus.name}</h3>
      </Link>
      <h3>{student.email}</h3>
      <h3>{student.gpa}</h3>
    </div>
  );

};

export default StudentView;