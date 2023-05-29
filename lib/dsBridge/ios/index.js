"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var webviewjavascriptbridge_1 = require("./webviewjavascriptbridge");
exports.default = {
    // 获取 app 版本号
    getAppVersionCode: function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, (0, webviewjavascriptbridge_1.jsBridge)('getAppVersionCode')];
            });
        });
    },
    //充值 1 钻石 2 水晶
    goRecharge: function (data) {
        if (data === void 0) { data = { type: 2 }; }
        return (0, webviewjavascriptbridge_1.jsBridge)('goCharge', data);
    },
    //当前app语言
    getLang: function () {
        return (0, webviewjavascriptbridge_1.jsBridge)('getCurrentLanguage');
    },
    //用户token
    getUserToken: function () {
        return (0, webviewjavascriptbridge_1.jsBridge)('getCurrentUserToken');
    },
    // type 1 新手引导1， 2 新手引导2， 3新用户下注提示
    getNewInstall: function (type) {
        return (0, webviewjavascriptbridge_1.jsBridge)('getNewInstall', { type: type });
    },
    //用户信息
    currentUserInfo: function () {
        return (0, webviewjavascriptbridge_1.jsBridge)('getCurrentUserInfo');
    },
    //用户信息
    userID: function () {
        return (0, webviewjavascriptbridge_1.jsBridge)('getCurrentUserId');
    },
    //当前直播间信息
    getCurrentLiveRoomInfo: function () {
        return (0, webviewjavascriptbridge_1.jsBridge)('getCurrentLiveRoomInfo');
    },
    publishUgc: function (data) {
        if (data === void 0) { data = {}; }
        // 发布ugc
        return (0, webviewjavascriptbridge_1.jsBridge)('publishUgc', data);
    },
    //带话题启动当前话题列表页
    goUgcTopicHomePage: function (topicId, topicName) {
        if (topicId === void 0) { topicId = ''; }
        if (topicName === void 0) { topicName = ''; }
        return (0, webviewjavascriptbridge_1.jsBridge)('goUgcTopicHomePage', { topicId: topicId, topicName: topicName });
    },
    //type：1 显示分享弹窗  2启动已邀请注册的用户列表界面
    inviteFunction: function (type) {
        return (0, webviewjavascriptbridge_1.jsBridge)('inviteFunction', { type: type });
    },
    goLive: function (liveId) {
        return (0, webviewjavascriptbridge_1.jsBridge)('goLive', { liveId: liveId });
    },
    //带有充值的通用对话框
    showDiamondsNotEnoughDialog: function (title, content) {
        return (0, webviewjavascriptbridge_1.jsBridge)('showDiamondsNotEnoughDialog', { title: title, content: content });
    },
    //带有充值的通用对话框
    showCrystalsNotEnoughDialog: function () {
        return (0, webviewjavascriptbridge_1.jsBridge)('showCrystalsNotEnoughDialog', { type: 2 });
    },
    //获取当前登陆帐号的钻石数量
    getCurrentDiamonds: function () {
        return (0, webviewjavascriptbridge_1.jsBridge)('getCurrentDiamonds');
    },
    //退出游戏窗口
    exitGame: function () {
        return (0, webviewjavascriptbridge_1.jsBridge)('exitGame');
    },
    //更新app钻石
    setCurrentDiamonds: function (currentDiamonds) {
        return (0, webviewjavascriptbridge_1.jsBridge)('setCurrentDiamonds', { currentDiamonds: currentDiamonds });
    },
    getCurrentGameInfo: function () {
        return (0, webviewjavascriptbridge_1.jsBridge)('getCurrentGameInfo');
    },
    // 通知终端加载完成
    onLoadFinished: function () {
        return (0, webviewjavascriptbridge_1.jsBridge)('onLoadFinished');
    },
    // 终端存储数据
    setAppCache: function (key, value) {
        return (0, webviewjavascriptbridge_1.jsBridge)('setBool', { key: key, value: value });
    },
    getAppCache: function (key, value) {
        return __awaiter(this, void 0, void 0, function () {
            var data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log('step3。000');
                        return [4 /*yield*/, (0, webviewjavascriptbridge_1.jsBridge)('getStrData', key)];
                    case 1:
                        data = _a.sent();
                        console.log('step3', data);
                        if (data) {
                            return [2 /*return*/, data];
                        }
                        if (!value) return [3 /*break*/, 3];
                        return [4 /*yield*/, (0, webviewjavascriptbridge_1.jsBridge)('setStrData', { key: key, value: value })];
                    case 2:
                        _a.sent();
                        _a.label = 3;
                    case 3: return [2 /*return*/, false];
                }
            });
        });
    },
};
