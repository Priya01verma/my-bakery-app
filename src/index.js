import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./stores";
import { composeWithDevTools } from "redux-devtools-extension";
import { BrowserRouter } from "react-router-dom";
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import { ReactReduxFirebaseProvider } from "react-redux-firebase";
//import { createFirestoreInstance } from "redux-firestore";

//const fbConfig = {};

const firebaseConfig = {
    //...firebaseConfig
    apiKey: "AIzaSyBhn59-MKJx4MDNVPjwERC-pAneInWyxR4",
    authDomain: "beer-app-548d0.firebaseapp.com",
    databaseURL: "https://beer-app-548d0.firebaseio.com",
    projectId: "beer-app-548d0",
    storageBucket: "beer-app-548d0.appspot.com",
    messagingSenderId: "156482931829",
    appId: "1:156482931829:web:5e8c2c31ea55f8f1c4fc3c",
    measurementId: "G-4DC0MJSWSY"
};
  
const rrfConfig = {
    userProfile: "users",
   // useFirestoreForProfile: true // Firestore for Profile instead of Realtime DB
};


// Initialize firebase instance
firebase.initializeApp(firebaseConfig);

firebase.firestore();

const rxStore = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(thunk))
);

const rrfProps = {
    firebase,
    config: rrfConfig,
    dispatch: rxStore.dispatch,
    //createFirestoreInstance, //since we are using Firestore
  };

ReactDOM.render(
    // <React.StrictMode>
    <Provider store={rxStore}>
        <ReactReduxFirebaseProvider {...rrfProps}>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </ReactReduxFirebaseProvider>
    </Provider>,
    // </React.StrictMode>
    document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
