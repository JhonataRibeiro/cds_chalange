controllers.controller('EmployeeController', ['Employee','$location', function(Employee,$location){
	var vm = this;
    vm.employees = {}
    vm.skills = [];
    
    vm.getEmployees= (function() {
        Employee.all().then(function(result){
            vm.employees = result.data;
            console.log(result.data);
        },function(err){
            console.warn("Erro ao retornar employees");
        });      
    }()) 

    vm.detail = (function(employee) {
        Employee.setEmployee(employee);
        $location.path('/employee/detail');
    })
}]);

controllers.controller('EmployeeDetailController', ['Employee','$location', function(Employee,$location){
    console.info("Loaded:EmployeeDetailController");
    var vm = this;
    vm.employee = Employee.getEmployee();
    vm.remove = function(employee){
        Employee.remove(employee);
    }
     vm.edit = function(employee){
                console.log("edit: " + JSON.stringify(employee));
               Employee.setEmployee(employee);
        $location.path('/employee/new/' + employee.id);
        }

         vm.back = function(){
           $location.path('/employee')
                }


}]);


controllers.controller('EmployeeCreateController', ['Employee','$scope','$location','$routeParams', function(Employee,$scope,$location,$routeParams){
    var vm = this;
    vm.offices = Employee.getOffices();
    vm.sectors = Employee.getSectors();
    vm.skills = Employee.getSkills();
    vm.typeContacts = Employee.getContacts();
   if($routeParams.id){
        vm.employee = Employee.getEmployee();
        console.log(JSON.stringify(vm.employee));
   }else{
    vm.employee = {};
    vm.employee.address = '';
        vm.employee.skills = [];
   }

   vm.contacts = [];

    vm.availableSkills = ['Node','PHP','JAVA','Jquery','Anuglar.js','Web Design','UX','CSS'];

    vm.save = function() {
        console.log("Employee to save: " + JSON.stringify(vm.employee));
        Employee.save(vm.employee).then(function(data){
            $location.path('/employee');
        },function(err){
            $location.path('/employee');
        })
    }

    vm.newContact = function() {
           var newC = {};
           newC.type = '';
           newC.value = '';
           vm.contacts.push(newC);
     }

     vm.removeContact = function(index) {
                vm.contacts.splice(index,1);
      }


    // Em um refactor eu tiraria todos os $scopes, e deixava o controller apenas no padraao ControllerAs do Jhon Papa, mas o tempo não deixa.
    $scope.lat = 0;
    $scope.lng = 0;
    $scope.result = '';

    vm.getCurrentLocation = (function(){
        if (navigator.geolocation) {
           navigator.geolocation.getCurrentPosition(function(position) {
              $scope.lat = position.coords.latitude;
              $scope.lng = position.coords.longitude;
              $scope.setAddres($scope.lat,$scope.lng)
              console.info("Position: " + $scope.lat + " " + $scope.lng);
          })
       }
   }());

    var newMap = new google.maps.LatLng(-15.7942, -47.8821);
    
    $scope.mapOptions = {
        center: newMap,
        zoom: 15,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };

    $scope.onMapIdle = function() {
        console.info("====> called onMapIdle")
        if ($scope.myMarkers === undefined){    
            var marker = new google.maps.Marker({
                map: $scope.myMap,
                draggable: true,
                position: newMap
            });
            google.maps.event.addListener(marker, 'dragend', function (evt) {
                $scope.setAddres(evt.latLng.lat().toFixed(3) , evt.latLng.lng().toFixed(3));

            });
            $scope.myMarkers = [marker, ];
        }
    };

    $scope.setAddres = function(lat,lng) {
        console.info("====> set addres " +  lat,lng)
        $scope.lat = lat;
        $scope.lng = lng;
    }

    function geoCode(lat,lng) {
       console.log("getCode: " + lat + " " + lng);  
       var geocoder = new google.maps.Geocoder();
       var latlng = new google.maps.LatLng(lat, lng);
       geocoder.geocode({ 'latLng': latlng }, function (results, status) {
        if (status == google.maps.GeocoderStatus.OK) {
            if (results[1]) {
                console.log(results[1].formatted_address);
                vm.employee.address = results[1].formatted_address;
            } else {
                vm.employee.address = 'Ops, cidade não encontrada';
            }
        } else {
            console.log('Geocoder failed due to: ' + status);
            vm.employee.address = 'Ops, ocorreu um erro, contate o administrador do sistema';

        }
    }); 
   }

   $scope.$watchGroup(['lat', 'lng'], function(newValues, oldValues, scope) {
      geoCode(newValues[0],newValues[1]); 
  });
}]);

