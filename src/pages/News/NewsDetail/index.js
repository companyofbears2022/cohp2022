import './index.scss'
import NavBar from '@/components/NavBar'
import Article from '@/components/Article'

import { useSearchParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import useStore from '@/store'
import { useNavigate } from 'react-router-dom'

export default function NewsDetail() {

    const navigate = useNavigate()
    const [searchParams] = useSearchParams()
    const id = searchParams.get('id');
    // console.log('id',id);
    
    const { artJson, getLanguage, fetchArticle } = useStore()
    
    const language = getLanguage()
    useEffect(() => {
        fetchArticle(language, id)
    }, [language, id])


    function handleClickBack() {
        navigate('/news')
    }
    function handleClickHome() {
        navigate('/')
    }
    return (
        <div className="news-detail">
            <NavBar></NavBar>

            <Article 
            name={'nav.news'}
            json={artJson}
            handleClickBack={handleClickBack}
            handleClickHome={handleClickHome}
            ></Article>
        </div>
    )
}