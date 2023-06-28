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

## APi
### 正则处理
  1. 过滤表情
      ```js
      OmitEmo(String)
      ```