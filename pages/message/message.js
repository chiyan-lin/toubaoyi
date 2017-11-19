// pages/customer/customer.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    msg: [
      {
        name: '邹心怡',
        date: '2017-07-04',
        state: '你好',
        pic: 'image/success/pic1.png'
      },
      {
        name: '朱之文',
        date: '2017-07-03',
        state: '我已经购买畅行宝啦',
        pic: 'image/success/pic2.png'
      },
      {
        name: '周海兵',
        date: '2017-07-01',
        state: '有机会一起合作',
        pic: 'image/success/pic3.png'
      },
      {
        name: '陈建军',
        date: '2017-06-28',
        state: '这款产品真的很不错',
        pic: 'image/success/pic4.png'
      },
      {
        name: '谢婷婷',
        date: '2017-06-25',
        state: '谢谢~',
        pic: 'image/success/pic5.png'
      },
      {
        name: '朱艳婷',
        date: '2017-06-16',
        state: '已经预约好了',
        pic: 'image/success/pic6.png'
      }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var success = 
    this.setData({
      tab: success
    })
  }

})