app.controller('AuthCtrl', ['Auth', 'authFactory', '$location'],
	function(Auth, authFactory, $location) {

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
			}).then(function(authData) {
				console.log('Logged in as: ', authData.uid);
				$location.path('/profile');
				userFactory.setUser(authData);
			}).catch(function(error) {
				self.error = error;
				console.log('Authentication failed:', error);
			});
		};

		self.logout = function() {

			Auth.$unauth();
			$location.path('/login');




		}




















	});