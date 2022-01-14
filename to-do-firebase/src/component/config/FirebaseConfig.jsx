import firebase from 'firebase/app'
import { initializeApp } from 'firebase/app';
import "firebase/firestore";
import 'firebase/auth';

const firebaseConfig = { 
    apiKey : "AIzaSyCXF7jypCxasdAu9GEyzTZLfxSkhGgGUJI" , 
    authDomain : "fir-project-8b22f.firebaseapp.com" , 
    projectId : "fir-project-8b22f" , 
    storageBucket : "fir-project-8b22f.appspot.com" , 
    messagingSenderId : "805712113058" , 
    appId : "1: 805712113058: web: d90513b5f8bbef6299d6fb" , 
    measurementId : "G-0H5L8296GT" 
  };

  
firebase.initializeApp(firebaseConfig)
firebase.firestore()


export default firebase

