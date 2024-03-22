/**
 * 原始方法，遍历导出
 */
/*
import RegExp from '@utils/RegExp'
import Array from '@utils/Array'
import Plugs from '@utils/Plugs'

export default {
    ...RegExp,
    ...Array,
    ...Plugs,
}
*/



/** webpack遍历实现 */
const list={}
// require.context  webpack内置的获取文件数据的方式
const dirContext = require.context('./utils', true, /\.js$/)
dirContext.keys().forEach(route => {
  const fileModule = dirContext(route)
  // 兼容 import export 和 require module.export 两种规范
  Object.assign(list,(fileModule.default || fileModule))
})

console.log(list)

export default list
