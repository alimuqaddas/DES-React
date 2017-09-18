// IT is thunk action, it takes a function and returns a function
//userLoggedIn is redux action

import {USER_LOGGED_IN,USER_LOGGED_OUT,DUMMY_DATA} from '../types';
import api from '../api';


export const userLoggedIn = (user) => ({
    type:USER_LOGGED_IN,
    user
})

export const userLoggedOut = () => ({
    type:USER_LOGGED_OUT
})

export const giveDummyData = () => ({
    type:DUMMY_DATA,
    user:{
        name:"ali",
        wifename:"Fatima"
    }
})

// var user ={
//     name:"ali",
//     cast:"Muslim"
// }

export const login = credentials => dispatch => //dispatch(userLoggedIn(user)); 
    api.user.login(credentials).then(user => {
        localStorage.DES_CURRENT_USER = user.email;
        dispatch(userLoggedIn(user));
    });


export const logout = () => dispatch => {
    localStorage.removeItem('DES_CURRENT_USER');
    dispatch(userLoggedOut());
}; 

export const dummy = () => dispatch => {
    console.log("inside 1");
    dispatch(giveDummyData());

}
