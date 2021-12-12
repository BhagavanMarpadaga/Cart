import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import firebase from "firebase/app";
import "firebase/firestore";
import reportWebVitals from './reportWebVitals';


const firebaseConfig = {
  apiKey: "AIzaSyA6ThrX_0Hr9LPUI09pfL6qfufOcUtmPp4",
  authDomain: "cart-app-ef96a.firebaseapp.com",
  projectId: "cart-app-ef96a",
  storageBucket: "cart-app-ef96a.appspot.com",
  messagingSenderId: "1060547405114",
  appId: "1:1060547405114:web:568a9819431ebbe6271c03"
};
firebase.initializeApp(firebaseConfig);



ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
