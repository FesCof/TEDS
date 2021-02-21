// pages/characterPage/characterPage.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var characterId
    const eventChannel = this.getOpenerEventChannel()
    eventChannel.on('acceptData',res=> {
			characterId = res
		})
    let that = this;
    wx.request({
      url: "http://42.193.36.166/personal.php",
      personal: {},
      method:'GET',
      data:{
        id:characterId,
      },
      header:{
        'content-Type':'application/json'
      },
      success: function (res2) {
        console.log(res2.data)
        that.setData({
          personal: res2.data,
        })
      },
    })

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})