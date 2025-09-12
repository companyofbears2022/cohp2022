import './index.scss'
import NavBar from '@/components/NavBar'
import BackgroundPlayer from '@/components/BackgroundPlayer'
import PrimaryButton from '@/components/Buttons/PrimaryButton'
import InfoButton from '@/components/Buttons/InfoButton'
import LogoBox from '@/components/LogoBox'
import CardsListH from '@/components/Cards/CardsListH'
import CommonHeader from '@/components/Header/CommonHeader'
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom'
import useStore from '@/store'
import { pageSize } from '@/utils/constants' 
import { useEffect } from 'react'

export default function MainPage() {
    const { t } = useTranslation()
    const navigate = useNavigate()
    const pictureList = ['https://cobw.oss-cn-hangzhou.aliyuncs.com/mianpage/main1.jpg']
    
    
    const { newsList, fetchNewsList,tutosList, fetchTutosList, getLanguage } = useStore()
    
    useEffect(() => {
        fetchNewsList(getLanguage(), 1, 10)
        fetchTutosList(getLanguage(), 1, 10)
    },[getLanguage()])

    const handleNewsClick = (id) => {
        navigate(`/news/detail?id=${id}`)
    }
    const handleTutosClick = (id) => {
        navigate(`/tutorials/detail?id=${id}`)
    }

    function navigateToNews() {
        navigate('/news')
    }
    function navigateToTutos() {
        navigate('/tutorials')
    }

    const onJumpToTutorial = (path) => {
        navigate(`/tutorials/${path}`)
    }
    return (
        <div className="main-page">
            <NavBar></NavBar>
            <BackgroundPlayer pictureList={pictureList}>
                <LogoBox></LogoBox>
                <div className="download-btn">
                    <PrimaryButton text={t('actions.download')} handleClick={() => {onJumpToTutorial('detail?id=2')}}></PrimaryButton>
                </div>
                <div className="download-btn">
                    <InfoButton text={t('actions.desc')} handleClick={() => {onJumpToTutorial('detail?id=1')}}></InfoButton>
                </div>
            </BackgroundPlayer>

            <CommonHeader title={t('headers.news')} action={t('actions.more')+' >>>'} clickHandler={navigateToNews}></CommonHeader>
            <CardsListH items={newsList.data} handleClick={handleNewsClick}></CardsListH>
            <div className="divider"></div>
            <CommonHeader title={t('nav.tutorial')} action={t('actions.more')+' >>>'} clickHandler={navigateToTutos}></CommonHeader>
            <CardsListH items={tutosList.data} handleClick={handleTutosClick}></CardsListH>
            
        </div>
    )
}