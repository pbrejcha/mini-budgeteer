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
        var loan = {
            name : '',
            principal : '',
            rate : '',
            duration : ''
        };
        $scope.loan = loan;
        $scope.monthlyPayment = '';
        $scope.totalPaid = '';
        $scope.totalDifference = '';
    }
}]);

angular.bootstrap(document, ['budgeteer']);