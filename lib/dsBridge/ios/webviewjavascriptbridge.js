"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.jsBridge = void 0;
// @ts-ignore
var win = window;
function setupWKWebViewJavascriptBridge(callback) {
    try {
        // @ts-ignore
        document.addEventListener('WebViewJavascriptBridgeReady', function () {
            callback(win.WebViewJavascriptBridge);
        }, false);
        if (win.WKWebViewJavascriptBridge) {
            return callback(win.WKWebViewJavascriptBridge);
        }
        if (win.WKWVJBCallbacks) {
            return win.WKWVJBCallbacks.push(callback);
        }
        win.WKWVJBCallbacks = [callback];
        win.webkit.messageHandlers.iOS_Native_InjectJavascript.postMessage(null);
    }
    catch (e) {
        // @ts-ignore
        console.log(e);
    }
}
var bridgeCallHandler = function (callback) {
    if (win.WebViewJavascriptBridge) {
        return win.WebViewJavascriptBridge;
    }
    setupWKWebViewJavascriptBridge(callback);
};
var jsBridge = function (method, data) {
    if (data === void 0) { data = {}; }
    return new Promise(function (resolve, reject) {
        bridgeCallHandler(function (bridge) {
            bridge.callHandler(method, data, function (responseData) {
                resolve(responseData);
            });
        });
    });
};
exports.jsBridge = jsBridge;
