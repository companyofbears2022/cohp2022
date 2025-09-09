import Tooltip from '@/components/Tooltip'
import { useTranslation } from 'react-i18next';
export default function BasicAttriSection({ title, framework }) {
    const { t } = useTranslation()
    return (
    <section className="stat-section">
      <h3 className="stat-section-title">{ title }</h3>
      <div className="stat-row">
        {framework.map((itm) => (
          <div className="stat-col" key={itm.name}>
            <Tooltip text={t(itm.desc)}>
              <div className="stat-name">{t(itm.name)}</div>
            </Tooltip>
            <div className="stat-value">{itm.value}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
