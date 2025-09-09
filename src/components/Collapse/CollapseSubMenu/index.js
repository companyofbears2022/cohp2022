import './index.scss'
import classNames from 'classnames'
import { useParams } from 'react-router-dom'
export default function CollapseSubMenu({item, country, handleClick}) {

    const { countryId, typeId } = useParams()

    
    const subMenuClasses = classNames({
        'collapse-sub-menu': true,
        'sub-menu-is-selected': Number(countryId) === country && Number(typeId) === item.id
    })
    return (
        <div className={subMenuClasses} onClick={() => {handleClick(country, item.id)}}>
            {item.name}
        </div>
    )
}