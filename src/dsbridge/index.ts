import ios from './ios/index';
import android from './android/index';

const { userAgent } = navigator;
const isAndroid =
  userAgent.indexOf('Android') > -1 || userAgent.indexOf('Adr') > -1; //android终端
export const isIOS = !!userAgent.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);

const getBridge = isIOS ? ios : android;

export const toUserInfoPage = function (
  id: string | number,
  type: number | string = 5,
  options: any = null
) {
  if (!id) {
    return;
  }
  let userInfo = {
    userId: id,
  };
  if (type == 10) {
    userInfo['nickName'] = options.nickName;
  }
  let userInfoJson = JSON.stringify(userInfo);
  try {
    const halloween = (window as any).halloween;
    //alert(userInfoJson);
    halloween.getHalloween(type, userInfoJson);
  } catch (error) {
    console.log(error);
  }
  try {
    const webkit = (window as any).webkit;
    webkit.messageHandlers.getHalloween.postMessage({
      type,
      body: JSON.stringify(userInfo),
    });
  } catch (error) {
    console.log(error);
  }
};

export const dsBridge = Object.assign({}, getBridge, { toUserInfoPage });
