//Option 1
/*app.controller('CustomersController', function ($scope) {
    $scope.sortBy = 'name';
    $scope.reverse = false;
    
    $scope.customers = [{joined: '2000-12-02', name: 'John', city: 'Chandler', orderTotal: 9.9956}, {joined: '2015-12-06', name: 'Dave', city: 'New York', orderTotal: 15.46}, {joined: '2012-11-23', name: 'Ren', city: 'Los Angeles',    orderTotal: 9.41992}];
    $scope.doSort = function (propName) {
        $scope.sortBy = propName;
        $scope.reverse = !$scope.reverse;
    }; 
});*/

//Option 2
/*
(function() {
        angular.module('customersApp')
         .controller('CustomersController', function ($scope) {
            $scope.sortBy = 'name';
            $scope.reverse = false;

            $scope.customers = [{joined: '2000-12-02', name: 'John', city: 'Chandler', orderTotal: 9.9956}, {joined: '2015-12-06', name: 'Dave', city: 'New York', orderTotal: 15.46}, {joined: '2012-11-23', name: 'Ren', city: 'Los   Angeles', orderTotal: 9.41992}];
            $scope.doSort = function (propName) {
                $scope.sortBy = propName;
                $scope.reverse = !$scope.reverse;
            }; 
        });

}());*/


//Option 3

(function() {
    
    var CustomersController = function ($scope, customersService) {
        $scope.sortBy = 'name';
        $scope.reverse = false;
        $scope.customers = [];
        
        function init() {
            $scope.customers = customersService.getCustomers();
        }
        
        init();
        
        $scope.doSort = function(propName) {
           $scope.sortBy = propName;
           $scope.reverse = !$scope.reverse;
        };
    };
    
    CustomersController.$inject = ['$scope','customersService'];

    angular.module('customersApp')
      .controller('CustomersController', CustomersController);
    
}());