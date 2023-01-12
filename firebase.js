// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-firestore.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBSMx9af7FZkP7pm1HUVbFKF7OTEGRdiVk",
    authDomain: "iniciatec-todolist.firebaseapp.com",
    projectId: "iniciatec-todolist",
    storageBucket: "iniciatec-todolist.appspot.com",
    messagingSenderId: "382047194880",
    appId: "1:382047194880:web:6768122468fa3f0fae6de5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);


export const saveTask = (title, description, quantity) => {
    addDoc(collection(db, "todo"), {
        title,
        description,
        quantity
    });
}