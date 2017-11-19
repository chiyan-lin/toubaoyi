// pages/product/product.js
var app = getApp()
Page({
  data: {
    product_info: [
      {
        id: '1004',
        isDefault: true,
        img: "./image/pic1.png",
        selected: "selected",
        price: 365,
        duty: ['意外伤害 六万元', '意外伤害医疗 七万元'],
        info: "驾乘无忧"//到时候要做一下字符截断
      },
      {
        id: '1005',
        isDefault: false,
        img: "./image/pic2.png",
        selected: "unSelected",
        price: 580,
        duty: ['意外伤害 八万元', '意外伤害医疗 一万元'],
        info: "通泰宝"//到时候要做一下字符截断
      },
      {
        id: '1006',
        isDefault: false,
        img: "./image/pic3.png",
        selected: "unSelected",
        price: 280,
        duty: ['意外伤害 九万元', '意外伤害医疗 二万元'],
        info: "畅行宝"//到时候要做一下字符截断
      },
      // {
      //   id:'1001',
      //   isDefault: true,
      //   img: "./image/tmep.jpg",
      //   selected: "selected",
      //   price:100,
      //   duty: ['意外伤害 五万元', '意外伤害医疗 二万元'],
      //   info: "银龄安康"//到时候要做一下字符截断
      // },
      // {
      //   id: '1002',
      //   isDefault: false,
      //   img: "./image/tmep.jpg",
      //   selected: "unSelected",
      //   price: 200,
      //   duty: ['意外伤害 一万元', '意外伤害医疗 三万元'],
      //   info: "全家福如意保障计划"//到时候要做一下字符截断
      // },
      // {
      //   id: '1003',
      //   isDefault: false,
      //   img: "./image/tmep.jpg",
      //   selected: "unSelected",
      //   price: 365,
      //   duty: ['意外伤害 五十万元', '意外伤害医疗 二万元'],
      //   info: "驾乘无忧"//到时候要做一下字符截断
      // },
      // {
      //   id: '1007',
      //   isDefault: false,
      //   img: "./image/tmep.jpg",
      //   selected: "unSelected",
      //   price: 600,
      //   duty: ['意外伤害 十万元', '意外伤害医疗 三万元'],
      //   info: "吉祥卡"//到时候要做一下字符截断
      // },
      // {
      //   id: '1008',
      //   isDefault: false,
      //   img: "./image/tmep.jpg",
      //   selected: "unSelected",
      //   price: 700,
      //   duty: ['意外伤害 一万元', '意外伤害医疗 一万元'],
      //   info: "成才卡"//到时候要做一下字符截断
      // }
    ],
  },

  select:function(e){   
    let the = e.currentTarget.dataset.index;
    let channelList = this.data.product_info;
    let changeItem = channelList[the].selected;

    for (let i = 0; i < channelList.length;i++){
      channelList[i].selected = "unSelected"
    }
    if (changeItem == "unSelected"){
      channelList[the].selected = "selected"
      app.globalData.productName = e.currentTarget.dataset.info;
      app.globalData.duty = e.currentTarget.dataset.duty;
      app.globalData.insureMoney = e.currentTarget.dataset.price;
    }
    this.setData({
      product_info: channelList
    })
  },

  goNext: function () {
    console.log(app.globalData)
    wx.redirectTo({
      url: "../index/index"
    })
  },  

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // console.log(app.globalData)
    //app.globalData.productItem[0] = this.data.product_info[0].id;
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