import MiniSearch from 'minisearch'
import useStore from '@/store/index'
import { useEffect } from 'react'
export default function useMiniSearch() {

    const { language, unitIndex, getUnitIndex } = useStore()
    const lanToText = {
        'en': 'en',
        'zhCn': 'zh',
    }
    let miniSearch = null;
    const segmenter = Intl.Segmenter && new Intl.Segmenter(lanToText[language], { granularity: "word" });

    if(language === 'zhCn' && Intl.Segmenter === undefined) {
        alert("很抱歉，您的浏览器不支持Intl.Segmenter，无法使用中文本地搜索功能。\n您可以升级您的浏览器来解决这个问题；或是将本站语言切换为英文，使用英文进行搜索。")
    }

    if(Intl.Segmenter !== undefined) {
        miniSearch = new MiniSearch({
            fields: ['name', 'desc'],
            storeFields: ['name', 'desc', 'mt', 'coun', 'type'],
            processTerm: (term) => {
            if (!segmenter) return term;
            const tokens = [];
            for (const seg of segmenter.segment(term)) {
                tokens.push(seg.segment);
            }
            return tokens;
        }
        })
    }
    else {
        miniSearch = new MiniSearch({
            fields: ['name', 'desc'],
            storeFields: ['name', 'desc', 'mt', 'coun', 'type'],
        })
    }
    
    const indexs = unitIndex

    console.log(indexs);
    
    
    useEffect(() => {
        getUnitIndex(language);
    }, [language])

    miniSearch.addAll(indexs.units)

    return miniSearch
}