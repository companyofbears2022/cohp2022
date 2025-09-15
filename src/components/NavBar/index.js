import './index.scss'
import './NavBarItem/index'
import NavBarItem from './NavBarItem/index'
import logo from '@/assets/logo.png'
import logo_dark from '@/assets/logo_dark.png'
import { useState } from 'react'
import classNames from 'classnames'
import useMediaQuery from '../../hooks/useMediaQuery'
import { useNavigate } from 'react-router'
import useTheme from '@/hooks/useTheme'
import { useTranslation } from 'react-i18next'
import { languages } from '@/utils/constants'
import useStore from '@/store'
import SearchBar from '@/components/SearchBar'

export default function NavBar() {
    const navigate = useNavigate()
    const { i18n } = useTranslation();

    const [navListClass, setNavListClass] = useState('icon-liebiao')

    const { theme, toggleTheme } = useTheme();

    const { setLanguage } = useStore()

    const isMobile = useMediaQuery('(max-width: 960px)')

    const navBarClasses = classNames({
        'nav-bar': true,
        'unselectable': true,
        'is-mobile': isMobile,
        'nav-unfolded': !(navListClass === 'icon-liebiao')
    })
    const navbarItem = [
        {
            name: 'nav.news',
            path: '/news',
            handler: () => {},
            children: []
        },
        {
            name: 'nav.tutorial',
            path: '/tutorials',
            handler: () => {},
            children: []
        },
        {
            name: 'nav.documents',
            path: '/documents/0/0',
            handler: () => {},
            children: []
        },
        {
            name: 'nav.armourinspector',
            path: '/armourinspector',
            handler: () => {},
            children: []
        },
        {
            name: 'nav.theme',
            path: '/theme',
            handler: (value) => {
                toggleTheme(value)
            },
            children: [
                {
                    name: 'theme.dark',
                    value: 'default'
                },
                {
                    name: 'theme.light',
                    value: 'light'
                },
                {
                    name: 'theme.pink',
                    value: 'pink'
                }
            ]
        },
        {
            name: 'nav.language',
            path: '/lan',
            handler: (value) => {
                if(languages.includes(value)) {
                    i18n.changeLanguage(value)
                    localStorage.setItem('language',value)
                    setLanguage(value)
                    document.documentElement.lang = i18n.language;

                }
            },
            children: [
                {
                    name: 'language.english',
                    value: 'en'
                },
                {
                    name: 'language.s-chinese',
                    value: 'zhCn'
                }
            ]
        },
        {
            name: 'nav.community',
            path: '/community',
            handler: (value) => {
                window.open(value, '_blank');
            },
            children: [
                {
                    name: 'community.discord',
                    value: 'https://discord.gg/WYBaqT9FQt'
                },
                {
                    name: 'community.steam',
                    value: 'https://steamcommunity.com/sharedfiles/filedetails/?id=3527922181'
                },
                {
                    name: 'community.qq',
                    value: 'https://qm.qq.com/q/C4aTqurjmo'
                }
            ]
        }
    ]

    const handleUnfoldNavList = () => {
        setNavListClass(navListClass === 'icon-liebiao'?'icon-quxiao':'icon-liebiao')
    }


    return (
        <div className="nav-bar-wrapper">
            <div className={navBarClasses}>
                <div className="m-nav-list" onClick={handleUnfoldNavList}>
                    {/* <img src={navListIcon} className="auto-fit-img unselectable undraggeable" alt="list"></img> */}
                    <span className={`iconfont ${navListClass}`}></span>
                </div>
                <div className="logo-box" onClick={() => {navigate('/')}}>
                    <img src={theme === 'default' ? logo : logo_dark} className="auto-fit-img unselectable undraggeable" alt="logo"></img>
                </div>
                <div className="m-nav-list">
                    {/* <img src={listLogo} className="auto-fit-img unselectable undraggeable" alt="list"></img> */}
                    {
                        isMobile && (
                            <SearchBar></SearchBar>
                        )
                    }
                </div>
                <div className="nav-bar-item-wrapper">
                    {
                        navbarItem.map((item)=>(
                            <NavBarItem key={item.name} item={item}></NavBarItem>
                        ))
                    }
                </div>
                {
                    !isMobile && (
                        <SearchBar></SearchBar>
                    )
                }
            </div>
        </div>
    )
}