import './index.scss'
import NavBar from '@/components/NavBar'
import Article from '@/components/Article'

import { useSearchParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import useStore from '@/store'
import { useNavigate } from 'react-router-dom'

export default function TutosDetail() {

    const navigate = useNavigate()
    const [searchParams] = useSearchParams()
    const id = searchParams.get('id');
    
    const { tutoJson, getLanguage, fetchTutorial } = useStore()
    
    const language = getLanguage()
    useEffect(() => {
        fetchTutorial(language, id)
    }, [language, id])


    function handleClickBack() {
        navigate('/tutorials')
    }
    function handleClickHome() {
        navigate('/')
    }
    return (
        <div className="news-detail">
            <NavBar></NavBar>

            <Article 
            name={'nav.tutorial'}
            json={tutoJson}
            handleClickBack={handleClickBack}
            handleClickHome={handleClickHome}
            ></Article>
        </div>
    )
}