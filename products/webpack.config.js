let HtmlWebpackPlugin = require("html-webpack-plugin")
// Module federation used to expose files to be available to other projects (Host => Container)
let ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin")

module.exports={
    mode:"development",
    devServer:{
        port: 8081
    },
    plugins:[
    new ModuleFederationPlugin({
        name:'products',
        filename:'remoteEntry.js',
        exposes:{
            './ProductsIndex':'./src/index'
        }
    }),
    new HtmlWebpackPlugin({
        template:'./public/index.html'
    })
    ]
}