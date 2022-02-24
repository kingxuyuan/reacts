/*
 * @Author: 大侠传授两招吧
 * @Date: 2022-01-24 13:03:39
 * @LastEditors: 大侠传授两招吧
 * @LastEditTime: 2022-02-24 14:51:37
 * @Description:minix
 */
const path = require('path');
const WebpackBar =  require('webpackbar');
var pxtoviewport = require('postcss-px-to-viewport');
const NetworkIp = require('./networkIp.ts');

const resolve = (dir) => path.resolve(__dirname, dir);

// const resolve = (dir) => path.resolve(__dirname, dir);
// const params = JSON.parse(process.env.npm_config_argv).original[1]?.split('=');
// if (params[0] !== '--name') {
//     console.log('\x1b[31m');
//     throw Error(
//         '操作错误，默认运行yarn serve，切换平台：yarn serve --name=name',
//     );
// }
// process.env.VUE_APP_PLATFORM = platform;
// const gConfig = require(`./platforms/${platform}/config.json`);
// console.log(gConfig);

module.exports = {
    reactScriptsVersion: "react-scripts" /* (default value) */ ,
    devServer: {
        port: 8888,
        host: NetworkIp(),
        proxy: {
            '/api': {
                target: process.env.REACT_APP_URL,
                changeOrigin: true,
            }
        },
    },
    style: {
        modules: {
            localIdentName: 'craco',
        },
        sass: {
            test: /\.s[ac]ss$/,
            loader: 'sass-loader',
            loaderOptions: {
                additionalData: `@import "./src/assets/style/minix/index.scss";`
            }
        },
        // postcss: {
        //     mode: 'extends' /* (default value) */ || 'file',
        //     plugins: [
        //         pxtoviewport({
        //             unitToConvert: 'px',
        //             viewportWidth: 1242,
        //             unitPrecision: 13,
        //             propList: ['*'],
        //             viewportUnit: 'vw',
        //             fontViewportUnit: 'vw',
        //             selectorBlackList: [],
        //             minPixelValue: 1,
        //             mediaQuery: false,
        //             replace: true,
        //             exclude: [],
        //             landscape: false,
        //             landscapeUnit: 'vw',
        //             landscapeWidth: 568
        //         })
        //     ],
            
        //     loaderOptions: {},
        // }
    },
    webpack: {
        alias: {
            '@': resolve('src')
        },
        plugins: [
            new WebpackBar(),
        ]
    },
	babel: {
		plugins: [
			// AntDesign 按需加载
			[
				"import",
				{
					libraryName: "antd",
					libraryDirectory: "es",
					style: "css",
				},
			], // `style: true` 会加载 less 文件
		],
        loaderOptions: {
            /* Any babel-loader configuration options: https://github.com/babel/babel-loader. */
        },
	},
};
