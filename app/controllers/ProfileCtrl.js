app.controller('ProfileCtrl', ['userFactory', '$firebaseArray', 
	function(userFactory, $firebaseArray) {

	var self = this;
	self.picsArray = [];

	userFactory.getPicsArray().$loaded()
	.then(function(picsArray) {
		self.picsArray = picsArray;
		console.log('self.picsArray', self.picsArray);
		// console.log('pic0 title', picsArray[0].title);
		// console.log('pic2 description', picsArray[2].description);
		// console.log('pic1 albumName', picsArray[1].albumName);
		// self.userPicObj = picsArray[0];
		// console.log('self.userPicObj', self.userPicObj);
	})
	.catch(function(error) {
		console.log('error', error);
	});		

}]);