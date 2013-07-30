// Main application initialization
// Also links Phonegap to Angular

var MoneyTraqMobile = {
    initialize: function() {
        this.bindEvents();

        angular.module('MoneyTraqMobile', [])
            .config(function($routeProvider, $locationProvider) {
                $routeProvider
                    .when('/', {controller:LoginController, templateUrl:'login.html'})
                    .when('/overview', {controller:OverviewController, templateUrl:'overview.html'})
                    .when('/newTransaction',{controller:TransactionController, templateUrl:'newTransaction.html'})
                    .when('/newTransactionDetail',{controller:TransactionController, templateUrl:'newTransactionDetail.html'})
                    .otherwise({redirectTo: '/'});

                $locationProvider.html5Mode(true);
            });

        
    },

    bindEvents: function() {
        document.addEventListener('load', this.onLoad, false);
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },

    onLoad: function() {
        
    },
    
    onDeviceReady: function() {
    }
};