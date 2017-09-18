
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
            // <Form onSubmit={this.onSubmit} loading={loading}>
            //     {errors.global && (
            //         <Message negative>
            //             <Message.Header>Reply from Server</Message.Header>
            //             <p>{errors.global}</p>
            //         </Message>
            //     )}
            //     <Form.Field>
            //         <label htmlFor="email">Email</label>
            //         <input
            //             type="email"
            //             id="email"
            //             name="email"
            //             placeholder="example@example.com"
            //             value={data.email}
            //             onChange={this.onChange}
            //         />
            //         {errors.email && <InLineError text={errors.email}/>}
            //     </Form.Field>
            //     <Form.Field>
            //         <label htmlFor="password">Password</label>
            //         <input
                        // type="password"
                        // id="password"
                        // name="password"
                        // placeholder="password"
                        // onChange={this.onChange}
            //         />
            //         {errors.password && <InLineError text={errors.password}/>}
            //     </Form.Field>
            //     <Button primary>Login</Button>
            // </Form>
            <div className='login-form'>
            {/*
              Heads up! The styles below are necessary for the correct render of this example.
              You can do same with CSS, the main idea is that all the elements up to the `Grid`
              below must have a height of 100%.
            */}
            <style>{`
              body > div,
              body > div > div,
              body > div > div > div.login-form {
                height: 100%;
              }
            `}</style>
            <Grid
              textAlign='center'
              style={{ height: '100%' }}
              verticalAlign='middle'
            >
              <Grid.Column style={{ maxWidth: 450 }}>
                <Header as='h2' color='teal' textAlign='center'>
                  <Image src='/logo.png' />
                  {' '}Log-in to your account
                </Header>
                <Form size='large' onSubmit={this.onSubmit} loading={loading}>
                  <Segment stacked>
                    <Form.Input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="example@example.com"
                    value={data.email}
                    onChange={this.onChange}
                    fluid
                    icon='user'
                    iconPosition='left'
                    placeholder='E-mail address'
                    />
                    {errors.email && <InLineError text={errors.email}/>}
                    <Form.Input
                    type="password"
                    id="password"
                    name="password"
                    placeholder="password"
                    onChange={this.onChange}
                      fluid
                      icon='lock'
                      iconPosition='left'
                      placeholder='Password'
                      type='password'
                    />
                    {errors.password && <InLineError text={errors.password}/>}
                    <Button color='teal' fluid size='large' onClick={this.onSubmit}>Login</Button>
                  </Segment>
                </Form>
                {errors.global && (
                    <Message negative>
                        <Message.Header>Reply from Server</Message.Header>
                        <p>{errors.global}</p>
                    </Message>
                 )}
                <Message>
                  New to us? <a href='#'>Sign Up</a>
                </Message>
              </Grid.Column>
            </Grid>
          </div>
        )
    }
} 

LoginForm.PropTypes = {
    submit:PropTypes.func.isRequired
};

export default LoginForm;