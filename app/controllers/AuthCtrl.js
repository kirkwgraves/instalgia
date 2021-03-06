app.controller('AuthCtrl', ['Auth', '$firebaseAuth', 'userFactory', '$location',
	function(Auth, $firebaseAuth, userFactory, $location) {

		var self = this;
		var userId;


		self.register = function() {
			Auth.$createUser({
				email: self.email,
				password: self.password
			}).then(function(userData) {
				console.log('User created with uid: ', userData.uid);
				$location.path('/');
			}).catch(function(error) {
				self.error = error;
				console.log('error', error);
			});

		};

		self.login = function() {

			Auth.$authWithPassword({
				email: self.email, 
				password: self.password
			}).then(function(authData, loggedInUser) {
				console.log('Logged in as: ', authData.uid);
				userFactory.setUser(authData);
				userId = authData.password.email;
				console.log('userId', userId);
				$location.path('/user-profile');
			}).catch(function(error) {
				self.error = error;
				console.log('Authentication failed:', error);
			});
		};

		self.logout = function() {
			console.log('logging out');
				Auth.$unauth();
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

		self.checkIn = function() {
			if (userId === true) {
				console.log('It is true!');
				return userId;
			}
		}
}]);