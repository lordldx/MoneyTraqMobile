// Main application initialization
// Also links Phonegap to Angular

var MoneyTraqMobile = {
    initialize: function() {
        this.bindEvents();

        angular.module('MoneyTraqMobile', ['ajoslin.mobile-navigate'])
            .config(function($routeProvider, $locationProvider) {

                // Routes
                $routeProvider
                    .when('/', {controller:LoginController, templateUrl:'login.html'})
                    .when('/overview', {controller:OverviewController, templateUrl:'overview.html'})
                    .when('/newTransaction',{controller:TransactionController, templateUrl:'newTransaction.html'})
                    .when('/newTransactionDetail',{controller:TransactionController, templateUrl:'newTransactionDetail.html'})
                    .otherwise({redirectTo: '/'});

                // Enable HTML5 type URL's  (hashbang mode causes ripple to flip ;-))
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