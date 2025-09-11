import { useTranslation } from "react-i18next"
import Tooltip from "@/components/Tooltip"
import { iftAttRange } from "@/utils/constants";
import { calcuHitRate, calcuPenetration } from "@/utils/calcus"
import BasicAttriSection from '../Sections/BasicAttriSection'
import HitRateSection from '../Sections/HitRateSection'
import AmmoSection from "../Sections/AmmoSection";
export default function InfantryData({item}) {

    const { t } = useTranslation()
    
    const basicAttriFram = [
        {
            name: 'docs.ift.rank',
            desc: 'docs.ift.rank_desc',
            value: item.mt
        },
        {
            name: 'docs.ift.num',
            desc: 'docs.ift.num_desc',
            value: item.data.num
        },
        {
            name: 'docs.ift.hp',
            desc: 'docs.ift.hp_desc',
            value: item.data.hp
        },
        {
            name: 'docs.ift.lmst',
            desc: 'docs.ift.lmst_desc',
            value: Math.round((1 - item.data.lmSt) * 100) + '%'
        },
        {
            name: 'docs.ift.armour',
            desc: 'docs.ift.armour_desc',
            value: item.data.armour
        },
        {
            name: 'docs.ift.sight',
            desc: 'docs.ift.sight_desc',
            value: item.data.fogOfWarSightRange * 20 + ' px'
        }
    ]

    const hitRateFram = [
        {
            name: 'docs.ift.hitcoe',
            desc: 'docs.ift.hitcoe_desc',
            value: item.data.hitCoe
        },
        {
            name: 'docs.ift.hitrate',
            desc: 'docs.ift.hitrate_desc',
            value: Math.round((1 - item.data.hitRate) * 100) + '%'
        },
        {
            name: 'docs.ift.movdec',
            desc: 'docs.ift.movdec_desc',
            value: '- ' + item.data.movDec * 100 + '%'
        }
    ]
    const hitRateFram1 = [
        {
            name: 'docs.ift.hitcoe',
            desc: 'docs.ift.hitcoe_desc',
            value: item.data.hitCoe1
        },
        {
            name: 'docs.ift.hitrate',
            desc: 'docs.ift.hitrate_desc',
            value: Math.round((1 - item.data.hitRate1) * 100) + '%'
        },
        {
            name: 'docs.ift.movdec',
            desc: 'docs.ift.movdec_desc',
            value: '- ' + item.data.movDec1 * 100 + '%'
        }
    ]


    return (
        <div className="unit-data-countainer">
            <BasicAttriSection title={t('docs.ift.basicAttri')} framework={basicAttriFram}></BasicAttriSection>
            <HitRateSection title={t('docs.ift.primWeap')} framework={hitRateFram} item={item} chartData={calcuHitRate(
              iftAttRange,
              item.data.hitCoe,
              item.data.hitRate,
              item.data.movDec,
              t("docs.ift.hitrateText"),
              t("docs.ift.hitrateText1")
            )}></HitRateSection>
            {
                item.data.hitCoe1 !== 0 && (
                    <HitRateSection title={t('docs.ift.seconWeap')} framework={hitRateFram1} item={item} chartData={calcuHitRate(iftAttRange, item.data.hitCoe1, item.data.hitRate1, item.data.movDec1, t('docs.ift.hitrateText'), t('docs.ift.hitrateText1'))}></HitRateSection>
                )
            }
            {
                item.data.ammo.length > 0 && (
                    item.data.ammo.map((itm) => (
                        <AmmoSection title={t('docs.ammo.ammo')} item={itm} chartData={calcuPenetration(item.data.attackrange, itm.decayCoe, itm.pene, t('docs.ammo.penetration'))} key={itm.pene}></AmmoSection>
                    ))
                )
            }
        </div>
    )
}