import './index.scss'
import { useTranslation } from 'react-i18next'
import useMiniSearch from '@/hooks/useMiniSearch'
import { debounce } from '@/utils/tools'
import { unitType } from '@/utils/constants'
import { useState, useRef, useEffect } from 'react'
export default function SearchPopup({item, handleClick, handleSearchItemClick, handleClose}) {
    const { t } = useTranslation()
    const focus = useRef(null)

    const [results,setResults] = useState([])
    const search = useMiniSearch()
    const handleSearch = debounce((e) => {
        const result = search.search(e.target.value, { boost: { name: 2, prefix: true, combineWith: 'OR' }})
        console.log(result);
        setResults(result) 
    }, 1000)

    useEffect(() => {
        focus.current.focus()
    }, [])
    
    return (
        <div className="search-popup-mask" onClick={handleClick}>
            <div className="search-popup" onClick={(e) => e.stopPropagation()}>
                <div className="search-area">
                    <div className="popup-search-bar">
                        <span className="iconfont icon-sousuo"></span>
                        <input type="search" placeholder={t('actions.search_detail')} className="search-input" onChange={e => {handleSearch(e)}}
                        ref={focus}></input>
                    </div>

                    <div className="result-list">
                        {results.length === 0 && (<div className="no-result-text unselectable">{t('hints.no_result')}</div>)}
                        {results.map((itm) => (
                            <div className="result-item"
                            key={itm.id}
                            onClick={() => {
                                handleSearchItemClick(itm.coun, itm.type, itm.id)
                                handleClose()
                            }}
                            >
                                <span className="iconfont icon-zuojiantou"></span>
                                <span className="text">{itm.name}</span>
                                <span className="tag">{'#' + t('hints.rankX', {rank: itm.mt})}</span>
                                <span className="tag">{'#' + t(unitType[itm.type?itm.type:0])}</span>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="credits-box">
                    <div className="credits">
                        <span>Powered by </span>
                        <a className="highlight" target='_blank' href="https://github.com/lucaong/minisearch" rel="noreferrer">MiniSearch</a>
                    </div>
                </div>
            </div>
        </div>
    )
}