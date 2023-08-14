import dsBridge from 'dsbridge';

const jsBridge = (method, data = null) => {
  return new Promise((resolve, reject) => {
    resolve(dsBridge.call(method, data));
  });
};

export default {
  // 获取 app 版本号
  async getAppVersionCode() {
    const v = await jsBridge('getAppVersionCode');
    return jsBridge('getAppVersionCode');
  },
  //充值 1 钻石 2 水晶
  goRecharge(data = { type: 2 }) {
    return jsBridge('goCharge', JSON.stringify(data));
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
    return jsBridge('getNewInstall', type);
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
    const info: string = dsBridge.call('getCurrentLiveRoomInfo');
    if (info) {
      return JSON.parse(info);
    }
    return false;
  },
  //启动发布朋友圈页面，可带话题
  publishUgc(data = {}) {
    // 发布ugc
    return jsBridge('publishUgc', JSON.stringify(data));
  },
  //带话题启动当前话题列表页
  goUgcTopicHomePage(topicId = '', topicName = '') {
    return jsBridge(
      'goUgcTopicHomePage',
      JSON.stringify({ topicId, topicName })
    );
  },
  //type：1 显示分享弹窗  2启动已邀请注册的用户列表界面
  inviteFunction(type) {
    return jsBridge('inviteFunction', type);
  },
  //直播间？
  goLive(liveId) {
    return jsBridge('goLive', JSON.stringify({ liveId }));
  },
  //带有充值的通用对话框 似乎不需要参数
  showDiamondsNotEnoughDialog(title, content) {
    return jsBridge(
      'showDiamondsNotEnoughDialog',
      JSON.stringify({ title, content })
    );
  },
  //带有充值的通用对话框
  showCrystalsNotEnoughDialog() {
    return jsBridge('showCrystalsNotEnoughDialog', '2');
  },
  //获取当前登陆帐号的钻石数量
  getCurrentDiamonds() {
    return jsBridge('getCurrentDiamonds');
  },
  //退出游戏窗口
  exitGame() {
    //参数暂时为空
    return jsBridge('exitGame', '{}');
  },
  //更新app钻石
  setCurrentDiamonds(currentDiamonds) {
    return jsBridge('setCurrentDiamonds', JSON.stringify({ currentDiamonds }));
  },
  getCurrentGameInfo() {
    return jsBridge('getCurrentGameInfo');
  },
  schemeJump(liveId: string, type?: number) {
    if (type == 2) {
      window.open('myscheme://com.vpb.popo?action=toChatRoom&liveId='+liveId)
    }
    return jsBridge('schemeJump', liveId);
  },
  // 通知终端加载完成
  onLoadFinished() {
    return jsBridge('onLoadFinished');
  },
  // 终端存储数据
  setAppCache(key: string, value: boolean) {
    return jsBridge('setBool', JSON.stringify({ key, value }));
  },
  async getAppCache(key: string, value?: any) {
    const data = await jsBridge('getStrData', key);

    if (data) {
      return data;
    }
    if (value) {
      await jsBridge('setStrData', JSON.stringify({ key, value }));
    }
    return false;
  },
};
