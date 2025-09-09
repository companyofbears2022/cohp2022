import './index.scss'
import UnitData from '../UnitData'
export default function UnitArea({ item, handleClick }) {


    return (
        <section className="unit-area">
            <h2 className="unit-name"><span>{ item.name }</span><span className="unit-ref" onClick={() => {handleClick(item.id)}}>#</span></h2>
            <p className="unit-desc">{ item.desc.replaceAll('\\n',' ') }</p>
            <UnitData item={item}></UnitData>
        </section>
    )
}