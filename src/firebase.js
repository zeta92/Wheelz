import * as firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import 'firebase/firestore';
import 'firebase/performance'


const config = {
    apiKey: "AIzaSyCj9wGFdtz8x1A1JVF8TpJxoawj1VZziJM",
    authDomain: "coches-a1f6a.firebaseapp.com",
    databaseURL: "https://coches-a1f6a.firebaseio.com",
    projectId: "coches-a1f6a",
    storageBucket: "coches-a1f6a.appspot.com",
    messagingSenderId: "938412593561",
    appId: "1:938412593561:web:81bf9c043ac680fa154308",
    measurementId: "G-TW0RQBD1R6"
};

const fire = firebase.initializeApp(config);
firebase.performance();

const init = ()=>{
    return new Promise((resolve,reject)=>{
        resolve(fire);
    });
} ;
let initialized = init();
export default {initialized};
