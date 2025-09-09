import './index.scss'
import { useTranslation } from 'react-i18next'
export default function NavBarSubItem({item, handler, index}) {

    const { t } = useTranslation()
    return (
        <div className="nav-bar-sub-item">
            <span onClick={()=>{handler(item.value)}}>{t(item.name)}</span>
        </div>
    )
}