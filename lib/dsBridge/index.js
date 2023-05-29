"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isIOS = void 0;
var ios_1 = require("./ios");
var android_1 = require("./android");
var userAgent = navigator.userAgent;
var isAndroid = userAgent.indexOf('Android') > -1 || userAgent.indexOf('Adr') > -1; //android终端
exports.isIOS = !!userAgent.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);
exports.default = exports.isIOS ? ios_1.default : android_1.default;
