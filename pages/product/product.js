//index.js
//获取应用实例
var app = getApp()

Page({
  data: {
    product:[
      {
        pic: 'image/pic1.png',
        title: '驾乘无忧',
        intro: '驾乘无忧365天保障时刻相伴，意外伤害身 故、伤残以及意外伤害医疗全面覆盖，保障 您的正常生活！',
        price: '365'
      },
      {
        pic: 'image/pic2.png',
        title: '通泰宝',
        intro: '世界那么大，想去看看，有通泰宝，来场说 走就走的旅行！海陆空全覆盖，您的身价岂 止百万？出…',
        price: '580'
      },
      {
        pic: 'image/pic3.png',
        title: '畅行宝',
        intro: '畅行宝给你带来全方位全天候的交通意外伤 害保障，不管是飞机、火车、轮船还是机动 车出行，保…',
        price: '280'
      }     
    ]
  },
  onLoad:function(){
  },
  goBuy: function (res) {
    wx.navigateTo({
      url: '/pages/insure/index/index',
    })
  },
  onShareAppMessage: function () {
    return {
      title: '出单系统',
      desc: '投保易出单系统',
      path: '/pages/insure/index/index'
    }
  }
})
