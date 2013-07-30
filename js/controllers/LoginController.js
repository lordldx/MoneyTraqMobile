
function LoginController($scope) {

    $scope.Init = function() {
    if (window.localStorage['userName'] != undefined && window.localStorage['password'] != undefined) {
        $scope.Username = window.localStorage['userName'];
        $scope.Password = window.localStorage['password'];
    }        
    }

    $scope.Login = function() {
        alert("username: " + $scope.Username + "; password: " + $scope.Password);
    }
}