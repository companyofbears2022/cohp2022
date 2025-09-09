import Tooltip from '@/components/Tooltip'
import { useTranslation } from 'react-i18next';
import ArmourIndicator from '@/components/Charts/ArmourIndicator';
export default function ArmourSection({ title, framework, armour }) {
    const { t } = useTranslation()
    return (
    <section className="stat-section">
      <h3 className="stat-section-title">{ title }</h3>
      <div className="stat-row">
        {framework.map((itm) => (
          <div className="stat-col" key={itm.key}>
            <Tooltip text={t(itm.desc)}>
              <div className="stat-name">{t(itm.name)}</div>
            </Tooltip>
            <div className="stat-value">{itm.value}</div>
          </div>
        ))}
        <div className="armour-indicator-1st">
            <ArmourIndicator thickness={armour.thickness1} inclination={armour.inclination1}></ArmourIndicator>
        </div>
        {
            armour.thickness2 !== 0 && (
                <div className="armour-indicator-2st">
                    <ArmourIndicator thickness={armour.thickness2} inclination={armour.inclination2}></ArmourIndicator>
                </div>
            )
        }
      </div>
    </section>
  );
}
