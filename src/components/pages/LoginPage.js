import React from "react";
import LoginForm from "../forms/LoginForm";
import PropTypes from 'prop-types';

import {login} from '../../actions/auth';

//We need to connect this Component with Redux
//Because it is using Redux

import {connect} from 'react-redux';

class LoginPage extends React.Component{
  
  //This function is being called when the form is submitted as it was in it Props\
  
  // What we want now? we want to take this data and do the Thunk Action  Right ?\
  // This login page have a prop of thunk action named login
  // we are passing data to this thunk action this.props.login(data)
  // If everything is ok then we want to redirect to HOME (FOR EXAMPLE)

  // To redirect we need history that which component to render
  // this is being provided by props.history so we are pushing it there

  submit = data => 
    this.props.login(data).then(() =>
      this.props.history.push("/dashboard"));
  
  
  render(){
    return(
      <div className="container">
        <LoginForm submit={this.submit}/>
    </div>
    )
  }
}

LoginForm.PropTypes = {
  history:PropTypes.shape({
    push:PropTypes.func.isRequired
  }).isRequired,
  login:PropTypes.func.isRequired
};

export default connect(null,{login})(LoginPage);
