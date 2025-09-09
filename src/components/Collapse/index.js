import './index.scss'
import CollapseMenu from './CollapseMenu'
import { useState } from 'react'
import classNames from 'classnames'
export default function Collapse({items, countryId, handleClick,handleCountryClick}) {
    // console.log('item:',items);
    const [isUnfolded, setIsUnfolded] = useState(true)
    const iconClass = isUnfolded?'icon-zhedie1':'icon-mulu'
    const handleUnfold = () => {
        setIsUnfolded(!isUnfolded)
    }

    const wrapperClasses = classNames({
        'collapse-wrapper': true,
        'unselectable': true,
        'is-unfolded': isUnfolded
    })

    return (
        <div className={wrapperClasses}>
            <div className="collapse-option-group">
                <span className={`iconfont ${iconClass}`} onClick={() => {handleUnfold()}}></span>
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
        </div>
    )

}
