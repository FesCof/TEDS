// index.js
// 获取应用实例
const app = getApp()

Page({
  data: {
    url:"https://www.cofw.fun/agawiki"
  },
  
  ico_click: function (e) {
    var characterId = e.currentTarget.dataset.characterId;
    wx.navigateTo({
      url: '../characterPage/characterPage',
      success: function(res){
        res.eventChannel.emit('acceptData',characterId)
      }
    })
  },

  // 事件处理函数
  bindViewTap() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad() {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse) {
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
    
    //获取数据库
    let that = this;
    wx.request({
      url: "https://www.cofw.fun/agawiki/allChrIndex",
      wiki: {},
      method:'POST',
      header:{
        'content-Type':'application/x-www-form-urlencoded'
      },
      success: function (res) {
        that.setData({
          wiki: res.data,
        })
      },
    })
  },
  getUserInfo(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
