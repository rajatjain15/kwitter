var firebaseConfig = {
      apiKey: "AIzaSyAIU71cLJU2VHJRf5knvJDPqulN13YKDAo",
      authDomain: "kwitter-ee014.firebaseapp.com",
      databaseURL: "https://kwitter-ee014-default-rtdb.firebaseio.com",
      projectId: "kwitter-ee014",
      storageBucket: "kwitter-ee014.appspot.com",
      messagingSenderId: "491928748342",
      appId: "1:491928748342:web:6d0e7496c9d731ae44b397",
      measurementId: "G-C1VMN4MGX8"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    
    user_name = localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML = " Kwitter Welcomes You - " + user_name + "!";

function addRoom()
{
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
console.log("room name-" +Room_names);
row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
document.getElementById("output").innerHTML+=row;
      });

});
}

getData();
function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name",name);
      window.location="kwitter_page.html";
}
