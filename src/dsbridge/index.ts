import ios from './ios/index';
import android from './android/index';

const { userAgent } = navigator;
const isAndroid =
  userAgent.indexOf('Android') > -1 || userAgent.indexOf('Adr') > -1; //android终端
export const isIOS = !!userAgent.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);

export default isIOS ? ios : android;
