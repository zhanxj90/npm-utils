import {
    EXP_OMIT_EMO,
    EXP_FORMAT_MONEY,
    EXP_FORMAT_MONEY_1
} from '@constant/exp'

/**
 * @method OmitEmo 删除表情包等特殊符号
 * @param {string} val
 * @returns {string} formatStr
 */
const OmitEmo = function (val){
    const rep=new RegExp(EXP_OMIT_EMO,'g')
    const formatStr=val.replace(rep, '')
    return formatStr
}

/**
 * @method formatMoney 千位显示金额
 * @param {string} value
 * @returns {string} formatStr
 */
 const formatMoney = function (value){
    const rep=new RegExp(EXP_FORMAT_MONEY,'g')
    const formatStr=val.replace(rep, '$&,')
    return formatStr
}

/**
 * @method formatMoney1 千位显示金额
 * @deprecated 第二种写法，其中使用的正则有所区别
 * @param {string} value
 * @returns {string} formatStr
 */
 const formatMoney1 = function (value){
    const rep=new RegExp(EXP_FORMAT_MONEY_1,'g')
    const formatStr=val.replace(rep, ',')
    return formatStr
}

export default {
    OmitEmo,
    formatMoney,
    formatMoney1
}