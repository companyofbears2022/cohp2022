import './index.scss'
import CollapseMenu from './CollapseMenu'
import { useState } from 'react'
import classNames from 'classnames'
import useMediaQuery from '@/hooks/useMediaQuery'

export default function Collapse({items, countryId, typeId, handleClick,handleCountryClick, activeId, handleTOCClick}) {
    // console.log('item:',items);
    const [isUnfolded, setIsUnfolded] = useState(true)
    const [isTOCUnfolded, setIsTOCUnfolded] = useState(false)
    const icon1Class = isUnfolded?'icon-zhedie1':'icon-dagang-'
    const icon2Class = isTOCUnfolded?'icon-zhedie1':'icon-liebiao1'
    const outline = items.length > 0?items[countryId].categeries[typeId].units:[];
    const isMobile = useMediaQuery('(max-width: 960px)')

    const handleUnfold = () => {
        setIsUnfolded(!isUnfolded)
    }
    const handleTOCUnfold = () => {
        setIsTOCUnfolded(!isTOCUnfolded)
    }

    const wrapperClasses = classNames({
        'collapse-wrapper': true,
        'unselectable': true,
        'is-unfolded': isUnfolded,
        'is-toc-unfolded': isTOCUnfolded
    })
    console.log(outline);
    
    return (
        <div className={wrapperClasses}>
            <div className="collapse-option-group n1st">
                <span className={`iconfont ${icon1Class}`} onClick={() => {handleUnfold()}}></span>
            </div>
            <div className="collapse-option-group n2st">
                <span className={`iconfont ${icon2Class}`} onClick={() => {handleTOCUnfold()}}></span>
            </div>
            {
                isUnfolded && (
                    <div className="collapse-container">
                        {
                            items.map((item, index) => (
                                <CollapseMenu item={item} index={index} key={item.name} handleClick={handleClick} handleCountryClick={handleCountryClick} countryId={countryId}></CollapseMenu>
                            ))
                        }
                    </div>
                )
            }
            {
                isTOCUnfolded && (
                    <div className="toc-container">
                        {
                            outline.map((item) => (
                                <div className={classNames('ouline-1st-title', {
                                    'is-actived': Number(activeId) === item.id
                                })} key={item.id} onClick={() => {
                                    handleTOCClick(item.id)
                                    setIsTOCUnfolded(!isTOCUnfolded)
                                    }}>
                                    {item.name}
                                </div>
                            ))
                        }
                    </div>
                )
            }
        </div>
    )

}
