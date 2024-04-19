# IndexBar

这是一个组件的普通demo

```jsx
import Indexbar from 'IndexBar-React';
import brandList from './mock'
import './demo.less'

const { Panel } = Indexbar
const indexs = Object.keys(brandList)
export default () => {
    
    return (
        <div className="content">
            <Indexbar indexs={indexs}>
                {indexs?.map((index: string) => {
                    return (
                        <Panel
                            key={index}
                            index={index}
                            title={index}
                        >
                            {brandList[index]?.map((item: any) => {
                                return (
                                    <div key={item.brandId} className="brandItem">
                                        <img
                                            alt={item.brandName}
                                            src={item.brandImg}
                                            className="brandPic"
                                        />
                                        {item.brandName}
                                    </div>
                                )
                            })}
                        </Panel>
                    )
                })}
            </Indexbar>
        </div>
    )
};
```