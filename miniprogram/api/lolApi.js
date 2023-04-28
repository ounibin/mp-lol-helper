import request from '../utils/request'

/**
 * 获取英雄故事
 * @param {string} enName 英雄名（英文）
 * @returns promise
 */
export function getRoleDetail (enName) {
  enName = enName.toLowerCase()
  return request({
    url: `https://yz.lol.qq.com/v1/zh_cn/champions/${enName}/index.json`
  })
}

/**
 * 获取英雄故事
 * @param {string} storyName 英雄故事名
 * @returns promise
 */
export function getRoleStory (storyName) {
  return request({
    url: `https://yz.lol.qq.com/v1/zh_cn/story/${storyName}/index.json`
  })
}

/**
 * 获取地区详细信息
 * @param {string} regionName 地区名
 * @returns promise
 */
export function getRegionDetail (regionName) {
  const regionNameLowercase = regionName.toLowerCase()
  return request({
    url: `https://yz.lol.qq.com/v1/zh_cn/factions/${regionNameLowercase}/index.json`
  })
}
