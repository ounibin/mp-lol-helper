// pages/champion-story/champion-story.js
import { getRoleStory } from '../../api/lolApi'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    championStory: null
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const storyName = options.storySlug
    console.log('storyName=', storyName)
    getRoleStory(storyName).then((res) => {
      const { title, subtitle } = res.story
      const storySections = res.story['story-sections']
      this.setData({
        championStory: {
          title,
          subtitle,
          bg: storySections[0]['background-image'].uri,
          content: storySections[0]['story-subsections'][0].content
        }
      })
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
