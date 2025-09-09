import './index.scss'
import classNames from 'classnames';
export default function Outline({items, countryId, typeId, activeId, handleClick}) {


    const outline = items.length > 0?items[countryId].categeries[typeId].units:[];
    return (
        <div className="outline-wrapper unselectable">
            {
                outline.map((item) => (
                    <div className={classNames('ouline-1st-title', {
                        'is-actived': Number(activeId) === item.id
                    })} key={item.id} onClick={() => {handleClick(item.id)}}>
                        {item.name}
                    </div>
                ))
            }
        </div>
    )
}