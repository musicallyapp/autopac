var IP_ADDRESS = '10.92.14.186:6789';
var PROXY_TYPE = 'PROXY';
var PROXY_METHOD = PROXY_TYPE + ' ' + IP_ADDRESS_GFW;

var RULES = [
    //custom-list
    [
        ".tiktokv.com",
        ".snssdk.com",
        ".amemv.com",
        ".douyin.com",
    ],
];

function rules_match_(host) {
    var host_ = '.' + host;

    // IMPORTANT: Respect the order of RULES.
    for (var j = 0; j < RULES.length; j++) {
        var rules = RULES[j]
        for (var i = 0; i < rules.length; i++) {
           if (host_ === rules[i] || dnsDomainIs(host, rules[i])) {
               return true;
           }
        }
    }
}

function FindProxyForURL(url, host) {
    return !rules_match_(host) ? "DIRECT" : PROXY_METHOD;
}
