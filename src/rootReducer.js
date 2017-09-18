import {combineReducers } from 'redux';
// Thats help us to combine reducers in to one

import user from "./reducers/user";

//Reducers do not just return default values. They always return the accumulation of the state (based on all previous and current actions). Therefore, they act as a reducer of state. Each time a redux reducer is called, the state is passed in with the action (state, action)

//combineReducers is a function and it takes object as you can see

//You can make any state here i replaced it with ammijeee :D
export default combineReducers({
    user
})