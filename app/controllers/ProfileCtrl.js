app.controller('ProfileCtrl', ['userFactory', '$firebaseArray', 
	function(userFactory, $firebaseArray) {

	var self = this;
	self.test = 'TEST';

	var userPicObj = {
		title: null,
		albumName: null,
		imageUrl: null,
		description: null,
		tags: null
	}

	userFactory.getPicsArray().$loaded()
	.then(function(picsArray) {
		console.log('picsArray', picsArray);
		console.log('pic0 title', picsArray[0].title);
		console.log('pic2 description', picsArray[2].description);
		console.log('pic1 albumName', picsArray[1].albumName);
		userPicObj = picsArray[0];
		console.log('userPicObj', userPicObj);
	})
	.catch(function(error) {
		console.log('error', error);
	});		

}]);