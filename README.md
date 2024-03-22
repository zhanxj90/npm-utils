# UTILS-REPOSITORY
> 一个常用工具函数的npm包

## Install
```
npm install --save-dev npm-utils
```

## Usage
```js
import utils from 'npm-utils'
const formatText = utils.OmitEmo('sdfd👌')
console.log(formatText) // 'sdfd'
```

## Dir
  1. src -- 代码目录
    - constant -- 常量字段目录
    - utils -- 导出函数
  2. test -- 单元测试

## APi
### 正则处理
  1. 过滤表情 -- OmitEmo(String)
      ```js
        OmitEmo('sdfd👌')
      ```
  2. 千位显示金额 -- formatMoney(String) | formatMoney1(String)
      ```js
        // 1000000 --> 1,000,000
        formatMoney(1000000)
        // 写法二，用法和上一种一致
        formatMoney1(1000000)
      ```
### 数组处理
  1. 统计函数 -- countBy(Array,Function)
      ```js
        const arr=[
          {name:'sdf',age:18},
          {name:'vn',age:23},
          {name:'laotou',age:90},
          {name:'ad',age:48}
        ]
        countBy(arr,item=>item.age<50?'年轻':'老人')
      ```
### 封装函数
  1. 柯里化 -- curry(Function,Any,...)
      ```js
        function f(x,y,z){
          return (x+y)*z
        }
        var g=curry(f,2,3)
        // var g=curry(f,2)
      ```
  1. 函数管道 -- pipe(Function,Function,..)
      ```js
        function f(x){
          return x*2
        }
        function g(y){
          return y+10
        }
        var fg=pipe(f,g)
      ```