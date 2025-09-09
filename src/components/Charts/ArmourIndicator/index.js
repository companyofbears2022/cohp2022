import './index.scss'
import { mapThickToRem } from '@/utils/calcus'
import Tooltip from "@/components/Tooltip";
import { useTranslation } from 'react-i18next';

export default function ArmourIndicator({thickness, inclination}) {

    const { t } = useTranslation()
    const w = mapThickToRem(thickness)
    return (
        <div className="armour-indicator">
            <div className="y-axis">
                <div className="y-axis-text">vertical</div>
            </div>
            <div className="x-axis-box">
                <div className="armour-box">
                    <Tooltip text={t('docs.tank.armourhint',{thickness, inclination})}>
                        <div className="armour-plate"
                        style={{
                        '--w': `${w}`,
                        '--r': `${inclination}deg`,
                        }}></div>
                    </Tooltip>
                </div>
                <div className="x-axis">horizontal</div>
            </div>
        </div>
    )
}