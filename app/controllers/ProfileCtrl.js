app.controller('ProfileCtrl', ['userFactory', '$firebaseArray', 
	function(userFactory, $firebaseArray) {

		var self = this;
		var picsArray = [];

		picsArray = userFactory.getPicsArray();
		console.log('picsArray', picsArray);
		// console.log('pic 1', picsArray[0]);
		// console.log('pic2', picsArray[1]);


	}]);