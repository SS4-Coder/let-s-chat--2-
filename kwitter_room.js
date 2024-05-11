
var firebaseConfig = {
  apiKey: "AIzaSyB4b5frNu1WkIh7EmDwAoUymL5C6ex7I3c",
  authDomain: "kwitter-ac67d.firebaseapp.com",
  databaseURL: "https://kwitter-ac67d-default-rtdb.firebaseio.com",
  projectId: "kwitter-ac67d",
  storageBucket: "kwitter-ac67d.appspot.com",
  messagingSenderId: "921379788043",
  appId: "1:921379788043:web:b0906d5cb46f36b9f8fe0e"
};

// Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  username=localStorage.getItem("user_name");
  document.getElementById("user_name").innerHTML="Welcome "+username+"!";
  
  function add_room(){
  room_name=document.getElementById("room_name").value;
  firebase.database().ref("/").child(room_name).update({
  purpose:"adding room name"
  });
  localStorage.setItem("room_name",room_name);
  window.location="kwitter_page.html";
  }
  
  function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
         Room_names = childKey;
        //Start code
        console.log("ROOM NAMES- "+Room_names);
        row="<div class='room_name' id="+Room_names+"onclick='redirectToRoom_Name(this.id)'>#"+Room_names+"</div><hr>";
        document.getElementById("output").innerHTML+=row;
        //End code
        });});}
         
  getData();
  function redirectToRoom_Name(name){
    localStorage.setItem("room_name",name);
    window.location="kwitter_page.html";
    }
    function logout(){
        localStorage.removeItem("user_name");
        localStorage.removeItem("room_name");
        window.location="index.html";
        }