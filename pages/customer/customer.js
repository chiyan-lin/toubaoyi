// pages/customer/customer.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tab:[],
    success:true,
    maybe:false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var success = [
      {
        name: '邹心怡',
        date: '2017-07-04',
        state: '已买产品：通泰宝、畅行宝',
        pic: 'image/success/pic1.png'
      },
      {
        name: '朱之文',
        date: '2017-07-03',
        state: '已买产品：畅行宝',
        pic: 'image/success/pic2.png'
      },
      {
        name: '周海兵',
        date: '2017-07-01',
        state: '已买产品：快乐游、畅行宝',
        pic: 'image/success/pic3.png'
      },
      {
        name: '陈建军',
        date: '2017-06-28',
        state: '已买产品：驾乘无忧',
        pic: 'image/success/pic4.png'
      },
      {
        name: '谢婷婷',
        date: '2017-06-25',
        state: '已买产品：快乐游、驾乘无忧',
        pic: 'image/success/pic5.png'
      },
      {
        name: '朱艳婷',
        date: '2017-06-16',
        state: '已买产品：畅行宝',
        pic: 'image/success/pic6.png'
      },
      {
        name: '李志伟',
        date: '2017-06-12',
        state: '已买产品：孝行天下',
        pic: 'image/success/pic7.png'
      },
      {
        name: '林小涵',
        date: '2017-06-08',
        state: '已买产品：健康人生吉祥卡',
        pic: 'image/success/pic8.png'
      },
    ]
    this.setData({
      tab:success
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  toSuccess: function () {
    var success = [
      {
        name: '邹心怡',
        date: '2017-07-04',
        state: '已买产品：通泰宝、畅行宝',
        pic: 'image/success/pic1.png'
      },
      {
        name: '朱之文',
        date: '2017-07-03',
        state: '已买产品：畅行宝',
        pic: 'image/success/pic2.png'
      },
      {
        name: '周海兵',
        date: '2017-07-01',
        state: '已买产品：快乐游、畅行宝',
        pic: 'image/success/pic3.png'
      },
      {
        name: '陈建军',
        date: '2017-06-28',
        state: '已买产品：驾乘无忧',
        pic: 'image/success/pic4.png'
      },
      {
        name: '谢婷婷',
        date: '2017-06-25',
        state: '已买产品：快乐游、驾乘无忧',
        pic: 'image/success/pic5.png'
      },
      {
        name: '朱艳婷',
        date: '2017-06-16',
        state: '已买产品：畅行宝',
        pic: 'image/success/pic6.png'
      },
      {
        name: '李志伟',
        date: '2017-06-12',
        state: '已买产品：孝行天下',
        pic: 'image/success/pic7.png'
      },
      {
        name: '林小涵',
        date: '2017-06-08',
        state: '已买产品：健康人生吉祥卡',
        pic: 'image/success/pic8.png'
      },
    ]
    this.setData({
      tab: success,
      success: true,
      maybe: false
    }) 
  },

  /**
   * 生命周期函数--监听页面显示
   */
  toMaybe: function () {
    var maybe = [
      {
        name: '仰望天空',
        state: '意向产品：畅行宝、驾乘无忧',
        pic: 'image/maybe/pic1.png'
      },
      {
        name: '一匹马',
        state: '意向产品：畅行宝',
        pic: 'image/maybe/pic2.png'
      },
      {
        name: '帮你省钱',
        state: '意向产品：快乐游、通泰宝',
        pic: 'image/maybe/pic3.png'
      },
      {
        name: '悠然米拉',
        state: '意向产品：驾乘无忧',
        pic: 'image/maybe/pic4.png'
      },
      {
        name: '调色匠人',
        state: '意向产品：快乐游、驾乘无忧',
        pic: 'image/maybe/pic5.png'
      },
      {
        name: '河口河口',
        state: '意向产品：驾乘无忧',
        pic: 'image/maybe/pic6.png'
      },
      {
        name: '颜文字君',
        date: '2017-06-12',
        state: '意向产品：孝行天下、畅行宝',
        pic: 'image/maybe/pic7.png'
      },
      {
        name: 'OverSoul',
        state: '意向产品：健康人生吉祥卡',
        pic: 'image/maybe/pic8.png'
      },
    ]
    this.setData({
      tab: maybe,
      success: false,
      maybe: true
    }) 
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