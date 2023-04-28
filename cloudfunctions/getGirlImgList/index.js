// 云函数入口文件
const cloud = require('wx-server-sdk')
const axios = require('axios')
const cheerio = require('cheerio')

cloud.init({
  env: cloud.DYNAMIC_CURRENT_ENV
})

/**
 * 获取指定页码的图片列表
 * @param {number} pageIndex 妹子图页码
 * @returns {promise<array>}
 */
async function getImgList (pageIndex, type = 'zipai') {
  try {
    // const res0 = await axios.get(`https://www.mzitu.com/${type}`)
    // const _$ = cheerio.load(res0.data)
    // let totalPage = 400
    // _$('.pagenavi-cm .current').each((index, el) => {
    //   totalPage = _$(el).text()
    // })
    let totalPage = 494
    const meiziPageIndex = Number(totalPage) - Number(pageIndex) + 1
    console.log('妹子图页码=', meiziPageIndex)
    const url = `https://www.mzitu.com/${type}/comment-page-${meiziPageIndex}/#comments`
    const res = await axios.get(url)
    const $ = cheerio.load(res.data)
    const resList = [] // 存放结果的数组
    $('.comment .comment-body').each((index, el) => {
      const imgUrl = $(el).find('p img.lazy').attr('data-original')
      resList.push(imgUrl)
    })
    return resList
  } catch (err) {
    console.log(err)
    return []
  }
}

// 云函数入口函数
exports.main = async (event, context) => {
  const { pageIndex, type = 'zipai' } = event
  const res = await getImgList(pageIndex, type)
  return res
}
