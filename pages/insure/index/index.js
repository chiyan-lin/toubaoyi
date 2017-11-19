//index.js
//获取应用实例
let app = getApp()
let appData = app.globalData
Page({
  data: {
    // product: ['银龄安康', '好事成双', '比翼双飞', '快乐生活'],
    product: '驾乘无忧',
    startDate: new Date().toLocaleDateString(),
    endDate: '',
    insuredList: appData.insuredList,
    totalNum: appData.totalNum,
    insureMoney: '365',
    duty: ['意外伤害 五万元', '意外伤害医疗 二万元']
  },
  onShareAppMessage:function(res){
    let path = '/pages/insure/index/index?salemanId=' + appData.salemanId
    return {
      title:'国寿保险出单系统',
      path: path,
      success:function(res){

      },
      fail:function(e){

      }
    }
  },
  onLoad: function (res) {
    if (res.salemanId){
      appData.salemanId = res.salemanId
    }//到最后支付完成的时候 给这个id加上对应的绩效 yewuyuan登陆的时候 id存在storage中这里的storage已经有了

    let index = this.data.index
    let setEndDate = (date) => {
      let temp = date.split('-')
      temp[0] = parseInt(temp[0]) + 1
      temp = temp.join('-')
      return temp
    }
    if (!appData.insureMoney)
      appData.insureMoney = this.data.insureMoney
    if (!appData.productName)
      appData.productName = this.data.product
    if (!appData.startDate)
      appData.startDate = this.data.startDate.replace(/\//g,'-')
    if (!appData.productName)
      appData.productName = this.data.product
    if (!appData.duty.length)
      appData.duty = this.data.duty

    this.setData({
      endDate: setEndDate(appData.startDate)
    })
    appData.endDate = this.data.endDate

  },
  onShow: function(){
    let _this = this
    this.setData({
      insuredList: appData.insuredList,
      totalNum: appData.totalNum,
      product: appData.productName,
      insureMoney: appData.insureMoney,
      startDate: appData.startDate,
      duty: appData.duty
    })
  },
  bindDateChange: function (e) {
    let setEndDate = (date) => {
      let temp = date.split('-')
      temp[0] = parseInt(temp[0]) + 1
      temp = temp.join('-')
      return temp
    }
    this.setData({
      startDate: e.detail.value,
      endDate: setEndDate(e.detail.value)
    })
    appData.startDate = this.data.startDate
    appData.endDate = this.data.endDate
  },
  goWrite: function () {
    wx.navigateTo({
      url: "../hand-input/hand-input"
    })
  },
  goNext: function () {
    wx.redirectTo({
      url: "../confirm/confirm"
    })
  },  
  goInfo: function () {
    wx.navigateTo({
      url: "../info/info"
    })
  },  
  toProduct: function () {
    wx.navigateTo({
      url: "../product/product"
    })
  },  
  goScan: function(){
    var that = this
    wx.chooseImage({
      sourceType: ['camera'],
      sizeType: ['compressed'],
      count: 1,
      success: function (res) {
        var tempFilePaths = res.tempFilePaths
        wx.showLoading({
          title: '上传中'
        })
        wx.uploadFile({
          url: 'http://139.199.175.175/123.php',
          filePath: tempFilePaths[0],
          name: 'pic',
          formData: {
            'cardType': '2',
            'key':'1234567890'
          },
          success: function (res) {
            wx.hideLoading()
            let data = res.data
            let info = JSON.parse(data.trim()).result
            let url = '../hand-input/hand-input?name=' + info['姓名'] + '&sex=' + info['性别'] + '&id=' + info['公民身份号码'] + '&birth=' + info['出生']
            wx.navigateTo({
              url: url,
            })
          }
        })
      }
    })
  }
})
