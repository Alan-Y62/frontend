import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import { Link } from "react-router-dom";

import '../css/Navbar.css'
const EditCampusView = (props) => {
    const {campus, handleChange, handleSubmit} = props;
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
            <Link to={`/campus/${campus.id}`}>
            <button className='btn btn-warning'>Cancel</button>
          </Link>
            </div>
        </div>
    )
}

export default EditCampusView;