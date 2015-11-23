app.factory('Auth', ['$firebaseAuth',
		function($firebaseAuth) {
			var ref = new Firebase('https://instalgia.firebaseio.com/');
			return $firebaseAuth(ref);
		}
	]);





	













	




















