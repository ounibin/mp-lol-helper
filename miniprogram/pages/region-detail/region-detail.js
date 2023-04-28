// pages/region-detail/region-detail.js
import { getRegionDetail } from '../../api/lolApi'

Page({

  /**
   * 页面的初始数据
   */
  data: {
    regionName: '',
    videoUrl: '',
    videoPoster: '',
    canPlayVideo: getApp().globalData.os === 'android',
    richText: ''
  },

  getDetail (regionName) {
    getRegionDetail(regionName).then((res) => {
      const name = res?.faction?.name
      const videoUrl = res?.faction?.video?.uri
      const videoPoster = res?.faction?.image?.uri
      const richText = res?.faction?.overview?.short
      this.setData({
        regionName: name,
        videoUrl,
        videoPoster,
        richText
      })
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getDetail(options.name)
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
