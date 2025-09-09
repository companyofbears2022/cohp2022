import './index.scss'
import classNames from 'classnames'

export default function Pagination({ pageSize, total, currentPage, changePage, pagesWindowSize = 5 }) {

    const pageList = []
    const totalPage = Math.ceil( total / pageSize )
    const halfWindow = Math.floor(pagesWindowSize / 2)

    for( let i = currentPage - halfWindow > 0?currentPage - halfWindow:1; i <= totalPage && pageList.length < pagesWindowSize; i++ ) {
        pageList.push(i)
    }

    // console.log('pageList', pageList);
    

    function slideWindowLeft() {
        changePage(currentPage - pagesWindowSize>0?currentPage - pagesWindowSize:1)
    }
    function slideWindowRight() {
        changePage(currentPage + pagesWindowSize<=totalPage?currentPage + pagesWindowSize:totalPage)
    }

    return (
        <div className="pagination unselectable">
            {currentPage > halfWindow &&(
                <span className="pagination-item" onClick={slideWindowLeft} role="button">...</span>
            )}

            {
                pageList.map((item) => (
                    <span className={classNames({ "pagination-item": true, "is-selected": currentPage === item })} onClick={() => { changePage(item) }} role="button" key={item}>{ item }</span>
                ))
            }

            {totalPage > pagesWindowSize && currentPage + halfWindow < totalPage &&(
                <span className="pagination-item" onClick={slideWindowRight} role="button">...</span>
            )}
        </div>
    )
}