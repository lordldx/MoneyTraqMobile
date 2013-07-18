// Main application initialization
// Also links Phonegap to Angular

var MoneyTraqMobile = {
    initialize: function() {
        this.bindEvents();
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