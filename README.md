# IndexBar-React

[![NPM version](https://img.shields.io/npm/v/indexbar-react.svg?style=flat)](https://npmjs.org/package/indexbar-react)
[![NPM downloads](https://img.shields.io/badge/downloads%20-14.0%20kB-brightgreen?style=flat)](https://www.npmjs.com/package/indexbar-react)
[![NPM downloads](https://img.shields.io/badge/package%20size%20-5.5%20kB-brightgreen?style=flat)](https://www.npmjs.com/package/indexbar-react)
一个基于 React 的 IndexBar 组件；用于数据的序列号展示，常见应用为右侧索引栏、通讯录字母索引等。[文档实例](https://sorryljt.github.io/indexbar-docs/components/index-bar)

<img width="200" alt="image" src="https://github.com/sorryljt/IndexBar-react/assets/56460015/7b9bfd48-afba-4613-9c7a-74022659bb9a">

## 开始使用

### 安装

```bash
npm i indexbar-react -S
# or
yarn add indexbar-react -S
```

## 属性

### Indexbar

组件外层容器

| 属性名 | 说明             | 类型     | 默认值 |
| ------ | ---------------- | -------- | ------ |
| indexs | 右侧索引菜单数据 | string[] | []     |

### Indexbar-Panel

分组标题列表

| 属性名   | 说明                                                       | 类型            | 默认值 |
| -------- | ---------------------------------------------------------- | --------------- | ------ |
| index    | 该分组属于哪个索引，取上方 indexs 中的每一项，用于列表分类 | string          | 无     |
| title    | 每个分组的标题                                             | string          | 无     |
| children | 每一项的列表渲染内容，可根据需要自定义渲染逻辑             | React.ReactNode |        |

## 常见问题（Q&A）

- 需控制组件容器为滚动区域，否则滚动失效；正确做法为下方 demo 中，给`content`元素设置为滚动区域
- 列表内容为业务数据，需要根据需求自己渲染，本组件只提供索引定位能力

## LICENSE

MIT
