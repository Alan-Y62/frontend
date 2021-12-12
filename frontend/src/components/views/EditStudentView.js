import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import { Link } from "react-router-dom";

import '../css/Navbar.css'

const EditStudentView = (props) => {
  const { student, handleSubmit, handleChange } = props;

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
                    <select type="text" name="campusId" defaultValue={student.campusId}>
                    <option value="none">None</option>
                    {props.allCampuses.map((campus) => (
                        <option key={campus.id} value={campus.id}>{campus.name}</option>
                    ))}  
                    </select>
                <br/>
                <label style={{color:'#11153e', fontWeight: 'bold'}}>GPA:  </label>
                    <input type="number" defaultValue={student.gpa} required={true} min="0.0" max="4.0" step=".1" name="gpa" onChange ={(e) => handleChange(e)}/>
                <br/>
                <button className='btn btn-primary' type="submit">Submit</button>
            </form>
            <Link to={`/student/${student.id}`}>
            <button className='btn btn-warning'>Cancel</button>
          </Link>
        </div>
        </div>
    );
}

export default EditStudentView;