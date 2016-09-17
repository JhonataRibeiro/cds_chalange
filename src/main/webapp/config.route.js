configs.config(
		[ '$routeProvider', '$locationProvider', '$httpProvider', '$stateProvider' ,  function($routeProvider, $locationProvider, $httpProvider, $stateProvider) {
			
			// Alguns paths neste arquivo estão com caminho absoluto.
			// Antes de uma build:dist eu faria um refactor.

			//Employers

			// List employees
			$routeProvider.when('/employee', {
				 templateUrl: 'js/app/employee/employee.html',
				 controller: 'EmployeeController as EmployeeCtrl'
			});

			// Detail employees
			$routeProvider.when('/employee/detail', {
				templateUrl: 'js/app/employee/employeeDetail.html',
				controller: 'EmployeeDetailController as EmployeeDetailCtrl'
			});

            // Create employees
			$routeProvider.when('/employee/new', {
				templateUrl: 'js/app/employee/employeeCreate.html',
				controller: 'EmployeeCreateController as EmployeeCreateCtrl'
			});
			// Edit employees
			$routeProvider.when('/employee/new/:id', {
				templateUrl: 'js/app/employee/employeeCreate.html',
				controller: 'EmployeeCreateController as EmployeeCreateCtrl'
			});


			$routeProvider.when('/login', {
				templateUrl: 'js/app/login/login.html',
				controller: 'LoginController as LoginCtrl'
			});
			
			$routeProvider.otherwise({
				templateUrl: 'js/app/employee/employee.html',
				 controller: 'EmployeeController as EmployeeCtrl'
			});
			
			$locationProvider.hashPrefix('!');
			
			/* Register error provider that shows message on failed requests or redirects to login page on
			 * unauthenticated requests */
		    $httpProvider.interceptors.push(function ($q, $rootScope, $location) {
			        return {
			        	'responseError': function(rejection) {
			        		var status = rejection.status;
			        		var config = rejection.config;
			        		var method = config.method;
			        		var url = config.url;
			      
			        		if (status == 401) {
			        			$location.path( "/login" );
			        		} else {
			        			$rootScope.error = method + " on " + url + " failed with status " + status;
			        		}
			              
			        		return $q.reject(rejection);
			        	}
			        };
			    }
		    );
		    
		    /* Registers auth token interceptor, auth token is either passed by header or by query parameter
		     * as soon as there is an authenticated user */
		    $httpProvider.interceptors.push(function ($q, $rootScope, $location) {
		        return {
		        	'request': function(config) {
		        		var isRestCall = config.url.indexOf('rest') == 0;
		        		if (isRestCall && angular.isDefined($rootScope.authToken)) {
		        			var authToken = $rootScope.authToken;
		        			if (cdsAppConfig.useAuthTokenHeader) {
		        				config.headers['X-Auth-Token'] = authToken;
		        			} else {
		        				config.url = config.url + "?token=" + authToken;
		        			}
		        		}
		        		return config || $q.when(config);
		        	}
		        };
		    }
	    );
		   
		} ]
		
	)