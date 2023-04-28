import request from '../utils/request'

/**
 * 获取英雄详细信息
 * @param {string} heroId 英雄id
 * @returns promise
 */
export function getRoleDetail (heroId) {
  return request({
    url: `https://game.gtimg.cn/images/lol/act/img/js/hero/${heroId}.js`
  })
}

/**
 * 获取全部英雄列表
 * @returns promise
 */
export function getAllRoles () {
  return request({
    url: 'https://game.gtimg.cn/images/lol/act/img/js/heroList/hero_list.js'
  })
}

/**
 * 获取英雄头像url
 * @param {string} enName 英雄名（英文），首字母大写
 * @returns {string} 英雄头像url
 */
export function getRoleAvatorUrl (enName) {
  if (!enName) return ''
  enName = enName.replace(/^\S/, s => s.toUpperCase())
  return `https://game.gtimg.cn/images/lol/act/img/champion/${enName}.png`
}
