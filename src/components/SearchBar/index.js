import './index.scss'
import { useTranslation } from 'react-i18next'
import SearchPopup from './SearchPopup'
import { useState } from 'react'
export default function SearchBar({item}) {

    const [isPopup, setIsPopup] = useState(false)
    const { t } = useTranslation()
    function handleClick() {
        setIsPopup(!isPopup)
    }
    const handleClose = () => {
        setIsPopup(false)
    }
    const handleSearchItemClick = (countryId, typeId, uid) => {
        window.location.hash = `#/documents/${countryId}/${typeId}#${uid}`
    }
    return (
        <div className="search-bar-wrapper">
            <div className="search-bar" onClick={handleClick}>
                <span className="icon-small iconfont icon-sousuo"></span>
                <span className="title">{t('actions.search')}</span>
            </div>
            { isPopup && (
                <SearchPopup handleClick={handleClick}
                handleSearchItemClick={handleSearchItemClick}
                handleClose={handleClose}
                ></SearchPopup>
            )}
        </div>
    )
}