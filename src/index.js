import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "semantic-ui-css/semantic.min.css";
import App from "./App";
import {createStore, applyMiddleware} from 'redux'; // Create Store for Redux and applyMiddleware to use Redux-Thunk for asyncronous calls of API and go to some other UI Component

//Provider is highorder component inside which we want to
//Wrap our Application (it is coming from redux)
import {Provider} from 'react-redux'; // This Connects React to Redux
import thunk from 'redux-thunk';
import registerServiceWorker from "./registerServiceWorker";
import rootReducer from "./rootReducer";

//To attach with the redux-devtools
import {composeWithDevTools} from 'redux-devtools-extension'; 
import {userLoggedIn} from './actions/auth';

//createStore takes two arguments
//rootReducer is the complete state tree being used by redux

//IT IS A FUNCTION TO CREATE THE STORE
const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

if(localStorage.DES_CURRENT_USER){
  const user = {email:localStorage.DES_CURRENT_USER};
  store.dispatch(userLoggedIn(user));
}

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}><App /></Provider>
  </BrowserRouter>,
  document.getElementById("root")
);
registerServiceWorker();

// ** Before wrapping with Provider
// <BrowserRouter>
//     <App />
//   </BrowserRouter>
