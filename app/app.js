var budgeteer = angular.module('budgeteer', []);

budgeteer.controller('LoanCtrl', ['$scope', function ($scope) {
    $scope.loan = {};
}]);

angular.bootstrap(document, ['budgeteer']);