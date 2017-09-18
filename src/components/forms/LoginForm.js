
import React, {Component} from 'react';
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react'
import Validator from 'validator';
import PropTypes from 'prop-types';
import InLineError from "../messages/InlineError";

class LoginForm extends Component{
    state={
        data:{
            email:'',
            password:''
        },
        loading:false,
        errors:{}
    }

    //This is one line code for changing state
    //this.setState({ data << This is what we want to change
    // We need a copy of everything we have previous so
    // ... makes the copy of this.state.data
    // then next parameter gives us what we want to change inside data
    // the next param tells us what is the new value
    // so its a short method :D 
    onChange = e => this.setState({
        data:{...this.state.data,[e.target.name]:e.target.value}
    },
    console.log(this.state)
    );

    validate = (data) => {
        const error ={};
        if(!data.password) error.password = "Dont leave password Blank";
        if(!data.email) error.email = "Dont leave Email Blank";        
        if(!Validator.isEmail(data.email)) error.email = "Invalid Email";
        return error;
    }

    onSubmit = () =>{
        const errors = this.validate(this.state.data);
        this.setState({errors});


        if(Object.keys(errors).length ===0){
          this.setState({loading:true});
          this.props.submit(this.state.data).catch(err => this.setState({errors:err.response.data.errors,loading:false}));
      }
    }

    render(){
        const {data , errors, loading}=this.state;
        return(
          <div>
            <Form onSubmit={this.onSubmit} loading={loading}>
                {errors.global && (
                    <Message negative>
                        <Message.Header>Reply from Server</Message.Header>
                        <p>{errors.global}</p>
                    </Message>
                )}
                <Form.Field>
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="example@example.com"
                        value={data.email}
                        onChange={this.onChange}
                    />
                    {errors.email && <InLineError text={errors.email}/>}
                </Form.Field>
                <Form.Field>
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        placeholder="password"
                        onChange={this.onChange}
                    />
                    {errors.password && <InLineError text={errors.password}/>}
                </Form.Field>
                <Button primary>Login</Button>
            </Form>
            
          </div>
        )
    }
} 

LoginForm.PropTypes = {
    submit:PropTypes.func.isRequired
};

export default LoginForm;