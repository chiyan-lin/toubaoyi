let app = getApp()
let appData = app.globalData
Page({
  data: {
    name:'',
    id:'',
    sex:'男',
    phone:'',
    mail:'',
    birth: '请输入出生日期',
    required:false
  },
  onLoad:function(res){
    if (res.name || res.id || res.birth || res.sex){
      this.setData({
        name: res.name,
        id: res.id,
        birth: res.birth,
        sex: res.sex
      }) 
    }  
  },
  bindDateChange: function (e) {
    this.setData({
      birth: e.detail.value
    })
  },
  goNext: function () {
    if (this.data.required){
      let info = this.data
      let infoArrBox = []
      infoArrBox[0] = info.name
      infoArrBox[1] = info.sex
      infoArrBox[2] = info.id
      infoArrBox[3] = info.birth
      infoArrBox[4] = info.phone
      infoArrBox[5] = info.mail
      appData.InfoList.push(infoArrBox)
      appData.totalNum = appData.InfoList.length
      appData.insuredList += info.name + ' '
      wx.redirectTo({
        url: "../index/index"
      })
    }
  },  
  bindInput: function(e) {
    let kind = e.target.dataset.type;
    let that = this
    switch (kind){
      case 'name':{
        that.setData({
          name: e.detail.value
        })  
        break;
      }
      case 'id':{
        that.setData({
          id: e.detail.value
        })
        break;
      }
      case 'sex':{
        that.setData({
          sex: e.detail.value
        })
        break;
      }
      case 'phone': {
        that.setData({
          phone: e.detail.value
        })
        break;
      }
      case 'mail': {
        that.setData({
          mail: e.detail.value
        })
        break;
      }
    }
    if (that.data.name && that.data.id && that.data.birth && that.data.phone){
      that.setData({
        required: true
      })
    }else{
      that.setData({
        required: false
      }) 
    }
  }
})