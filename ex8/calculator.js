angular.module('CalculatorApp', [])
    .controller('CalculatorController', function ($scope) {
        $scope.operator = '+';

        $scope.result = function () {
            if ($scope.a == null || $scope.b == null) {
                return '';
            }
            if ($scope.operator == '+') {
                return $scope.a + $scope.b;
            }
            if ($scope.operator == '-') {
                return $scope.a - $scope.b;
            }
            if ($scope.operator == '*') {
                return $scope.a * $scope.b;
            }
            if ($scope.operator == '/') {
                return $scope.b == 0 ? 'Cannot divide by zero' : $scope.a / $scope.b;
            }
        };
    });
