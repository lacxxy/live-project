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
})