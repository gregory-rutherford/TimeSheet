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

//firebase variable
var database = firebase.database();

//gathers user data from the from and store in variable
$(document).on('click', '#add-user', function() {
	event.preventDefault();
	var name = $('#name-input').val().trim();
	console.log(name);
	var role = $('#role-input').val().trim();
	console.log(role);
	var startDate = $('#startDate-input').val().trim();
	moment(startDate, 'M/D/YYYY').valueOf();
	console.log(startDate);
	var rate = $('#rate-input').val().trim();
	console.log(rate);
});
