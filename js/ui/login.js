

function InitLogin() {
    document.addEventListener('deviceready', LoginDeviceReady, true);
}

function LoginDeviceReady() {

    // no animations when pages transition!
    $.mobile.defaultPageTransition = 'none';
}

InitLogin();