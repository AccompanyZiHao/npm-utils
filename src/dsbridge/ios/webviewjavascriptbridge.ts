
// @ts-ignore
const win: any = window;

function setupWKWebViewJavascriptBridge(callback) {
  try {
    // @ts-ignore
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
    // @ts-ignore
    console.log(e);
  }

}

const bridgeCallHandler = (callback: any) => {
  if (win.WebViewJavascriptBridge) {
    return win.WebViewJavascriptBridge;
  }
  setupWKWebViewJavascriptBridge(callback);
};
export const jsBridge = (method: string, data = {}) => {
  return new Promise((resolve, reject) => {
    bridgeCallHandler(function (bridge: any) {
      bridge.callHandler(method, data, function (responseData: any) {
        resolve(responseData);
      });
    });
  });
};
