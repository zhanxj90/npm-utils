/**
 * @method countBy 封装统计函数
 * @deprecated 统计数组数据中符合条件的数据数量
 * @param {Array} array 数据列表 
 * @param {Function} generateKey 筛选条件回调函数；函数传入数据单项，返回键值
 * @returns {Object} result 返回统计对象
 */
 const countBy = function (array,generateKey){
    const result={}
    for (const u of array) {
        const key=generateKey(u)
        if(result[key]){
            result[key]++
        }else{
            result[key]=1
        }
    }
    return result
}

export default {
    countBy
}