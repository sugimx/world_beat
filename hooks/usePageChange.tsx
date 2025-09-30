"use client"

import React, { useState } from 'react';

type UsePageChangeReturn = [number, (page: number) => void]

const usePageChange = (): UsePageChangeReturn => {
  const [currentPage, setCurrentPage] = useState<number>(1)

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return [currentPage, handlePageChange];
};

export default usePageChange;
