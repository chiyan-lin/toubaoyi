//index.js
//获取应用实例
var app = getApp()

Page({
  data: {
    notice: [
      '前海人寿广西省分公司 周** 投保 200.00元',
      '前海人寿浙江省分公司 林** 投保 400.00元',
      '前海人寿广东省分公司 陈** 投保 500.00元',
      '前海人寿杭州省分公司 李** 投保 1000.00元'
    ],
    autoplay: true,
    interval: 5000,
    duration: 1000,
  },
  onLoad:function(){
  },
  goFastInsure:function(res){
    wx.navigateTo({
      url: '../insure/index/index',
    })
  },
  goAchr: function (res) {
    wx.navigateTo({
      url: '../achievement/achievement',
    })
  },
  goMsg: function (res) {
    wx.navigateTo({
      url: '../message/message',
    })
  },
  onShareAppMessage: function () {
    return {
      title: '投保易',
      desc: '前海人寿',
      path: '/pages/index'
    }
  }
})
