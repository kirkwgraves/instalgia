app.controller('AddPicCtrl', ['userFactory', '$firebaseArray',
	function(userFactory, $firebaseArray) {

	var self = this;

	self.picsArray = userFactory.getPicsArray();
	console.log('self.picsArray', self.picsArray);

	self.addUserPic = function() {
		var newPic = {
			title: self.newPic.title,
			description: self.newPic.description,
			tags: self.newPic.tags,
			albumName: self.newPic.albumName,
			imageUrl: self.newPic.imageUrl
		};

		userFactory.addPic(newPic);

		self.newPic = {
			title: null,
			description: null,
			tags: null,
			albumName: null,
			imageUrl: null
		};
	};

}]);