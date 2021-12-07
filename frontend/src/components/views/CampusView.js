import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import { Link } from "react-router-dom";

import '../css/Navbar.css'
import '../css/Singlecamp.css'

const CampusView = (props) => {
  const {campus, deleteStudent} = props;
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
      <div className="row">
        <div className="col">
          <h1>{campus.name}</h1>
          <p>{campus.description}</p>
          <img src={campus.imageUrl} style={{width: 40+'vw', height: 50+'vh'}} alt="campus"></img>
          <p>{campus.address}</p>
        </div>
        <div className="col">
          <p>List of Students at this campus</p>
          <ul>
          {campus.students.map( student => {
            let name = student.firstname + " " + student.lastname;
            return (
              <div>
                <Link to={`/student/${student.id}`}>
                  <li key={student.id}>{name}</li>
                </Link>
                <button onClick={() => deleteStudent(student.id)}>Delete</button>
              </div>
            );
          })}
          </ul>
        </div>
      </div>
    </div>
  );

};

export default CampusView;