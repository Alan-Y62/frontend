import { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { fetchAllCampusesThunk, deleteCampusThunk} from "../../store/thunks";
import AllCampusesView from "../views/AllCampusesView";
import { Redirect } from 'react-router-dom';

class AllCampusesContainer extends Component {

  constructor(props){
    super(props);
    this.state = {
      show: false,
      name: "",  
      address: "", 
      description: "",
      redirect: false, 
      redirectId: null
    };
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleSubmit = async event => {
      event.preventDefault();

      let campus = {
          name: this.state.name,
          address: this.state.address,
          description: this.state.description,
          campusId: this.state.campusId,
      };
      
      let newCampus = await this.props.addCampus(campus);

      this.setState({
        firstname: "", 
        lastname: "", 
        campusId: null, 
        redirect: true, 
        redirectId: newCampus.id
      });
  }

  componentDidMount() {
    this.props.fetchAllCampuses();
  }

  render() {
    if(this.state.redirect) {
      return (<Redirect to={`/campus/${this.state.redirectId}`}/>)
    }
    return (
      <AllCampusesView
        allCampuses={this.props.allCampuses}
        deleteCampus={this.props.deleteCampus}
      />
    );
  }
}

// Map state to props;
const mapState = (state) => {
  return {
    allCampuses: state.allCampuses,
  };
};

// Map dispatch to props;
const mapDispatch = (dispatch) => {
  return {
    fetchAllCampuses: () => dispatch(fetchAllCampusesThunk()),
    deleteCampus: (campusId) => dispatch(deleteCampusThunk(campusId)),
  };
};

// Type check props;
AllCampusesContainer.propTypes = {
  allCampuses: PropTypes.array.isRequired,
  fetchAllCampuses: PropTypes.func.isRequired,
  deleteCampus: PropTypes.func.isRequired
};

// Export our store-connected container by default;
export default withRouter(connect(mapState, mapDispatch)(AllCampusesContainer));