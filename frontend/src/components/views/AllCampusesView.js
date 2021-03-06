import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import '../css/Navbar.css'


const AllCampusesView = (props) => {

  const { deleteCampus} = props;

  function showCampus() {
    if(!props.allCampuses.length) {
      return(
        <h1>There are no campuses</h1>
      )
    }
    else {
      return(
        <div>
          {props.allCampuses.map((campus) => (
            <div key={campus.id}> 
              <Link to={`/campus/${campus.id}`}>
                <h1>{campus.name}</h1>
              </Link>
              <button className="btn btn-danger" onClick={() => deleteCampus(campus.id)}>X</button>
              <br/><br/>
              <img src={campus.imageUrl} alt="img crashed" style={{height: 30+"%", width: 30+"%"}}></img>
              <br/>
              <p>Address: {campus.address}</p>
              <p>Description: {campus.description}</p>
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
        {showCampus()}
        <Link to={`/newcampus`}>
          <button className='btn btn-primary'>Add New Campus</button>
        </Link>
    </div>
  );
};

AllCampusesView.propTypes = {
  allCampuses: PropTypes.array.isRequired,
};

export default AllCampusesView;