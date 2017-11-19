let app = getApp()
let appData = app.globalData
Page({
  data: {
    pay: '',
    productName: '',
    orderId: '',
    loading: false
  },
  onLoad: function () {
    let _this = this
    this.setData({
      pay: appData.insureMoney * appData.totalNum,
      productName: appData.productName,
      orderId: new Date().getTime()
    })
    appData.orderId = _this.data.orderId
  },

  toRequestPayment: function () {
    var _this = this
    // _this.setData({
    //   loading: true
    // })
    // 此处需要先调用wx.login方法获取code，然后在服务端调用微信接口使用code换取下单用户的openId
    // wx.login({
    //   success: function (res) {
    //     console.log(res)
    //     appData.hasLogin = true
    //     app.getUserOpenId()
    //     _this.setData({
    //       hasLogin: true
    //     })
    //     _this.update()
    //   }
    // })

    wx.showModal({
      title: "提示",
      content: "支付完成，电子保单已经发至您的邮箱，如需打印凭证请提前打开蓝牙",
      showCancel: true,
      confirmText: "已经打开",
      cancelText: "不需要",
      success: function (res) {
        if (res.confirm) {
          wx.navigateTo({
            url:"/pages/insure/print/print"
          })
        } else if (res.cancel) {
          appData.InfoList= []
          appData.insuredList= ''
          appData.totalNum= 0
          console.log('dsa')
          wx.reLaunch({
            url: "/pages/index/index"
          })
        }
      }
    })

    // app.getUserOpenId(function (err, openid) {
    //   if (!err) {
    //     wx.request({
    //       url: paymentUrl,
    //       data: {
    //         openid
    //       },
    //       method: 'POST',
    //       success: function (res) {
    //         console.log('unified order success, response is:', res)
    //         var payargs = res.data.payargs
    //         wx.requestPayment({
    //           timeStamp: payargs.timeStamp,
    //           nonceStr: payargs.nonceStr,
    //           package: payargs.package,
    //           signType: payargs.signType,
    //           paySign: payargs.paySign
    //         })

    //         _this.setData({
    //           loading: false
    //         })
    //       }
    //     })
    //   } else {
    //     console.log('err:', err)
    //     _this.setData({
    //       loading: false
    //     })
    //   }
    // })
  }
})
