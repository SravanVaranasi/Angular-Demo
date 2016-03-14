(function() {
    
    var OrdersController = function ($scope, $routeParams, customersFactory) {
        
        var customerId = $routeParams.customerId;
        $scope.orders = null;
        $scope.customer = null;
        
        function init() {
                //Search the customers for the customerId and fetch the orders
                $scope.customer = customersFactory.getCustomer(customerId);
            }
        init();
    };
        
    OrdersController.$inject = ['$scope', '$routeParams', 'customersFactory'];

    angular.module('customersApp')
      .controller('OrdersController', OrdersController);
    
}());