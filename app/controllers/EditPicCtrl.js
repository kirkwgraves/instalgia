app.controller('EditPicCtrl', ['userFactory', '$firebaseArray',
	function(userFactory, $firebaseArray, $routeParams) {

	var self = this;
	
	self.picsArray = userFactory.getPicsArray();
	console.log('self.picsArray', self.picsArray);

	

	self.editUserPic = function() {
		
		console.log('picToEdit', picToEdit);
		
		userFactory.editPic(picToEdit);

		self.picToEdit = {
			title: null,
			description: null,
			tags: null,
			albumName: null
		};
	};

}]);