app.controller('EditPicCtrl', ['userFactory', '$firebaseArray', 
	function(userFactory, $firebaseArray) {

	var self = this;

	self.picsArray = userFactory.getPicsArray();
	console.log('self.picsArray', self.picsArray);

	self.editUserPic = function() {
		var editedPic = {
			title: self.editedPic.title,
			description: self.editedPic.description,
			tags: self.editedPic.tags,
			albumName: self.editedPic.albumName,
			imageUrl: self.editedPic.imageUrl
		};

		userFactory.editPic(editedPic);

		self.editedPic = {
			title: null,
			description: null,
			tags: null,
			albumName: null,
			imageUrl: null
		};
	};

}]);