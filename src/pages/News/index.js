import './index.scss'
import NavBar from '@/components/NavBar'
import { useEffect, useState } from 'react'
import useStore from '@/store'
import CardListGrid from '@/components/Cards/CardsListGrid'
import Pagination from '@/components/Pagination'
import { useNavigate } from 'react-router-dom'
import { pageSize } from '@/utils/constants' 
import { scrollToTop } from '@/utils/tools'

export default function News() {
    // const [page, setPage] = useState()
    const [currentPage, setCurrentPage] = useState(1)
    const navigate = useNavigate()

    const { language, newsList, fetchNewsList, getLanguage, getNewsListTotal, newsCurrentPage, setNewsCurrentPage } = useStore()

    const total = getNewsListTotal()
    // console.log('total',total);
    
    function handleClick(id) {
        setNewsCurrentPage(currentPage)
        navigate(`/news/detail?id=${id}`)
    }

    useEffect(() => {
        fetchNewsList(language, currentPage, pageSize)
    },[language])
    // console.log(newsList)

    useEffect(() => {
        changePage(newsCurrentPage)
    })

    function changePage(index) {
        scrollToTop()
        setCurrentPage(index)
        fetchNewsList(language, index, pageSize)
    }
      
    return (
        <div className="news-page">
            <NavBar></NavBar>
            <CardListGrid items={newsList.data} handleClick={handleClick}></CardListGrid>
            <Pagination pageSize={pageSize} total={total} currentPage={currentPage} changePage={changePage}></Pagination>
        </div>
    )
}