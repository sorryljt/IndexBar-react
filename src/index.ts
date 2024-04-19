import { ReactNode } from 'react'
import IndexbarCom from './IndexBar'
import PanelCom from './IndexBar/panel'

type IndexbarComProps = /*unresolved*/ any

type IndexbarComType = IndexbarComProps & {
    Panel: ReactNode
}

const IndexBar = IndexbarCom as IndexbarComType

IndexBar.Panel = PanelCom

export default IndexBar
// export { default as Indexbar } from './IndexBar';
