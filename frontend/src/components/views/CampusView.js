import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import { Link } from "react-router-dom";

import '../css/Navbar.css'
import '../css/Singlecamp.css'

const CampusView = (props) => {
  const {campus, show, showForm, students, removeStudent, handleChange, handleSubmit} = props;
  if(!show) {
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
            <button className='btn btn-default' onClick={showForm}>Cancel</button>
          </div>
          <div className="col">
            <p>List of Students at this campus</p>
            <ul>
            {students.map( student => {
              let name = student.firstname + " " + student.lastname;
              return (
                <div key={student.id}>
                  <Link to={`/student/${student.id}`}>
                    <li key={student.id}>{name}</li>
                  </Link>
                  <button className="btn btn-danger" onClick={() => removeStudent(student)}>X</button>
                </div>
              );
            })}
            </ul>
          </div>
        </div>
      </div>
    );
  }
  else {
    return(
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
            <label style= {{color:'#11153e', fontWeight: 'bold'}}>Name: </label>
            <input type="text" name="name" defaultValue={campus.name} required={true} onChange ={(e) => handleChange(e)}/>
            <br/>
            <label style={{color:'#11153e', fontWeight: 'bold'}}>Address:  </label>
            <input type="text" name="address" defaultValue={campus.address} required={true} onChange ={(e) => handleChange(e)}/>
            <br/>
            <label style={{color:'#11153e', fontWeight: 'bold'}}>Description:  </label>
            <textarea name="description" defaultValue={campus.description} required={true} onChange ={(e) => handleChange(e)}/>

            <br/>
            <button className='btn btn-primary' type="submit">Submit</button>
          </form>
          <button className='btn btn-default' onClick={showForm}>Cancel</button>
        </div>
      </div>
      )
  }
};

export default CampusView;