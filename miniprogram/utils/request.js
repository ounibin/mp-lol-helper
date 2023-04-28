/**
 * wx.request的二次封装
 * @param {obejct} opts wx.request一样的入参
 * @returns promise
 */
export default function request (opts) {
  return new Promise((resolve, reject) => {
    const defaultOpts = {
      success (res) {
        wx.hideLoading()
        console.log('请求的返回=', res.data)
        resolve(res.data)
      },
      fail (err) {
        reject(err)
      }
    }
    console.log('请求的参数=', opts)
    const realOpts = Object.assign(defaultOpts, opts)
    wx.showLoading({
      title: '加载中...'
    })
    wx.request(realOpts)
  })
}
