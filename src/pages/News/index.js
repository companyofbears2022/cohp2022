import './index.scss'
import NavBar from '@/components/NavBar'
import { useEffect, useState } from 'react'
import useStore from '@/store'
import CardListGrid from '@/components/Cards/CardsListGrid'
import Pagination from '@/components/Pagination'
import { useNavigate } from 'react-router-dom'
import { pageSize } from '@/utils/constants' 

export default function News() {
    const [page, setPage] = useState()
    const [currentPage, setCurrentPage] = useState(1)
    const navigate = useNavigate()

    const { newsList, fetchNewsList, getLanguage, getNewsListTotal } = useStore()

    const total = getNewsListTotal()
    // console.log('total',total);
    
    function handleClick(id) {
        navigate(`/news/detail?id=${id}`)
    }

    useEffect(() => {
        fetchNewsList(getLanguage(), currentPage, pageSize)
    },[])
    // console.log(newsList)

    function changePage(index) {
        setCurrentPage(index)
        fetchNewsList(getLanguage(), index, pageSize)
    }
      
    return (
        <div className="news-page">
            <NavBar></NavBar>
            <CardListGrid items={newsList} handleClick={handleClick}></CardListGrid>
            <Pagination pageSize={pageSize} total={total} currentPage={currentPage} changePage={changePage}></Pagination>
        </div>
    )
}