import React from "react";
import { Link } from "react-router-dom";
import {connect} from "react-redux";
import PropTypes from 'prop-types';
//import {} from 'semantic-ui-react'
import {logout,dummy} from '../../actions/auth';

const HomePage = ({isAuthenticated,logout,dummy}) => 
(
  <div>
    <h1>Home Page</h1>
    <Link to="/dashboard">Administrator</Link>
    <Link to="/agent">Agent</Link>
    <button onClick = { () => dummy()}>Dummy</button>
    {/* <button onClick={this.handleSearch()} className="button">Agent</button> */}
    {isAuthenticated ? <button onClick={ () => logout() }>Logout</button> : <Link to="/login">Login</Link>}
  </div>
);

HomePage.PropTypes = {
  isAuthenticated : PropTypes.bool.isRequired,
  logout:PropTypes.func.isRequired,
  dummy:PropTypes.func.isRequired
};

function mapStateToProps(state){
  return{
    isAuthenticated: !!state.user.email,
  }
}

export default connect(mapStateToProps,{logout,dummy})(HomePage);
