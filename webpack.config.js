const currentTask = process.env.npm_lifecycle_event
const path = require('path')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const fse = require("fs-extra")

const postCSSPlugins = [
    require('postcss-simple-vars'),
    require('postcss-mixins'),
    require('postcss-nested'),
    require('autoprefixer'),
    require('postcss-import')
]

class RunAfterCompile {
    apply(compiler) {
        compiler.hooks.done.tap('Copy images', function() {
            fse.copySync('./app/assets/images', './dist/assets/images')
        })
    }
}

let cssConfig =  {
    test: /\.css$/i,
    use: ['css-loader?url=false', {loader: 'postcss-loader', options: {postcssOptions: {plugins: postCSSPlugins}}}]
}
//returns an array with all of the files that end in html
let pages = fse.readdirSync('./app').filter(function(file){
    return file.endsWith('.html')
}).map(function(page){
    return new HtmlWebpackPlugin({
        filename: page,
        template: `./app/${page}`
    })
})

let config = {
    entry: './app/assets/scripts/App.js',
    plugins: pages,
    module: {
        rules: [
           cssConfig
        ]
    }
}

if(currentTask == "dev"){
    cssConfig.use.unshift('style-loader')
    config.output = {
        filename: 'bundled.js',
        path: path.resolve(__dirname, 'app')
    }
    config.devServer = {
        static: {
            directory: path.join(__dirname, 'app')
        },
        hot: true,
        port: 3000
    }
    config.mode = "development" 
}
if(currentTask == "build"){
    config.module.rules.push({
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
            loader: 'babel-loader',
            options: {
                presets: ['@babel/preset-env']
            }
        }
    })

    cssConfig.use.unshift(MiniCssExtractPlugin.loader)
    config.output = {
        filename: '[name].[chunkhash].js',
        chunkFilename: '[name].[chunkhash].js',
        path: path.resolve(__dirname, 'dist')
    }
    config.mode = "production"
    config.optimization = {
        splitChunks: {chunks: 'all'},
        minimize: true,
        minimizer: [`...`, new CssMinimizerPlugin()]
    }
    config.plugins.push(
        new CleanWebpackPlugin(), 
        new MiniCssExtractPlugin({filename: 'styles.[chunkhash].css'}),
        new RunAfterCompile()
    )
}



module.exports = config