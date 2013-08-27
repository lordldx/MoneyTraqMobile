
function LoginController($scope, $navigate) {
    $scope.$navigate = $navigate;

    $scope.Init = function() {
    if (window.localStorage['userName'] != undefined && window.localStorage['password'] != undefined) {
        $scope.Username = window.localStorage['userName'];
        $scope.Password = window.localStorage['password'];
    }
    };

    $scope.Login = function($location) {
        $navigate.go('/overview');
    };
}