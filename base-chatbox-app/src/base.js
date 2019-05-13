import Rebase from 're-base'; 
import firebase from 'firebase/App';
import 'firebase/database'; 

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyB0UfLbVlYKU-SW4Smasv-4lpTY37p6TOI",
    authDomain: "chatbox-react-ee753.firebaseapp.com",
    databaseURL: "https://chatbox-react-ee753.firebaseio.com",
})

const base = Rebase.createClass(firebase.database())

export {firebaseApp}


export default {base}