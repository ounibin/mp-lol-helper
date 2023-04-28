import { getAllRoles } from '../../api/lolNewApi'

Page({

  /**
   * 页面的初始数据
   */
  data: {
    champions: [],
    roleList: [],
    stickSearchBar: false
  },

  // 输入搜索回调
  handleSearchBarInput (e) {
    const roleName = e.detail.value
    if (!roleName) {
      this.setData({
        roleList: this.data.champions
      })
    } else {
      const roleList = this.data.champions.filter((item) => {
        const { title, name, alias } = item
        const allName = `${title}-${name}-${alias}`
        const realRoleName = roleName.replace(/^\S/, s => s.toUpperCase())
        return allName.includes(realRoleName)
      })
      this.setData({
        roleList: roleList
      })
    }
  },

  // 清除搜索回调
  handleClearSearchBar () {
    this.setData({
      roleList: this.data.champions
    })
  },

  // 页面滚动监听
  onPageScroll (e) {
    const scrollTop = e.scrollTop
    const lastStatus = this.data.stickSearchBar
    const currentStatus = scrollTop > 56
    if (lastStatus !== currentStatus) {
      this.setData({
        stickSearchBar: currentStatus
      })
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    getAllRoles().then((res) => {
      const roleList = res.hero.map((item) => {
        const { heroId, title, name, selectAudio, alias } = item
        return {
          heroId,
          bg: `https://game.gtimg.cn/images/lol/act/img/skinloading/${heroId}000.jpg`,
          title: name,
          name: title,
          alias,
          audioUrl: selectAudio
        }
      })
      // roleList.sort((a, b) => (Number(b.heroId) - Number(a.heroId)))
      roleList.reverse()
      this.setData({
        champions: roleList,
        roleList
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
