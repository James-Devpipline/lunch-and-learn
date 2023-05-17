/*
What is needed for pagination?
  - Data that you will sort through
  - Number of cards per page
  - buttons to navigate to the next and previous page/set of cards.


  - MATH NEEDED
    - need to find the amount of pages you will have according to the amount of items you want on screen
    - need to slice through data by finding the current position and items per page
*/

import { useState } from "react";

const usePagination = (data = [], itemsPerPage = 1) => {
  const [currentPosition, setCurrentPosition] = useState(0);
  const totalPages = Math.ceil(data.length / itemsPerPage);

  const sliceCurrentData = () => {
    const start = currentPosition * itemsPerPage;
    const end = start + itemsPerPage;

    return data.slice(start, end);
  };

  const next = () => {
    setCurrentPosition((current) => Math.min(current + 1, totalPages - 1));
    console.log(currentPosition);
  };

  const prev = () => {
    setCurrentPosition((current) => Math.max(current - 1, 0));
  };

  const jump = (page) => {
    const pageNumber = Math.max(0, page);
    setCurrentPosition(Math.min(pageNumber, totalPages));
  };

  return { sliceCurrentData, next, prev, jump };
};

export default usePagination;
