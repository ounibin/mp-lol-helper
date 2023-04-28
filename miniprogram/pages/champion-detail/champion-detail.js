// pages/champion-item/champion-item.js
import { getRoleDetail } from '../../api/lolApi'
import { getRoleAvatorUrl } from '../../api/lolNewApi'

Page({

  /**
   * 页面的初始数据
   */
  data: {
    headImg: '',
    champion: null,
    showMoreBtn: false
  },

  getDetail (name) {
    const that = this
    name.toLowerCase()
    getRoleDetail(name).then((res) => {
      const { champion, modules } = res
      const { image, name, title, biography } = champion
      const { uri } = image
      const { full, short, quote } = biography
      const story_slug = modules.length > 1 ? modules[1]['story-slug'] : ''
      const champion_data = {
        uri,
        name,
        title,
        full,
        short,
        quote,
        story_slug: story_slug
      }
      that.setData({
        champion: champion_data,
        showMoreBtn: !!story_slug
      })
    })
  },

  openStory: function () {
    const story_slug = this.data.champion.story_slug
    if (story_slug) {
      wx.redirectTo({
        url: `/pages/champion-story/champion-story?storySlug=${story_slug}`
      })
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const name = options.name
    this.getDetail(name)
    this.setData({
      headImg: getRoleAvatorUrl(name)
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
