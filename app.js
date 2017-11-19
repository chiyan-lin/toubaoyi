//app.js
App({
  globalData: {
    insureMoney: 0,
    productName: '',
    duty: [],
    startDate: '',
    endDate: '',
    InfoList: [],
    insuredList: '',
    totalNum: 0,
    orderId:'',

    point: '特别约定:意外医疗免配额100元赔付比例80% ',
    //law: '本产品条款为中国人寿保险股份有限公司<<国寿通泰交通意外伤害保险2013版>>和<<国寿附加通泰交通意外费用补偿医疗保险>>',
    salemanId: '666',
    position: '勤思代理点',
    company: '前海人寿保险股份有限公司广东省分公司',

    hasLogin:false,
    openid:''
  },
  onLaunch: function () {
    let _this = this
    wx.getStorage({
      key:'salemanId',
      success:function(res){
        _this.globalData.salemanId = res.data
      }
    })
  },

  getUserOpenId: function (callback) {
    var _this = this

    if (_this.globalData.openid) {
      callback(null, _this.globalData.openid)
    } else {
      wx.login({
        success: function (data) {
          wx.request({
            url: openIdUrl,
            data: {
              code: data.code
            },
            success: function (res) {
              console.log('拉取openid成功', res)
              _this.globalData.openid = res.data.openid
              callback(null, _this.globalData.openid)
            },
            fail: function (res) {
              console.log('拉取用户openid失败，将无法正常使用开放接口等服务', res)
              callback(res)
            }
          })
        },
        fail: function (err) {
          console.log('wx.login 接口调用失败，将无法正常使用开放接口等服务', err)
          callback(err)
        }
      })
    }
  }
})
