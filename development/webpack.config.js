const webpack = require('webpack');
const path = require('path');
const autoprefixer = require('autoprefixer');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const TerserWebpackPlugin = require('terser-webpack-plugin');
const CompressionWebpackPlugin = require('compression-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports={
    entry:'./index.js',
    output:{
        filename:'bundle.js',
        path: path.resolve(__dirname,'dist')
    },
    module:{
        rules:[{
            test:/\.js$/,
            use:{
                loader:"babel-loader"
            }
        },{
            test:/\.(scss|css|sass)$/,
            use: [MiniCssExtractPlugin.loader,'css-loader','postcss-loader','sass-loader']
        },{
            test: /\.(gif|png|ico|xml|json|svg|webmanifest|woff|webp)$/,
            exclude: /node_modules/,
            use: [{
                loader:"file-loader",
                options:{
                    name:'[name].[ext]',
                    outputPath:'assets',
                    esModule:false
                }
            }]
        }]
    },
    plugins:[new HtmlWebpackPlugin({
        cache:true,
        filename:'index.html',
        template:'public/index.html',
        inject:'head'
    }), 
    new HtmlWebpackPlugin({
        cache:true,
        filename:'404.html',
        template: 'public/pages/404.html',
        inject:'head'
    }),
    new webpack.LoaderOptionsPlugin({
        options:{
            postcss:[
                autoprefixer()
            ]
        }
    }),
    new MiniCssExtractPlugin({
        filename:'[name].css',
        esModule: false,  
    }),
    new CompressionWebpackPlugin({
        test:/\.(js|png|svg|html)$/,
        exclude: /node_modules/,
        algorithm: "gzip",
        filename: "[name][ext].gz[query]",
    })
],
    optimization:{
        minimizer: true,
        minimizer: [new TerserWebpackPlugin({
            exclude: /node_modules/,
            parallel:true,       
        })]
    }
}


/* 404 Page
    new HtmlWebpackPlugin({
        cache:true,
        filename:'404.html',
        template: 'public/pages/404.html',
        inject:'head'
    }),
*/