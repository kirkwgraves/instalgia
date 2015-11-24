app.controller('AuthCtrl', ['Auth', '$firebaseAuth', 'userFactory', '$location',
	function(Auth, $firebaseAuth, userFactory, $location) {

		var self = this;

		self.register = function() {
			Auth.$createUser({
				email: self.email,
				password: self.password
			}).then(function(userData) {
				console.log('User created with uid: ', userData.uid);
			}).catch(function(error) {
				self.error = error;
				console.log('error', error);
			});

			self.email = null;
			self.password = null;
			
		};

		self.login = function() {

			Auth.$authWithPassword({
				email: self.email, 
				password: self.password
			}).then(function(authData, loggedInUser) {
				console.log('Logged in as: ', authData.uid);
				$location.path('/profile');
				userFactory.setUser(authData);
				console.log('loggedInUser', loggedInUser);
			}).catch(function(error) {
				self.error = error;
				console.log('Authentication failed:', error);
			});
		};

		self.logout = function() {


			Auth.authObj.$logout();
			con
			console.log('User logged out!');
			console.log('authData.uid', authData.uid);
			$location.path('/');

		};

		self.removeUser = function() {

			Auth.$removeUser({
				email: self.email,
				password: self.password
			}).then(function() {
				self.message = "User removed!"
				console.log(self.message);
			}).catch(function(error) {
				self.error = error;
			});
		};

}]);