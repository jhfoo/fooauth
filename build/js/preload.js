// validate browser is supported
if (isSupportedBrowser()) {
    loadScript('/js/main-bundle.js');
} else {
    document.getElementById('app').innerHTML ='Unsupported browser';
}

function isSupportedBrowser() {
    console.log(navigator.userAgent);
    if (navigator.userAgent.indexOf('Chrome') > -1 ||
        navigator.userAgent.indexOf('Firefox') > -1)
        return true;
    else
        return false;
}

function loadScript(url) {
    var script = document.createElement('script');
    script.setAttribute('type', 'text/javascript');
    script.setAttribute('src', url);
    document.body.appendChild(script);
}