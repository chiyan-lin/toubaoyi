let app = getApp()
let appData = app.globalData
Page({
  data: {
    check: true,
    checkClass: '',
    endDate: '',
    insureMoney: '',
    insuredList: '',
    productItem: '',
    productName: '',
    startDate: '',
    totalNum: ''
  },
  onShow: function(){
    this.setData({
      endDate: appData.endDate,
      insureMoney: appData.insureMoney,
      insuredList: appData.insuredList,
      productItem: appData.productItem,
      productName: appData.productName,
      startDate: appData.startDate,
      totalNum: appData.totalNum
    })
  },
  onLoad: function(){
    console.log(appData)
  },
  forCheck: function(e){
    let that = this;
    this.setData({
      check: !that.data.check,
      checkClass: that.data.checkClass == 'disbale' ? '' : 'disbale'
    })
  },
  goNext: function () {
    if (this.data.check){
      wx.navigateTo({
        url: "../pay/pay"
      })
    }

  },  
})