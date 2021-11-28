

// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.5.0/firebase-app.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDYLJ8azCQ_rU3VFVFik7rskskL5LHrIYI",
  authDomain: "contact-128d3.firebaseapp.com",
  databaseURL: "https://contact-128d3-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "contact-128d3",
  storageBucket: "contact-128d3.appspot.com",
  messagingSenderId: "175176973315",
  appId: "1:175176973315:web:00b2284606feebd35e6236"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

import {getDatabase, set, ref, child}
from "https://www.gstatic.com/firebasejs/9.5.0/firebase-database.js"


// Reference messages collection
// var messagesRef = firebase.database().ref('messages');
const db = getDatabase();
// Listen for form submit
document.getElementById('contactForm').addEventListener('submit', submitForm);

// Submit form
function submitForm(e){
e.preventDefault();

// Get values
var name = getInputVal('name');
var email = getInputVal('email');
var phone = getInputVal('phone');
var message = getInputVal('message');

// Save message
saveMessage(name, email, phone, message);

// Show alert
document.querySelector('.alert').style.display = 'block';

// Hide alert after 3 seconds
setTimeout(function(){
document.querySelector('.alert').style.display = 'none';
},3000);

// Clear form

document.getElementById('contactForm').reset();
}

// Function to get input form values

function getInputVal(id){
return document.getElementById(id).value;
}

// Save message to firebase
// function saveMessage(name, email, phone, message){
//   let newMessageRef = messagesRef.push();
//   newMessageRef.set({
//     name: name,
//     email:email,
//     phone:phone,
//     message:message
//   });
// }

function saveMessage(){
set(ref(db,  getInputVal('name') ),{
Name: getInputVal('name'),
Email: getInputVal('email'),
Phone: getInputVal('phone'),
Message: getInputVal('message')
})
}

document.getElementById("Buttons").addEventListener("click",()=>{
 document.getElementById("name").value= null;
 document.getElementById("email").value= null; 
 document.getElementById("phone").value= null;
  document.getElementById("message").value= null;
  console.log('avgu');
})