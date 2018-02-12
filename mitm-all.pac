var IP_ADDRESS = '10.92.14.186:6789';
var PROXY_TYPE = 'PROXY';
var PROXY_METHOD = PROXY_TYPE + ' ' + IP_ADDRESS;

function FindProxyForURL(url, host) {
    return PROXY_METHOD;
}
