app.controller('EditPicCtrl', ['userFactory', '$firebaseArray', 
	function(userFactory, $firebaseArray) {

	var self = this;

	self.picsArray = userFactory.getPicsArray();
	console.log('self.picsArray', self.picsArray);

	self.editUserPic = function() {
		
		var editedPic = {
			title: $('#editTitle').val();
			description: $('#editDescription').val();
			tags: $('#editTags').val();
			albumName: $('#editAlbumName').val();
		};

		userFactory.editPic(editedPic);

		self.editedPic = {
			title: null,
			description: null,
			tags: null,
			albumName: null
		};
	};

}]);