//index.js
//获取应用实例
var app = getApp()

Page({
  data: {
    //notice:'中国人寿广东省分公司 周** 投保 200.00元',
    notice: [
      '中国人寿广西省分公司 周** 投保 200.00元',
      '中国人寿浙江省分公司 林** 投保 400.00元',
      '中国人寿广东省分公司 陈** 投保 500.00元',
      '中国人寿杭州省分公司 李** 投保 1000.00元'
    ],
    balance:20.00,
    monthIncome:10.00,
    allIncome:20.00
  },
  onLoad:function(){
  },
  toFood:function(res){
    wx.navigateTo({
      url: '../insure/index/index',
    })

    // this.data.nF++;
    // var animation = wx.createAnimation({
    // duration: 1000,
    //   timingFunction: 'ease',
    // })
    // this.animation = animation //animation的实例化
    // animation.rotateY(360*this.data.nF).step()
    // this.setData({
    //   animationF:animation.export()
    // })
    // this.setData({
    //   itemMessageFood1:{
    //     foodImg:'food/F1.jpg',
    //     foodName:'营养可口的蒸汽蛋',
    //     foodPrice:'￥10'
    //   },
    //   itemMessageFood2:{
    //     foodImg:'food/F2.jpg',
    //     foodName:'美味无比的鲜虾卷',
    //     foodPrice:'￥100'
    //   },
    //   itemMessageFood3:{
    //     foodImg:'food/F3.jpg',
    //     foodName:'爽滑润口的鱿鱼面',
    //     foodPrice:'￥60'
    //   },
    //   itemMessageFood4:{
    //     foodImg:'food/F4.jpg',
    //     foodName:'香嫩诱人的拷牛排',
    //     foodPrice:'￥90'
    //   },
    //   itemMessageFood5:{
    //     foodImg:'food/F5.jpg',
    //     foodName:'清淡简单的瘦肉粥',
    //     foodPrice:'￥20'
    //   }
    // })
  },
  // toBody:function(res){
  //   this.data.nB++;
  //   var animation = wx.createAnimation({
  //   duration: 1000,
  //     timingFunction: 'ease',
  //   })
  //   this.animation = animation //animation的实例化
  //   animation.rotateY(360*this.data.nB).step()
  //   this.setData({
  //     animationB:animation.export()
  //   })
  //   this.setData({
  //     itemMessageFood1:{
  //       foodImg:'body/B1.jpg',
  //       foodName:'专业仰卧起坐包月',
  //       foodPrice:'￥100'
  //     },
  //     itemMessageFood2:{
  //       foodImg:'body/B2.jpg',
  //       foodName:'专业引体向上包月',
  //       foodPrice:'￥200'
  //     },
  //     itemMessageFood3:{
  //       foodImg:'body/B3.jpg',
  //       foodName:'60斤哑铃训练包月',
  //       foodPrice:'￥600'
  //     },
  //     itemMessageFood4:{
  //       foodImg:'body/B4.jpg',
  //       foodName:'100斤举重特训包月',
  //       foodPrice:'￥290'
  //     },
  //     itemMessageFood5:{
  //       foodImg:'body/B5.jpg',
  //       foodName:'定量俯卧撑训练包月',
  //       foodPrice:'￥320'
  //     }
  //   })
  // },
  // toDrink:function(res){
  //   this.data.nD++;
  //   var animation = wx.createAnimation({
  //   duration: 1000,
  //     timingFunction: 'ease',
  //   })
  //   this.animation = animation //animation的实例化
  //   animation.rotateY(360*this.data.nD).step()
  //   this.setData({
  //     animationD:animation.export()
  //   })
  //   this.setData({
  //     itemMessageFood1:{
  //       foodImg:'drink/D1.jpg',
  //       foodName:'500ML葡萄汁特饮',
  //       foodPrice:'￥13'
  //     },
  //     itemMessageFood2:{
  //       foodImg:'drink/D2.jpg',
  //       foodName:'600ML芒果汁特饮',
  //       foodPrice:'￥20'
  //     },
  //     itemMessageFood3:{
  //       foodImg:'drink/D3.jpg',
  //       foodName:'500ML鲜橙汁特饮',
  //       foodPrice:'￥60'
  //     },
  //     itemMessageFood4:{
  //       foodImg:'drink/D4.jpg',
  //       foodName:'700ML鸡尾酒特饮',
  //       foodPrice:'￥30'
  //     },
  //     itemMessageFood5:{
  //       foodImg:'drink/D5.jpg',
  //       foodName:'500ML原咖啡特饮',
  //       foodPrice:'￥40'
  //     }
  //   })
  // },
  // toOrder:function(){
  //   wx.navigateTo({
  //     url: '../order/order'
  //   })
  // },
  onShareAppMessage: function () {
    return {
      title: '536',
      desc: 'opopopopo',
      path: '/page/index'
    }
  }
})
