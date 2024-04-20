# IndexBar

这是一个组件的普通 demo

```jsx
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
