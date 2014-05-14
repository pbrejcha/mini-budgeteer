var budgeteer = angular.module('budgeteer', []);

budgeteer.controller('LoanCtrl', ['$scope', function ($scope) {
    $scope.message = "hello";
}]);

angular.bootstrap(document, ['budgeteer']);