// pages/rest/rest.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    "rest1":"漳州沙茶面",
    "rest2": "闽南猪蹄饭",
    "rest3": "东北饺子馆",
    "rest4": "纸包鱼",
    "rest5": "玫瑰十二道",
    "evaluate1":"9.8",
    "evaluate2": "9.3",
    "evaluate3": "9.1",
    "evaluate4": "9.0",
    "evaluate5": "8.8",
    "price1":"12",
    "price2": "14",
    "price3": "20",
    "price4": "23",
    "price5": "13",
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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
    wx.showNavigationBarLoading() //在标题栏中显示加载

    setTimeout(function () {

      wx.hideNavigationBarLoading() //完成停止加载

      wx.stopPullDownRefresh() //停止下拉刷新

    }, 1500);
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