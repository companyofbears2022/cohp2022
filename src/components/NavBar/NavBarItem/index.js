import './index.scss'
import NavBarSubItem from '../NavBarSubItem'
import classNames from 'classnames'
import { useState } from 'react'

import arrowDown from '@/assets/arrow_down.svg'
import arrowDownMobile from '@/assets/arrow_down_mobile.svg'

import useMediaQuery from '@/hooks/useMediaQuery'
import { useTranslation } from 'react-i18next';
import { useNavigate, useLocation } from 'react-router'

export default function NavBarItem({item}) {
    const { t } = useTranslation()
    const navigate = useNavigate()
    const location = useLocation()
    const locationMatch = location.pathname.match(/^\/[^\/]*/)[0];
    const pathMatch = item.path.match(/^\/[^\/]*/)[0];
    // console.log('loc',location, item.path, locationMatch, pathMatch);

    const [isOpen, setIsOpen] = useState(false)
    const arrowIcon = useMediaQuery('(max-width: 960px)')?arrowDownMobile:arrowDown
    const hasChildren = item.children.length > 0
    const navBarClasses = classNames({
        'nav-bar-item-name': true,
        'is-opened': isOpen
    })

    const navBarSpanClasses = classNames({
        'is-current': locationMatch === pathMatch
    })


    const openDrawers = () => {
        if(!hasChildren) {
            return
        }
        setIsOpen(true)
    }
    
    const closeDrawers = () => {
        if(!hasChildren) {
            return
        }
        setIsOpen(false)
    }

    const navItemClick = () => {
        if(hasChildren) {
            return
        }
        navigate(item.path);
    }

    return (
        <div className="nav-bar-item" onMouseEnter={openDrawers} onMouseLeave={closeDrawers}>
            <div className={navBarClasses} onClick={navItemClick}>
                <span className={navBarSpanClasses}>
                    {t(item.name)}
                    {
                    hasChildren && (
                        // <img className="unfold-icon" src={arrowIcon} alt="more"></img>
                        <div className="unfold-icon iconfont icon-xiajiantou" alt="more"></div>
                    )
                }
                </span>
                
            </div>
            { hasChildren && isOpen && (
                <div className="nav-bar-sub-items-wrapper">
                    <div className="nav-bar-sub-items">
                        {item.children.map((i, index) => (
                            <NavBarSubItem item={i} key={i.name} handler={item.handler} index={index}></NavBarSubItem>
                        ))}
                    </div>
                </div>
            )}
        </div>
    )
}