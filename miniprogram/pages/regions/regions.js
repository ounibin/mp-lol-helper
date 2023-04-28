// pages/regions/regions.js
import allRegions from '../../data/allRegions'

Page({

  /**
   * 页面的初始数据
   */
  data: {
    regionList: []
  },

  openRegionDetail (e) {
    const regionName = e.currentTarget.dataset.item.slug
    console.log('regionName=', regionName)
    wx.navigateTo({
      url: `/pages/region-detail/region-detail?name=${regionName}`
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const regionList = allRegions.factions.map((item) => {
      item.iconUrl = `../../imgs/icon-regions/${item.slug}_crest_icon.png`
      return item
    })
    this.setData({
      regionList
    })
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
