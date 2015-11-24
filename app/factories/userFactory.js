app.factory('userFactory', ['$firebaseArray', '$route', 
	function($firebaseArray, $route) { 

	var self = this;
	var picsArray = [];
	var loggedInUser, ref;

	return {

		setUser: function(authData) {
			loggedInUser = authData;
			console.log('loggedInUser', loggedInUser);
			ref = new Firebase('https://instalgia.firebaseio.com/users/' + loggedInUser.uid + '/pics');
			picsArray = $firebaseArray(ref);
			console.log('picsArray', picsArray);
		},

		getUserPics: function() {
			return picsArray;
		},

		addPics: function() {

		}
 

	}; //end return

}]); //end factory definition