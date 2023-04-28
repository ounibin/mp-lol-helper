// 云函数入口文件
const cloud = require('wx-server-sdk')
const axios = require('axios')
const cheerio = require('cheerio')
const asyncUtil = require('async')

cloud.init({
  env: cloud.DYNAMIC_CURRENT_ENV
})
const db = cloud.database()

// 获取每页的图片
async function getImgList (pageIndex) {
  try {
    const resList = [] // 存放结果的数组
    const url = `https://www.mzitu.com/jiepai/comment-page-${pageIndex}/#comments`
    // const url = `https://www.mzitu.com/zipai/comment-page-${pageIndex}/#comments`
    const res = await axios.get(url)
    const $ = cheerio.load(res.data)
    $('.comment .comment-body').each((index, el) => {
      const date = $(el).find('.comment-meta a').text().trim().replace('at ', '')
      const imgUrl = $(el).find('p img.lazy').attr('data-original')
      // console.log(imgUrl, date)
      // console.log(`图片日期=${date}，url=${imgUrl}`)
      const item = {
        date,
        imgUrl
      }
      resList.push(item)
    })
    return resList
  } catch (err) {
    console.log(err)
    return []
  }
}

// 云函数入口函数
exports.main = async (event, context) => {
  let isEnd = false
  let i = 1
  const totalPageIndex = 144
  while (!isEnd) {
    const res = await getImgList(i)
    await db.collection('girl_imgs').add({
      // data 字段表示需新增的 JSON 数据
      data: res
    })
    console.log(`当前页码${i}，插入数据库`, res)
    i++
    if (i > totalPageIndex) {
      isEnd = true
    }
  }
  return {
    msg: '触发cron成功'
  }
}
