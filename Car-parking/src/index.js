import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import * as firebase from "firebase";
import injectTapEventPlugin from "react-tap-event-plugin";

// Initialize Firebase
var config = {
  apiKey: "AIzaSyCIBbB-zezPxDtl7JnMu2fYGhpXs34amyI",
  authDomain: "car-parking-9cac8.firebase.com",
  databaseURL: "https://car-parking-9cac8.firebaseapp.com",
  projectId: "car-parking-9cac8",
  storageBucket: "car-parking-9cac8.appspot.com",
  messagingSenderId: "422506242980"
};
firebase.initializeApp(config);
injectTapEventPlugin();

ReactDOM.render(<App />, document.getElementById("root"));
