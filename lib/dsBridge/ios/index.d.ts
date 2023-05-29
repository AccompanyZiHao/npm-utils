declare const _default: {
    getAppVersionCode(): Promise<unknown>;
    goRecharge(data?: {
        type: number;
    }): Promise<unknown>;
    getLang(): Promise<unknown>;
    getUserToken(): Promise<unknown>;
    getNewInstall(type: number): Promise<unknown>;
    currentUserInfo(): Promise<unknown>;
    userID(): Promise<unknown>;
    getCurrentLiveRoomInfo(): Promise<unknown>;
    publishUgc(data?: {}): Promise<unknown>;
    goUgcTopicHomePage(topicId?: string, topicName?: string): Promise<unknown>;
    inviteFunction(type: any): Promise<unknown>;
    goLive(liveId: any): Promise<unknown>;
    showDiamondsNotEnoughDialog(title: any, content: any): Promise<unknown>;
    showCrystalsNotEnoughDialog(): Promise<unknown>;
    getCurrentDiamonds(): Promise<unknown>;
    exitGame(): Promise<unknown>;
    setCurrentDiamonds(currentDiamonds: any): Promise<unknown>;
    getCurrentGameInfo(): Promise<unknown>;
    onLoadFinished(): Promise<unknown>;
    setAppCache(key: string, value: boolean): Promise<unknown>;
    getAppCache(key: string, value?: any): Promise<unknown>;
};
export default _default;
