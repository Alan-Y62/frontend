import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import { Link } from "react-router-dom";

import '../css/Navbar.css'

const CampusView = (props) => {
  const {campus} = props;
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
      <h1>{campus.name}</h1>
      <p>{campus.description}</p>
      <img src={campus.imageUrl} alt="campus"></img>
      <p>{campus.address}</p>
      <ul>
      {campus.students.map( student => {
        let name = student.firstname + " " + student.lastname;
        return (
          <Link to={`/student/${student.id}`}>
            <li key={student.id}>{name}</li>
          </Link>
        );
      })}
      </ul>
    </div>
  );

};

export default CampusView;