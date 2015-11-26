app.controller('ProfileCtrl', ['userFactory', '$firebaseArray', 
	function(userFactory, $firebaseArray) {

		var self = this;
		var picsArray = [];

		picsArray = userFactory.getPicsArray();
		console.log('picsArray', picsArray);


	}]);