import React from 'react'
import { Pagination } from 'react-bootstrap'

interface PaginationSectionProps {
    currentPage: number
    totalPages: number
    onPageChange: (page: number) => void
}

const PaginationSection: React.FC<PaginationSectionProps> = ({ currentPage, totalPages, onPageChange }) => {
    const pageItems = []

    let startPage = Math.max(1, currentPage - 2)
    let endPage = Math.min(totalPages, currentPage + 2)

    if (currentPage <= 3) {
        endPage = Math.min(5, totalPages)
    }
    if (currentPage >= totalPages - 2) {
        startPage = Math.max(1, totalPages - 4)
    }

    if (startPage > 1) {
        pageItems.push(
            <Pagination.Item key={1} onClick={() => onPageChange(1)}>{1}</Pagination.Item>
        )
        if (startPage > 2) {
            pageItems.push(<Pagination.Ellipsis key="start-ellipsis" disabled />)
        }
    }

    for (let page = startPage; page <= endPage; page++) {
        pageItems.push(
            <Pagination.Item
                key={page}
                active={page === currentPage}
                activeLabel=''
                onClick={() => onPageChange(page)}
            >
                {page}
            </Pagination.Item>
        )
    }

    if (endPage < totalPages) {
        if (endPage < totalPages - 1) {
            pageItems.push(<Pagination.Ellipsis key="end-ellipsis" disabled />)
        }
        pageItems.push(
            <Pagination.Item key={totalPages} onClick={() => onPageChange(totalPages)}>{totalPages}</Pagination.Item>
        )
    }

    return (
        <Pagination>
            <Pagination.Prev 
                onClick={() => onPageChange(Math.max(1, currentPage - 1))}
                disabled={currentPage === 1}
            />
            {pageItems}
            <Pagination.Next 
                onClick={() => onPageChange(Math.min(totalPages, currentPage + 1))}
                disabled={currentPage === totalPages}
            />
        </Pagination>
    )
}

export default PaginationSection