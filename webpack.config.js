const path = require('path')
module.exports={
    mode:'production',
    entry:'./src/main.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'utils.min.js',
        // 打包生成库可以通过esm/commonjs/reqirejs的语法引入
        libraryTarget: 'umd',
    },
    module: {
        rules: [
            {
                exclude: [path.resolve(__dirname, "node_modules")],
                use: 'babel-loader',
                test: /\.jsx?$/
            },
        ]
    },
    resolve:{
        alias:{
            '@constant':path.resolve(__dirname, 'src/constant'),
            '@utils':path.resolve(__dirname, 'src/utils'),
        }
    }
}