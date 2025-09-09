import { useTranslation } from "react-i18next"
import Tooltip from "@/components/Tooltip"
import { calcuPenetration } from "@/utils/calcus"
import BasicAttriSection from '../Sections/BasicAttriSection'
import AmmoSection from "../Sections/AmmoSection";
import ArmourSection from "../Sections/ArmourSection";
export default function TankData({item}) {

    const { t } = useTranslation()
    
    const basicAttriFram = [
        {
            name: 'docs.ift.rank',
            desc: 'docs.ift.rank_desc',
            value: item.mt
        },
        {
            name: 'docs.ift.hp',
            desc: 'docs.ift.hp_desc',
            value: item.data.hp
        },
        {
            name: 'docs.ift.sight',
            desc: 'docs.ift.sight_desc',
            value: item.data.fogOfWarSightRange * 20 + ' px'
        },
        {
            name: 'docs.tank.shootdelay',
            desc: 'docs.tank.shootdelay_desc',
            value: item.data.shootdelay
        },
        {
            name: 'docs.ift.shootrange',
            desc: 'docs.ift.shootrange_desc',
            value: item.data.attackrange + ' px'
        },
        {
            name: 'docs.tank.seizep',
            desc: 'docs.tank.seizep_desc',
            value: Math.round((0.21 - item.data.seizedp > 0) ? (0.21 - item.data.seizedp)*100: 0) + '%'
        },
    ]

    const movementFram = [
        {
            name: 'docs.tank.movespeed',
            desc: 'docs.tank.movespeed_desc',
            value: (item.data.movespeed * 60).toFixed(2) + ' px/s'
        },
        {
            name: 'docs.tank.moveaccele',
            desc: 'docs.tank.moveaccele_desc',
            value: (item.data.moveaccele * 60).toFixed(2) + ' px/s²'
        },
        {
            name: 'docs.tank.movedecele',
            desc: 'docs.tank.movedecele_desc',
            value: (item.data.movedecele * 60).toFixed(2) + ' px/s²'
        },
        {
            name: 'docs.tank.turnspeed',
            desc: 'docs.tank.turnspeed_desc',
            value: (item.data.turnspeed * 60).toFixed(2) + '°/s'
        },
        {
            name: 'docs.tank.turnaccele',
            desc: 'docs.tank.turnaccele_desc',
            value: (item.data.turnaccele * 60).toFixed(2) + '°/s²'
        },
        {
            name: 'docs.tank.reverspeed',
            desc: 'docs.tank.reverspeed_desc',
            value: (item.data.reverspeed * 100) + '%'
        }
    ]

    const frontArmourFram = [
        {
            key: 'fta',
            name: 'docs.tank.fta',
            desc: 'docs.tank.fta_desc',
            value: item.data.fta + ' mm'
        },
        {
            key: 'ftang',
            name: 'docs.tank.ftang',
            desc: 'docs.tank.ftang_desc',
            value: item.data.ftang + '°'
        },
        {
            key: 'ftahitp',
            name: 'docs.tank.ftahitp',
            desc: 'docs.tank.ftahitp_desc',
            value: item.data.frontAWP === 0 ? '-' : (Math.round(item.data.frontAWP * 100) + '%')
        },
    ]
    if(item.data.frontAWP > 0) {
        frontArmourFram.push(...[{
            key: 'ftaw',
            name: 'docs.tank.ftaw',
            desc: 'docs.tank.ftaw_desc',
            value: item.data.frontAW + ' mm'
        },
        {
            key: 'ftang1',
            name: 'docs.tank.ftang',
            desc: 'docs.tank.ftang_desc',
            value: item.data.ftang1 + '°'
        },
        {
            key: 'frontAWP',
            name: 'docs.tank.ftahitp',
            desc: 'docs.tank.ftahitp_desc',
            value: (Math.round((1 - item.data.frontAWP) * 100) + '%')
        }])
    }

    const sideArmourFram = [
        {
            key: 'sda',
            name: 'docs.tank.sda',
            desc: 'docs.tank.sda_desc',
            value: item.data.sda + ' mm'
        },
        {
            key: 'sdang',
            name: 'docs.tank.sdang',
            desc: 'docs.tank.sdang_desc',
            value: item.data.sdang + '°'
        },
        {
            key: 'sdahitp',
            name: 'docs.tank.sdahitp',
            desc: 'docs.tank.sdahitp_desc',
            value: item.data.sideAWP === 0 ? '-' : (Math.round(item.data.sideAWP * 100) + '%')
        },
    ]
    if(item.data.sideAWP > 0) {
        sideArmourFram.push(...[{
            key: 'sdaw',
            name: 'docs.tank.sdaw',
            desc: 'docs.tank.sdaw_desc',
            value: item.data.sideAW + ' mm'
        },
        {
            key: 'sdang1',
            name: 'docs.tank.sdang',
            desc: 'docs.tank.sdang_desc',
            value: item.data.sdang1 + '°'
        },
        {
            key: 'sideAWP',
            name: 'docs.tank.sdahitp',
            desc: 'docs.tank.sdahitp_desc',
            value: (Math.round((1 - item.data.sideAWP) * 100) + '%')
        }])
    }

    const backArmourFram = [
        {
            key: 'bka',
            name: 'docs.tank.bka',
            desc: 'docs.tank.bka_desc',
            value: item.data.bka + ' mm'
        },
        {
            key: 'bkang',
            name: 'docs.tank.bkang',
            desc: 'docs.tank.bkang_desc',
            value: item.data.bkang + '°'
        },
        {
            key: 'bkahitp',
            name: 'docs.tank.bkahitp',
            desc: 'docs.tank.bkahitp_desc',
            value: item.data.backAWP === 0 ? '-' : (Math.round(item.data.backAWP * 100) + '%')
        },
    ]
    if(item.data.backAWP > 0) {
        backArmourFram.push(...[{
            key: 'bkaw',
            name: 'docs.tank.bkaw',
            desc: 'docs.tank.bkaw_desc',
            value: item.data.backAW + ' mm'
        },
        {
            key: 'bkang1',
            name: 'docs.tank.bkang',
            desc: 'docs.tank.bkang_desc',
            value: item.data.bkang1 + '°'
        },
        {
            key: 'backAWP',
            name: 'docs.tank.bkahitp',
            desc: 'docs.tank.bkahitp_desc',
            value: (Math.round((1 - item.data.backAWP) * 100) + '%')
        }])
    }


    const moduleFram = [
        {
            name: 'docs.tank.tra',
            desc: 'docs.tank.tra_desc',
            value: item.data.tra
        },
        {
            name: 'docs.tank.eng',
            desc: 'docs.tank.eng_desc',
            value: item.data.eng
        }
    ]

    const moduleHitPFram = [
        {
            name: 'docs.tank.tra_hit_front',
            desc: 'docs.tank.tra_hit_front_desc',
            value: Math.round((Math.floor(item.data.front / 10) / 9) * 100) + '%'
        },
        {
            name: 'docs.tank.tra_hit_side',
            desc: 'docs.tank.tra_hit_side_desc',
            value: Math.round((Math.floor(item.data.side / 10) / 9) * 100) + '%'
        },
        {
            name: 'docs.tank.tra_hit_back',
            desc: 'docs.tank.tra_hit_back_desc',
            value: Math.round((Math.floor(item.data.back / 10) / 9) * 100) + '%'
        },
        {
            name: 'docs.tank.eng_hit_front',
            desc: 'docs.tank.eng_hit_front_desc',
            value: Math.round(Math.floor(item.data.front % 10) / 9 * 100) + '%'
        },
        {
            name: 'docs.tank.eng_hit_side',
            desc: 'docs.tank.eng_hit_side_desc',
            value: Math.round(Math.floor(item.data.side % 10) / 9 * 100) + '%'
        },
        {
            name: 'docs.tank.eng_hit_back',
            desc: 'docs.tank.eng_hit_back_desc',
            value: Math.round(Math.floor(item.data.back % 10) / 9 * 100) + '%'
        }
    ]


    return (
        <div className="unit-data-countainer">
            <BasicAttriSection title={t('docs.ift.basicAttri')} framework={basicAttriFram}></BasicAttriSection>
            <BasicAttriSection title={t('docs.tank.movement')} framework={movementFram}></BasicAttriSection>

            <BasicAttriSection title={t('docs.tank.modules')} framework={moduleFram}></BasicAttriSection>
            <BasicAttriSection title={t('docs.tank.module_hit_p')} framework={moduleHitPFram}></BasicAttriSection>

            <ArmourSection title={t('docs.tank.frontarmour')} framework={frontArmourFram} armour={{thickness1: item.data.fta, inclination1: item.data.ftang, thickness2: item.data.frontAW, inclination2: item.data.ftang1}}></ArmourSection>
            <ArmourSection title={t('docs.tank.sidearmour')} framework={sideArmourFram} armour={{thickness1: item.data.sda, inclination1: item.data.sdang, thickness2: item.data.sideAW, inclination2: item.data.sdang1}}></ArmourSection>
            <ArmourSection title={t('docs.tank.backarmour')} framework={backArmourFram} armour={{thickness1: item.data.bka, inclination1: item.data.bkang, thickness2: item.data.backAW, inclination2: item.data.bkang1}}></ArmourSection>
            
            {
                item.data.ammo.length > 0 && (
                    item.data.ammo.map((itm) => (
                        <AmmoSection title={t('docs.ammo.ammo')} key={itm.pene} item={itm} chartData={calcuPenetration(item.data.attackrange, itm.decayCoe, itm.pene, t('docs.ammo.penetration'))}></AmmoSection>
                    ))
                )
            }
        </div>
    )
}