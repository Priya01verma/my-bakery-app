import { combineReducers } from "redux";
import AllBakes from "../models/AllBakes";
import Auth from "../models/Auth";
import { firebaseReducer } from "react-redux-firebase";
//import {firestoreReducer} from "redux-firestore";

const RootReducer = combineReducers({
  AllBakes,
  Auth,
  firebase: firebaseReducer,
  //firestore: firestoreReducer
});

export default RootReducer;
