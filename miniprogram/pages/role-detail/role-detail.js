// pages/role-detail/role-detail.js
import { getRoleDetail, getRoleAvatorUrl } from '../../api/lolNewApi'

Page({

  /**
   * 页面的初始数据
   */
  data: {
    avatorUrl: '',
    swiperList: [],
    skills: [],
    activeSkillIndex: 0,
    useTips: [],
    enemyTips: [],
    heroIntro: null
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    getRoleDetail(options.heroId).then((res) => {
      // 皮肤
      const skinList = res.skins.filter((item) => {
        return !!item.mainImg
      })
      // 技能
      const skills = []
      res.spells.forEach((item) => {
        let i = 0
        switch (item.spellKey) {
          case 'passice':
            i = 0
            break
          case 'q':
            i = 1
            break
          case 'w':
            i = 2
            break
          case 'e':
            i = 3
            break
          case 'r':
            i = 4
            break
        }
        skills[i] = item
      })
      // 优缺点
      const useTips = res?.hero?.allytips
      const enemyTips = res?.hero?.enemytips
      this.setData({
        avatorUrl: getRoleAvatorUrl(res?.hero?.alias),
        swiperList: skinList,
        skills,
        useTips,
        enemyTips,
        heroIntro: res.hero
      })
    })
  },

  changeSkill (e) {
    this.setData({
      activeSkillIndex: e.target.dataset.index
    })
  },

  toMoreDetail () {
    const enName = this.data.heroIntro.alias
    wx.navigateTo({
      url: `/pages/champion-detail/champion-detail?name=${enName}`
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
