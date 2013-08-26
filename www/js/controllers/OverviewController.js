function OverviewController($scope) {

    $scope.currentIncome = function() {
        // fetch from backend
        var income = 100;
        return income;
    }

    $scope.currentExpense = function() {
        // fetch from backend
        var expense = 200;
        return expense;
    }
}