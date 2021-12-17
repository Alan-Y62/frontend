import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import { Link } from "react-router-dom";

import '../css/Navbar.css'
import '../css/Singlecamp.css'

const CampusView = (props) => {
  const {campus, students, removeStudent, addStudent} = props;

  function printStudents() {
    if(props.campus.students.length) {
      {students.map( student => {
        let name = student.firstname + " " + student.lastname;
        return (
          <div style={{fontSize: 20+"px"}} key={student.id}>
            <Link to={`/student/${student.id}`}>
              <li key={student.id}>{name}</li>
            </Link>
            <button className="btn btn-danger" onClick={() => removeStudent(student)}>X</button>
          </div>
        );
      })}
    }
    else {
      return ( <h1 style={{fontSize: 20+"px"}}> No Students in this Campus</h1>)
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
      <div className="row">
        <div className="col">
          <h1>{campus.name}</h1>
          <p>{campus.description}</p>
          <img src={campus.imageUrl} style={{width: 40+'vw', height: 50+'vh'}} alt="campus"></img>
          <p>{campus.address}</p>
          <Link to={`${campus.id}/edit`}>
            <button className='btn btn-warning'>Edit Campus</button>
          </Link>
        </div>
        <div className="col">
          <p>List of Students at this campus</p>
          <ul style={{listStyleType: "none"}}>
          {students.map( student => {
            let name = student.firstname + " " + student.lastname;
            return (
              <div style={{fontSize: 20+"px"}} key={student.id}>
                <Link to={`/student/${student.id}`}>
                  <li key={student.id}>{name}</li>
                </Link>
                <button className="btn btn-danger" onClick={() => removeStudent(student)}>X</button>
              </div>
            );
          })}
          </ul>
          {printStudents()}
        </div>
        <div className="col">
          <h3> Add Students to Campus</h3>
          {props.allStudents.map(student => {
                let name = student.firstname+" "+student.lastname
                if(!student.campusId) {
                  return (
                    <div key={student.id}>
                      <Link to={`/student/${student.id}`}>
                      <p name={student.id}>{name}</p>
                      </Link>
                      <button className='btn btn-primary' onClick={() => addStudent(student)}>Add</button>
                    </div>
                  )
                }
          })}
        </div>
      </div>
    </div>
  );
};

export default CampusView;