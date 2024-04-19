import React from 'react'
import './panel.less'

export interface PanelProps {
    /** 索引，不可重复 */
    index: string
    /** 列表中的分组标题, 默认取index */
    title: React.ReactNode
    /** 右侧索引条中的显示内容，默认取 index 的第一个字符 */
    brief: React.ReactNode
    /** */
    children: React.ReactNode
    [key: string]: any
}

const Panel: React.FC<PanelProps> = (props) => {
    const { index, title, children } = props
    return (
        <div>
            <div
                id={`index-${index}`}
                data-index={index}
                className='index ib-list-title'
            >
                {title}
            </div>
            {children}
        </div>
    )
}

export default Panel