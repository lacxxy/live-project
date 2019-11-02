//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    scale: 18,
    latitude: "",
    longitude: "",
    markers: [],
  },
  onLoad: function() {
    var that = this;
    /*地图接口*/
    wx.getLocation({
      success: function(res) {
        console.log(res)
        that.setData({
          latitude: res.latitude,
          longitude: res.longitude,
        })
      },
    })
  },
  findHot:function(){
    var that=this;
    this.setData({
      latitude:'26.0588',
      longitude: '119.305138'
    })
    wx.showToast({
      title: '成功',
      icon: 'succes',
      duration: 1000,
      mask: true
    })
  },
  findCloth: function () {
    var that = this;
    this.setData({
      latitude: '26.0623',
      longitude: '119.2906'
    })
    wx.showToast({
      title: '成功',
      icon: 'succes',
      duration: 1000,
      mask: true
    })
  }
})