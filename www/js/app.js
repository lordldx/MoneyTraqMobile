
function MoneyTraqMobile () {
    this.init = function () {
        document.addEventListener("deviceready", this.onDeviceReady, false);
    };

    this.onDeviceReady = function () {
        $.mobile.defaultPageTransition = "none";
    };
};