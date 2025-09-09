import './index.scss'
import CollapseSubMenu from '../CollapseSubMenu';
import { useEffect, useState } from 'react';
import classNames from 'classnames'
export default function CollapseMenu({item, countryId, index, handleClick, handleCountryClick}) {

    const [isOpen, setIsOpen] = useState(false)
    const collapseTitleClassNames = classNames({
        "collapse-title": true,
        "is-unfolded": isOpen
    })

    function handleMenuClick() {
        setIsOpen(!isOpen)
        if(!isOpen) {
            handleCountryClick(index)
        }
    }

    useEffect(() => {
        
        setIsOpen(Number(countryId) === index)
    }, [countryId])

    return (
        <div className="collapse-menu unselectable">
            <div className={collapseTitleClassNames} onClick={() => {handleMenuClick(item)}}>
                <span className="collapse-title-text">{item.name}</span>
                <span className="iconfont icon-jiantou2"></span>
            </div>
            {
                isOpen && (
                    item.categeries.map((itm) => (
                        <CollapseSubMenu item={itm} country={index} handleClick={handleClick} key={itm.name}></CollapseSubMenu>
                    ))
                )
            }
        </div>
    )
}