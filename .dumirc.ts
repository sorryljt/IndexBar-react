import { defineConfig } from 'dumi';
import px2vw from 'postcss-px-to-viewport';

export default defineConfig({
  outputPath: 'docs-dist',
  base: '/indexbar-docs/',
  publicPath: '/indexbar-docs/',
  themeConfig: {
    name: 'IndexBar-React',
    // 配置高清方案，默认为 750 高清方案
    hd: {
      //   rules: [...],
    },
    // 配置 demo 预览器的设备宽度，默认为 375px
    deviceWidth: 375,
  },
  extraPostCSSPlugins: [
    px2vw({
      viewportWidth: 375, // 设计稿的视口宽度 375 iphone6
      unitPrecision: 3, //单位转换后保留的小数位数
      viewportUnit: 'vw', //转换后的视口单位
      selectorBlackList: [], //不进行转换的css选择器，继续使用原有单位
      minPixelValue: 1, //设置最小的转换数值
      mediaQuery: false, //设置媒体查询里的单位是否需要转换单位
      exclude: [/node_modules/], //忽略某些文件夹下的文件
    }),
  ],
});
