var budgeteer = angular.module('budgeteer', []);

budgeteer.controller('LoanCtrl', ['$scope', function ($scope) {
    $scope.loan = {};

    $scope.calculateMonthlyPayment = function () {
        $scope.monthlyPayment = 0;

        var monthlyInterest = ($scope.loan.rate / 100) / 12;
        var numberOfMonths = 12 * $scope.loan.duration;
        var denominator = Math.pow((1 + monthlyInterest), (-numberOfMonths));

        if($scope.loan){
            $scope.monthlyPayment = $scope.loan.principal * (monthlyInterest / (1 - denominator));
            $scope.totalPaid = $scope.monthlyPayment * numberOfMonths;
            $scope.totalDifference = $scope.totalPaid - $scope.loan.principal;

        }
    };

    $scope.reset = function () {
        $scope.monthlyPayment = 0;
        $scope.totalPaid = 0;
    }
}]);

angular.bootstrap(document, ['budgeteer']);