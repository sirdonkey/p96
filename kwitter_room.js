const firebaseConfig = {
      apiKey: "AIzaSyA750V5GBMUGeLOOB3BN7FkGu2YgwtMnaQ",
      authDomain: "twitter-464a1.firebaseapp.com",
      databaseURL: "https://twitter-464a1-default-rtdb.firebaseio.com",
      projectId: "twitter-464a1",
      storageBucket: "twitter-464a1.appspot.com",
      messagingSenderId: "911456356005",
      appId: "1:911456356005:web:76a1d8a785594919e46f4c"
    };
    
    // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  user_name=localStorage.getItem("user_name");
  document.getElementById("user_name").innerHTML="welcome"+user_name;

  function addRoom()
  {
      room_name = document.getElementById("room_name").ariaValueMax;

      firebase.database().ref("/").child(room_name).update({
            purpose : "adding room name"
      });

      localStorage.setItem("room_name", room_name);

      window.location = "kwitter_page.html";
  }

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
console.log("Room Name - " + Room_namers);
row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names+"</div><hr>";
document.getElementById("output").innerHTML+= row;
      //End code
      });});}
getData();

function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
}

function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}