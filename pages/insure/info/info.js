let app = getApp()
Page({
  data: {
    InfoList: ''
  },
  onShow: function () {
    this.setData({
      InfoList: app.globalData.InfoList
    })
  },
  goNext: function () {
    wx.redirectTo({
      url: "../index/index"
    })
  },
})