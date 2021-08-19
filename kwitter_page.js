
 
  var firebaseConfig = {
    apiKey: "AIzaSyDHT_mr5xMDipVrWNv8L1BCr62t7UJpxEM",
    authDomain: "kwitter-ee7e4.firebaseapp.com",
    projectId: "kwitter-ee7e4",
    storageBucket: "kwitter-ee7e4.appspot.com",
    messagingSenderId: "1036273053005",
    appId: "1:1036273053005:web:fdd7ea9ce16b026e2a9b04",
    measurementId: "G-D1Q0Y3TQX8"
  };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
user_name = localStorage.getItem("user_name");
room_name = localStorage.getItem("room_name");

function send() {
msg = document.getElementById("msg").value;
firebase.database().ref(room_name).push({
      name:user_name, 
      message:msg,
      like: 0 
});
document.getElementById("msg").value = "" ; 
}


function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();

function Logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location= "index.html";
    }

     function updateLike(message_id) {
           console.log("clicked on like button - " + message_id); 
           button_id = message_id;
           likes = document.getElementById(button_id).value;
            updated_likes = Number(likes) + 1; 
            console.log(updated_likes);
           firebase.database().ref(room_name).child(message_id).update({ 
                 like : updated_likes 
      });
       }
