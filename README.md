# IndexBar-React

[![NPM version](https://img.shields.io/npm/v/indexbar-react.svg?style=flat)](https://npmjs.org/package/indexbar-react)
[![NPM downloads](https://img.shields.io/badge/downloads-14.6%20kB-brightgreen)](https://www.npmjs.com/package/indexbar-react)

一个基于 React 的 IndexBar 组件；用于数据的序列号展示，常见应用为右侧索引栏、通讯录字母索引等

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

## 示例 Demo

```tsx
// index.tsx
import Indexbar from 'indexbar-react';
import brandList from './mock';
import './demo.less';

const { Panel } = Indexbar;
const indexs = Object.keys(brandList);
export default () => {
  return (
    <div className="content">
      <Indexbar indexs={indexs}>
        {indexs?.map((index: string) => {
          return (
            <Panel key={index} index={index} title={index}>
              {brandList[index]?.map((item: any) => {
                return (
                  <div key={item.brandId} className="brandItem">
                    {item.brandName}
                  </div>
                );
              })}
            </Panel>
          );
        })}
      </Indexbar>
    </div>
  );
};
```

```ts
// mock.ts
export default {
  A: [
    {
      brandId: 33,
      brandName: '奥迪',
      brandLetter: 'A',
    },
  ],
  B: [
    {
      brandId: 75,
      brandName: '比亚迪',
      brandLetter: 'B',
    },
    {
      brandId: 14,
      brandName: '本田',
      brandLetter: 'B',
    },
    {
      brandId: 15,
      brandName: '宝马',
      brandLetter: 'B',
    },
  ],
  D: [
    {
      brandId: 1,
      brandName: '大众',
      brandLetter: 'D',
    },
  ],
  H: [
    {
      brandId: 91,
      brandName: '红旗',
      brandLetter: 'H',
    },
  ],
  J: [
    {
      brandId: 25,
      brandName: '吉利汽车',
      brandLetter: 'J',
    },
  ],
  L: [
    {
      brandId: 51,
      brandName: '林肯',
      brandLetter: 'L',
    },
    {
      brandId: 345,
      brandName: '理想汽车',
      brandLetter: 'L',
    },
  ],
  M: [
    {
      brandId: 58,
      brandName: '马自达',
      brandLetter: 'M',
    },
  ],
  Q: [
    {
      brandId: 26,
      brandName: '奇瑞',
      brandLetter: 'Q',
    },
  ],
  R: [
    {
      brandId: 63,
      brandName: '日产',
      brandLetter: 'R',
    },
  ],
  T: [
    {
      brandId: 133,
      brandName: '特斯拉',
      brandLetter: 'T',
    },
  ],
};
```

```less
// demo.less
.content {
  height: calc(100vh - 100px);

  .brandItem {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    font-family: 'PingFang SC';
    font-size: 16px;
    font-weight: normal;
    color: #111e36;
    padding-left: 20px;
    height: 60px;

    .brandPic {
      width: 40px;
      height: 40px;
      margin-right: 20px;
    }
  }
}
```

## LICENSE

MIT
