import Tooltip from "@/components/Tooltip";
import { useTranslation } from "react-i18next";
import { Line } from "@ant-design/plots";
import { iftAttRange } from "@/utils/constants";
import { calcuHitRate } from "@/utils/calcus";
import { lineChartConfig } from "@/utils/chartConfig";
import { ammoTypeEnum } from "@/utils/constants";
import useTheme from "@/hooks/useTheme"
export default function AmmoSection({item, title, chartData }) {
  const { t } = useTranslation();
  const { theme } = useTheme();
  const ammoFram = [
        {
            name: 'docs.ammo.type',
            desc: 'docs.ammo.type_desc',
            value: t(ammoTypeEnum[item.type])
        },
        {
            name: 'docs.ammo.norda',
            desc: 'docs.ammo.norda_desc',
            value: item.norDa
        },
        {
            name: 'docs.ammo.pene',
            desc: 'docs.ammo.pene_desc',
            value: item.pene + 'mm'
        },
        {
            name: 'docs.ammo.modda',
            desc: 'docs.ammo.modda_desc',
            value: item.modDa
        },
        {
            name: 'docs.ammo.dmp',
            desc: 'docs.ammo.dmp_desc',
            value: Math.round(item.dmP * 100) + '%'
        },
        {
            name: 'docs.ammo.decaycoe',
            desc: 'docs.ammo.decaycoe_desc',
            value: item.decayCoe
        }
    ]

  return (
    <section className="stat-section">
      <h3 className="stat-section-title">{title}</h3>
      <div className="stat-two-column">
        <div className="stat-two-column-left">
          {ammoFram.map((itm) => (
            <div className="stat-left" key={itm.name}>
              <Tooltip text={t(itm.desc)}>
                <div className="stat-name">{t(itm.name)}</div>
              </Tooltip>
              <div className="stat-value">{itm.value}</div>
            </div>
          ))}
        </div>
        <div className="stat-two-column-right ammo">
          <Line
            data={chartData}
            {...lineChartConfig('dist', 'value', theme, 'type', 'type')}
          />
        </div>
      </div>
    </section>
  );
}
