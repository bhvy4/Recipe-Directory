import firebase from "firebase/app";
import 'firebase/firestore'


const firebaseConfig = {
    apiKey: "AIzaSyCpHJlglwRj4tgVwLVk2sWMzuumbvZHGX0",
    authDomain: "cooking-site-dbbab.firebaseapp.com",
    projectId: "cooking-site-dbbab",
    storageBucket: "cooking-site-dbbab.appspot.com",
    messagingSenderId: "855304591665",
    appId: "1:855304591665:web:227d55a0b1ff117ad7b810"
};

//init firebase
firebase.initializeApp(firebaseConfig);

//init service
const projectFirestore = firebase.firestore();

export { projectFirestore }