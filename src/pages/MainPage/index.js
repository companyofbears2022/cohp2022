import './index.scss'
import NavBar from '@/components/NavBar'
import BackgroundPlayer from '@/components/BackgroundPlayer'
import PrimaryButton from '@/components/Buttons/PrimaryButton'
import InfoButton from '@/components/Buttons/InfoButton'
import LogoBox from '@/components/LogoBox'
import CardsListH from '@/components/Cards/CardsListH'
import CommonHeader from '@/components/Header/CommonHeader'
import { useTranslation } from 'react-i18next';

export default function MainPage() {
    const { t } = useTranslation()
    const pictureList = ['https://cobw.oss-cn-hangzhou.aliyuncs.com/mianpage/main1.jpg']

    const newsList = [
        {
            imgUrl: 'https://cobw.oss-cn-hangzhou.aliyuncs.com/pic/prev11.png',
            title: 'Test tes ttset etstestets etstestets 1',
            time: '2025-08-21',
            content: 'Greetings, commanders! As we promised in our first Outlisted, here is the latest list of players who have been banned for using forbidden modifications based on your complaints, here is the latest list of players who have been banned for using forbidden modifications based on your complaints.'
        },
        {
            imgUrl: 'https://cobw.oss-cn-hangzhou.aliyuncs.com/pic/prev11.png',
            title: 'Test tes ttset etstestets etstestets 2',
            time: '2025-08-21',
            content: 'Greetings, commanders! As we promised in our first Outlisted, here is the latest list of players who have been banned for using forbidden modifications based on your complaints, here is the latest list of players who have been banned for using forbidden modifications based on your complaints.'
        },
        {
            imgUrl: 'https://cobw.oss-cn-hangzhou.aliyuncs.com/pic/prev11.png',
            title: 'Test tes ttset etstestets etstestets 3',
            time: '2025-08-21',
            content: 'Greetings, commanders! As we promised in our first Outlisted, here is the latest list of players who have been banned for using forbidden modifications based on your complaints, here is the latest list of players who have been banned for using forbidden modifications based on your complaints.'
        },
        {
            imgUrl: 'https://cobw.oss-cn-hangzhou.aliyuncs.com/pic/prev11.png',
            title: 'Test tes ttset etstestets etstestets 4',
            time: '2025-08-21',
            content: 'Greetings, commanders! As we promised in our first Outlisted, here is the latest list of players who have been banned for using forbidden modifications based on your complaints, here is the latest list of players who have been banned for using forbidden modifications based on your complaints.'
        },
        {
            imgUrl: 'https://cobw.oss-cn-hangzhou.aliyuncs.com/pic/prev11.png',
            title: 'Test tes ttset etstestets etstestets 5',
            time: '2025-08-21',
            content: 'Greetings, commanders! As we promised in our first Outlisted, here is the latest list of players who have been banned for using forbidden modifications based on your complaints, here is the latest list of players who have been banned for using forbidden modifications based on your complaints.'
        },
        {
            imgUrl: 'https://cobw.oss-cn-hangzhou.aliyuncs.com/pic/prev11.png',
            title: 'Test tes ttset etstestets etstestets 6',
            time: '2025-08-21',
            content: 'Greetings, commanders! As we promised in our first Outlisted, here is the latest list of players who have been banned for using forbidden modifications based on your complaints, here is the latest list of players who have been banned for using forbidden modifications based on your complaints.'
        }
    ]

    function navigateTo() {
        console.log('clk');
        
    }
    return (
        <div className="main-page">
            <NavBar></NavBar>
            <BackgroundPlayer pictureList={pictureList}>
                <LogoBox></LogoBox>
                <div className="download-btn">
                    <PrimaryButton text={t('actions.download')}></PrimaryButton>
                </div>
                <div className="download-btn">
                    <InfoButton text={t('actions.download')}></InfoButton>
                </div>
            </BackgroundPlayer>
            <CommonHeader title={t('headers.news')} action={t('actions.more')+' >>>'} clickHandler={navigateTo}></CommonHeader>
            <CardsListH items={newsList}></CardsListH>
            
        </div>
    )
}