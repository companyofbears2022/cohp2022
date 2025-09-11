import './index.scss'
import NavBar from '@/components/NavBar'
import { useEffect, useState } from 'react'
import useStore from '@/store'
import CardListGrid from '@/components/Cards/CardsListGrid'
import Pagination from '@/components/Pagination'
import { useNavigate } from 'react-router-dom'
import { pageSize } from '@/utils/constants' 

export default function Tutorials() {
    const [currentPage, setCurrentPage] = useState(1)
    const navigate = useNavigate()

    const { language, tutosList, fetchTutosList, getLanguage, getTutosListTotal } = useStore()

    const total = getTutosListTotal()
    // console.log('total',total);
    
    function handleClick(id) {
        navigate(`/tutorials/detail?id=${id}`)
    }

    useEffect(() => {
        console.log(language);
        
        fetchTutosList(language, currentPage, pageSize)
    },[language])
    // console.log(newsList)

    function changePage(index) {
        setCurrentPage(index)
        fetchTutosList(getLanguage(), index, pageSize)
    }
      
    return (
        <div className="tutos-page">
            <NavBar></NavBar>
            <CardListGrid items={tutosList.data} handleClick={handleClick}></CardListGrid>
            <Pagination pageSize={pageSize} total={total} currentPage={currentPage} changePage={changePage}></Pagination>
        </div>
    )
}