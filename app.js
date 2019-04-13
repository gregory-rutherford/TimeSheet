// Initialize Firebase
var config = {
	apiKey: 'AIzaSyCh0SkGb9A6ieagW4FbIkPtFvm4ZxxBzGA',
	authDomain: 'timesheet-3d54d.firebaseapp.com',
	databaseURL: 'https://timesheet-3d54d.firebaseio.com',
	projectId: 'timesheet-3d54d',
	storageBucket: '',
	messagingSenderId: '486076353110'
};
firebase.initializeApp(config);

var database = firebase.database();



  $(document).on("click", "#add-user", function(){
    event.preventDefault();
    var name = $("#name-input").val().trim();
    console.log(name);
    var role = $("#role-input").val().trim();
    console.log(role);
    var startDate = $("#startDate-input").val().trim();
    console.log(startDate);
    var now = moment(startDate, "YYYY-MM-DD").unix();
     console.log(now);
     var since = moment(startDate).fromNow();
     console.log(since);
    var rate = $("#rate-input").val().trim();
    console.log(rate);

    database.ref().push({
      name: name,
      role: role,
      date: now,
      rate: rate
    });
  });

  // var now = moment().valueOf();
  // console.log(now);
  // var date = moment.unix(now).format("dddd, MMMM Do YYYY, h:mm:ss a");
  // console.log(date);
 
  function makeRow (response){
    var date = moment.unix(response.date);
    var monthsDiff = moment().diff(date, "months");
    var nDate = moment.unix(response.date).format("L");
      $("#changes").append(`<tr>
      <td>${response.name}</td>
      <td>${response.role}</td>
      <td>${nDate}</td>
      <td>${response.rate}</td>
      <td>${monthsDiff}</td>
      <td>$${(monthsDiff*response.rate)}</td>
    </tr>`);
  }
 
  database.ref().on("child_added", function(childSnapshot) {
    var response = childSnapshot.val();
    makeRow(response);
  });