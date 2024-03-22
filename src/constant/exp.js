// 正则-匹配除‘ 中英文、数字、常用中英文特殊字符 ’的其他字符（其实就是匹配表情，过滤表情）
export const EXP_OMIT_EMO=/[^\u4e00-\u9fa5\u0021-\u007E《》，。、？；：‘’“”【】——！￥…………（）]/

// 千位显示金额
export const EXP_FORMAT_MONEY=/\d(?=(\d{3})+\b)/
export const EXP_FORMAT_MONEY_1=/(?=(\B\d{3})+\b)/