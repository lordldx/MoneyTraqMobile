
function LoginController($scope, $window) {
    $scope.$window = $window;

    $scope.Init = function() {
    if (window.localStorage['userName'] != undefined && window.localStorage['password'] != undefined) {
        $scope.Username = window.localStorage['userName'];
        $scope.Password = window.localStorage['password'];
    }        
    }

    $scope.Login = function($location) {
        $window.location.href = 'overview';
    }
}