app.factory('userFactory', ['$firebaseArray', '$route', 
	function($firebaseArray, $route) { 

	var picsArray = [];
	var loggedInUser, ref;
	var newPic = {
		title: null,
		description: null,
		tags: null,
		albumName: null,
		imageUrl: null
	};

	return {

		setUser: function(authData) {
			loggedInUser = authData;
			console.log('loggedInUser', loggedInUser);
			ref = new Firebase('https://instalgia.firebaseio.com/users/' + loggedInUser.uid + '/pics/');
			picsArray = $firebaseArray(ref);
			console.log('ref', ref);
			console.log('picsArray', picsArray);
			return picsArray;
		},

		addPic: function(newPic) {
			console.log('picsArray', picsArray);
			picsArray.$add(newPic)
			.then(function(ref) {
				var id = ref.key();
				console.log('added pic with id ' + id);
			})
		},


		getPicsArray: function() {
			console.log('picsArray', picsArray);
			return picsArray;
		}

	}; //end return

}]); //end factory definition