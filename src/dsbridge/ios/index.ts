import { jsBridge } from './webviewjavascriptbridge';

export default {
  // 获取 app 版本号
  async getAppVersionCode() {
    return jsBridge('getAppVersionCode');
  },
  //充值 1 钻石 2 水晶
  goRecharge(data = { type: 2 }) {
    return jsBridge('goCharge', data);
  },
  //当前app语言
  getLang() {
    return jsBridge('getCurrentLanguage');
  },
  //用户token
  getUserToken() {
    return jsBridge('getCurrentUserToken');
  },
  // type 1 新手引导1， 2 新手引导2， 3新用户下注提示
  getNewInstall(type: number) {
    return jsBridge('getNewInstall', { type });
  },
  //用户信息
  currentUserInfo() {
    return jsBridge('getCurrentUserInfo');
  },
  //用户信息
  userID() {
    return jsBridge('getCurrentUserId');
  },
  //当前直播间信息
  getCurrentLiveRoomInfo() {
    return jsBridge('getCurrentLiveRoomInfo');
  },
  publishUgc(data = {}) {
    // 发布ugc
    return jsBridge('publishUgc', data);
  },
  //带话题启动当前话题列表页
  goUgcTopicHomePage(topicId = '', topicName = '') {
    return jsBridge('goUgcTopicHomePage', { topicId, topicName });
  },
  //type：1 显示分享弹窗  2启动已邀请注册的用户列表界面
  inviteFunction(type) {
    return jsBridge('inviteFunction', { type });
  },
  goLive(liveId) {
    return jsBridge('goLive', { liveId });
  },
  //带有充值的通用对话框
  showDiamondsNotEnoughDialog(title, content) {
    return jsBridge('showDiamondsNotEnoughDialog', { title, content });
  },
  //带有充值的通用对话框
  showCrystalsNotEnoughDialog() {
    return jsBridge('showCrystalsNotEnoughDialog', { type: 2 });
  },
  //获取当前登陆帐号的钻石数量
  getCurrentDiamonds() {
    return jsBridge('getCurrentDiamonds');
  },
  //退出游戏窗口
  exitGame() {
    return jsBridge('exitGame');
  },
  //更新app钻石
  setCurrentDiamonds(currentDiamonds) {
    return jsBridge('setCurrentDiamonds', { currentDiamonds });
  },
  getCurrentGameInfo() {
    return jsBridge('getCurrentGameInfo');
  },
  // 通知终端加载完成
  onLoadFinished() {
    return jsBridge('onLoadFinished');
  },
  schemeJump(liveId: string, type?: number) {
    if(type == 2){
      window.location.href='wormhole://liveId=' + liveId;
      return
    }
    return jsBridge('schemeJump', { liveId });
  },
  // 终端存储数据
  setAppCache(key: string, value: boolean) {
    return jsBridge('setBool', { key, value });
  },
  async getAppCache(key: string, value?: any) {
    console.log('step3。000');
    const data = await jsBridge('getStrData', key);
    console.log('step3', data);
    if (data) {
      return data;
    }
    if (value) {
      await jsBridge('setStrData', { key, value });
    }
    return false;
  },
};
