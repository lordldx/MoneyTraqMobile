// Main application initialization
// Also links Phonegap to Angular

var MoneyTraqMobile = {
    initialize: function() {
        this.bindEvents();

        angular.module('moneytraq')
            .config(function($routeProvider) {
                $routeProvider
                    .when('/', {controller:LoginController, templateUrl:'login.html'})
                    .when('/overview', {controller:OverviewController, templateUrl:'overview.html'})
                    .when('/newTransaction',{controller:TransactionController, templateUrl:'newTransaction.html'})
                    .when('/newTransactionDetail',{controller:TransactionController, templateUrl:'newTransactionDetail.html'})
                    .otherwise({redirectTo:'/'});
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