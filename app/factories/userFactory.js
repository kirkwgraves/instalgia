app.factory('userFactory', ['$firebaseArray', '$route', 
	function($firebaseArray, $route) { 

	var picsArray = [];
	var loggedInUser, ref;

	return {

		setUser: function(authData) {
			loggedInUser = authData;
			console.log('loggedInUser', loggedInUser);
			ref = new Firebase('https://instalgia.firebaseio.com/users/' + loggedInUser.uid + '/pics');
			picsArray = $firebaseArray(ref);
		},

		getUserPics: function() {
			return picsArray;
		}


	}; //end return

}]); //end factory definition