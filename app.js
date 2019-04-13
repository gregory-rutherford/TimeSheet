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
     var date = moment.unix(now).format("MMMM Do YYYY");
    console.log(date);
    var rate = $("#rate-input").val().trim();
    console.log(rate);

  });

