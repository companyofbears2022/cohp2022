import './index.scss'
import InfantryData from './InfantryData';
import EmplacedData from './EmplacedData';
import TankData from './TankData';
export default function UnitData({item}) {
    let ChildComponent;
    switch (Number(item.type)) {
    case 0:
        ChildComponent = InfantryData;
        break;
    case 1:
        ChildComponent = EmplacedData;
        break;
    case 2:
        ChildComponent = TankData;
        break;
    default:
        return null;
    }
    return (
        <div className="unit-data-wrapper">
            <ChildComponent item={item}></ChildComponent>
        </div>
    )
}