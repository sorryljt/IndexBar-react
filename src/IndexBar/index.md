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
