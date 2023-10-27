const firebaseConfig = {
    apiKey: "AIzaSyB3qTsB46Y46HxwcM3NFoir3qgI7ELKSRE",
    authDomain: "capstone-e-commerce-b9697.firebaseapp.com",
    projectId: "capstone-e-commerce-b9697",
    storageBucket: "capstone-e-commerce-b9697.appspot.com",
    messagingSenderId: "477914632862",
    appId: "1:477914632862:web:b31c018bf5c1c459b9e18f",
    measurementId: "G-FRD1272REN"
  };
firebase.initializeApp(firebaseConfig);

var contactformformdb=firebase.database().ref("contactform")

document.getElementById("contactform").addEventListener("submit",submitform)

function submitform(e){
    e.preventDefault();

    var FirstName = getInputVal('FirstName');
    var Email = getInputVal('Email');
    var Password = getInputVal('Password');

    saveMessage( FirstName, Email, Password);

    document.querySelector('.alert').Style.display ='block';
     
    setTimeout(function(){
        document.querySelector('.alert').Style.display ='none'; 
    }, 3000);
    document.getElementById('contactform').reset();
}
 function getInputVal(id){
    return document.getElementById(id).value;
 }
  function saveMessage(FirstName, Email, Password){
    var newMessageRef = messageRef.push();
    newMessageRef.set({
        FirstName:FirstName,
        Email:Email,
        Password:Password 
    })
  }
