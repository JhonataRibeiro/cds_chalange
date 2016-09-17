var app = angular.module('cds', ['ui.map','ui.event','ui.select','ngRoute', 'ngSanitize' ,'ui.router' ,'cds.controllers' , 'ngCookies', 'cds.services','cds.configs'])
	.run(function($rootScope, $location, $cookieStore) {
		
		/* Reset error when a new view is loaded */
		$rootScope.$on('$viewContentLoaded', function() {
			delete $rootScope.error;
		});
		
		$rootScope.hasRole = function(role) {

			if ($rootScope.user === undefined) {
				return false;
			}
			
			if ($rootScope.user.roles[role] === undefined) {
				return false;
			}
			
			return $rootScope.user.roles[role];
		};
		
		$rootScope.logout = function() {
			delete $rootScope.user;
			delete $rootScope.authToken;
			$cookieStore.remove('authToken');
			$location.path("/login");
		};
		
		 /* Try getting valid user from cookie or go to login page */
		var originalPath = $location.path();
		$location.path("/login");
		var authToken = $cookieStore.get('authToken');
		if (authToken !== undefined) {
			$rootScope.authToken = authToken;
			UserService.get(function(user) {
				$rootScope.user = user;
				$location.path(originalPath);
			});
		}
		
		$rootScope.initialized = true;
	})

var services = angular.module('cds.services', ['ngResource']);
var controllers = angular.module('cds.controllers', []);
var configs = angular.module('cds.configs', []);
