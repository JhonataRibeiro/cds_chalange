controllers.controller('LoginController', function($scope, $rootScope, $location, $cookieStore, UserService){
	
	var vm = this;
	vm.username = '';
	vm.password = '';

	vm.login = function() {
		console.log("chamoui");
		UserService.authenticate($.param({username: vm.username, password: vm.password}), function(authenticationResult) {
			var authToken = authenticationResult.token;
			$rootScope.authToken = authToken;
			if ($scope.rememberMe) {
				$cookieStore.put('authToken', authToken);
			}
			UserService.get(function(user) {
				$rootScope.user = user;
				$location.path("/employee");
			});
		});
	};

}) 