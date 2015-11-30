app.factory('userFactory', ['$firebaseArray', '$firebaseObject' '$route', 
	function($firebaseArray, $firebaseObject, $route) { 

	var picsArray = [];
	var loggedInUser, ref;
	
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
			});

		},

		editPic: function(editedPic) {
			var index = picsArray.$indexFor(editedPic.id);
      picsArray[index] = editedPic;
      picsArray.$save(index);
		} 

		getPicsArray: function() {
			console.log('picsArray', picsArray);
			return picsArray;
		}

	}; //end return

}]); //end factory definition