import './index.scss'
import { useTranslation } from 'react-i18next';
import Rate from '@/components/Rate'
import { colors } from '@/utils/constants'
import styles from './tags.module.scss'
const typeMap = {
    0: (item) => <h3>{item.content}</h3>,
    1: (item) => <p>{item.content}</p>,
    2: (item) => (
        <ul>
            {item.contents.map((text, i) => <li key={i}>{text}</li>)}
        </ul>
    ),
    3: (item) => <a href={item.url}>{item.content}</a>,
    4: (item) => <Rate rate={item.rate}></Rate>,
    5: (item) => <h4>{item.content}</h4>,
    6: (item) => <div className="img-container"><img src={item.url} alt={item.content} /></div>,
    7: (item) => <i>{item.content}</i>,
    8: (item) => (
        <div className="tags-container">
            {item.contents.map((tag, i) => <span
            key={i}
            className={styles[`tagColor${i % colors.length}`]}
            >{tag.content}</span>)}
        </div>
    ),
    9: (item) => <div className="divider" />,

};

export default function Article({ 
    name,
    json = {
        "id": -1,
        "title": "",
        "content": []
    } , handleClickBack, handleClickHome}) {

    const { title, time, content } = json
    const { t } = useTranslation()
    // console.log('json',json, title, content);
    
    return (
        <div className="article-container">
            <div className="top-nav-box">
                <div className="option home" onClick={() => {handleClickHome()}}>
                    <span className="iconfont icon-zhuye"></span>
                </div>
                <div className="option news-out" onClick={() => {handleClickBack()}}>
                    <span className="iconfont icon-zuojiantou"></span>
                    <span className="news">{t(name)}</span>
                </div>
            </div>
            <div className="content-box">
                <h1 className="title-text">{title}</h1>
                <div className="time-text">{time}</div>
                {content.map((item, idx) => {
                    const Component = typeMap[item.type];
                    return Component ? <Component key={idx} {...item} /> : null;
                })}
            </div>
        </div>
    )
}