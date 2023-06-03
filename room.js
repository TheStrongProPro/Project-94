var firebaseConfig = {
    apiKey: "AIzaSyAdxg4F2GYApewddFmMMtsRaOQ7Pw0Wboc",

    authDomain: "letschat-dfe1d.firebaseapp.com",

    databaseURL: "https://letschat-dfe1d-default-rtdb.firebaseio.com",

    projectId: "letschat-dfe1d",

    storageBucket: "letschat-dfe1d.appspot.com",

    messagingSenderId: "699140663279",

    appId: "1:699140663279:web:999e5e2f37551705a9b81a",
};

// Initialize Firebase

firebase.initializeApp(firebaseConfig);

function addUser() {
    user_name = document.getElementById("user_name").value;

    firebase.database().ref("/").child(user_name).update({
        message: "hello",
    });
}
