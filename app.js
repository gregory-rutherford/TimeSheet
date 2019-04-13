 // Initialize Firebase
 var config = {
    apiKey: "AIzaSyCh0SkGb9A6ieagW4FbIkPtFvm4ZxxBzGA",
    authDomain: "timesheet-3d54d.firebaseapp.com",
    databaseURL: "https://timesheet-3d54d.firebaseio.com",
    projectId: "timesheet-3d54d",
    storageBucket: "",
    messagingSenderId: "486076353110"
  };
  firebase.initializeApp(config);

  var database = firebase.database();

  var now = moment().valueOf();
  console.log(now);
  var date = moment.unix(now).format("dddd, MMMM Do YYYY, h:mm:ss a");
  console.log(date);