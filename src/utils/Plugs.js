/**
 * @method curry 封装柯里化
 * @deprecated 第一个参数，必须是要通过柯里化处理的函数，一定要传的；后面的都是要固定的参数，数量可变，按原函数一个个传。
 * @returns {Function} _curry 返回柯里化处理之后的函数
 */
const curry = function (){
    var fn = arguments[0]; // 获取要执行的函数
    var args = [].slice.call(arguments, 1); // 获取传递的参数，构成一个参数数组
    // 如果传递的参数已经等于执行函数所需的参数数量
    if (args.length === fn.length) {
        return fn.apply(this, args)
    }
    // 参数不够向外界返回的函数
    function _curry(){
        // 推入之前判断
        // 将新接收到的参数推入到参数数组中
        args.push(...arguments);
        if(args.length === fn.length){
            return fn.apply(this, args)
        }
        return _curry;
    }
    return _curry;
}

/**
 * @method pipe 封装函数管道
 * @deprecated 参数是要通过处理的函数，按处理顺序传入
 * @returns {Function} 返回函数管道处理之后的函数
 */
const pipe = function (){
    let args=Array.from(arguments)
    return function(val){
      return args.reduce((result,func)=>func(result),val)
    }
  }

export default {
    curry,
    pipe
}