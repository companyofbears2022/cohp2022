import Tooltip from "@/components/Tooltip";
import { useTranslation } from "react-i18next";
import { Line } from "@ant-design/plots";
import { lineChartConfig } from "@/utils/chartConfig";

export default function HitRateSection({item, title, framework, chartData }) {
  const { t } = useTranslation();
  return (
    <section className="stat-section">
      <h3 className="stat-section-title">{title}</h3>
      <div className="stat-two-column">
        <div className="stat-two-column-left">
          {framework.map((itm) => (
            <div className="stat-left" key={itm.name}>
              <Tooltip text={t(itm.desc)}>
                <div className="stat-name">{t(itm.name)}</div>
              </Tooltip>
              <div className="stat-value">{itm.value}</div>
            </div>
          ))}
        </div>
        <div className="stat-two-column-right">
          <Line
            data={chartData}
            {...lineChartConfig('dist', 'value', 'dark', 'type', 'type')}
          />
        </div>
      </div>
    </section>
  );
}
