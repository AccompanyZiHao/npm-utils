const win: any = window;

function setupWKWebViewJavascriptBridge(callback) {
  try {
    document.addEventListener(
      'WebViewJavascriptBridgeReady',
      function () {
        callback(win.WebViewJavascriptBridge);
      },
      false
    );
    if (win.WKWebViewJavascriptBridge) {
      return callback(win.WKWebViewJavascriptBridge);
    }
    if (win.WKWVJBCallbacks) {
      return win.WKWVJBCallbacks.push(callback);
    }

    win.WKWVJBCallbacks = [callback];
    win.webkit.messageHandlers.iOS_Native_InjectJavascript.postMessage(null);
  } catch (e) {
    console.log(e);
  }

}

const bridgeCallHandler = (callback) => {
  if (win.WebViewJavascriptBridge) {
    return win.WebViewJavascriptBridge;
  }
  setupWKWebViewJavascriptBridge(callback);
};
export const jsBridge = (method, data = {}) => {
  return new Promise((resolve, reject) => {
    bridgeCallHandler(function (bridge) {
      bridge.callHandler(method, data, function (responseData) {
        resolve(responseData);
      });
    });
  });
};
