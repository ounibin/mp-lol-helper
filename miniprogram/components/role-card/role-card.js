// components/role-card/role-card.js
import { getOS } from '../../utils/common'

Component({
  /**
   * 组件的属性列表
   */
  properties: {
    heroId: {
      type: String,
      value: ''
    },
    avatorUrl: {
      type: String,
      value: ''
    },
    title: {
      type: String,
      value: '头衔'
    },
    name: {
      type: String,
      value: '名字'
    },
    audioUrl: {
      type: String,
      value: 'https://game.gtimg.cn/images/lol/act/img/vo/choose/1.ogg'
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    dom: null,
    isIos: getOS() === 'ios'
  },

  observers: {},

  attached () {},

  /**
   * 组件的方法列表
   */
  methods: {
    // 图片load完再去懒加载音频
    imgLoaded (e) {
      if (!this.data.isIos) {
        const innerAudioContext = wx.createInnerAudioContext({ useWebAudioImplement: true })
        innerAudioContext.src = this.properties.audioUrl
        this.setData({
          dom: innerAudioContext
        })
      }
    },
    toRoleDetail () {
      // 播放语音
      this.data.dom && this.data.dom.play()
      // 跳转
      const heroId = this.properties.heroId
      wx.navigateTo({
        url: `/pages/role-detail/role-detail?heroId=${heroId}`
      })
    }
  }
})
