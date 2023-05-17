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

const usePagination = (data = [], itemsPerPage = 1, numOfPageButtons = 0) => {
  const [currentPosition, setCurrentPosition] = useState(0);
  const totalPages = Math.ceil(data.length / itemsPerPage);
  // ceil rounds numbers up, so if you had a data set with the length of 20, but wanted 7 items displayed, you wouldn't be able to have 2.8 pages. ceil allows that to be rounded up to 3 pages

  const sliceCurrentData = () => {
    const start = currentPosition * itemsPerPage;
    const end = start + itemsPerPage;

    return data.slice(start, end);

    // if currentPosition is 0 and items per page is 7, start will return 0, however if currentPosition is instead 1, start will return 7. Think of this as zero-indexed.
    // With end, if currentPosition is 0, and items per page is 7, end will return 6. If instead currentPosition is 1, start will then return with 7, then end will return 14. Keeping a range of itemsPerPage (in this case 7) when slicing
  };

  const next = () => {
    setCurrentPosition((current) => Math.min(current + 1, totalPages));
  };

  const prev = () => {
    setCurrentPosition((current) => Math.max(current - 1, 0));
  };

  const jump = (page) => {
    const pageNumber = Math.max(0, page);
    setCurrentPosition(Math.min(pageNumber, totalPages));
  };

  // Math.min() returns the smaller number of the given parameters
  // Math.max() returns the larger number of the given parameters
  // this ensures that currentPosition cannot be less than the beginning index, as well ensures it cannot be larger than the number of totalPages
  // next and prev are basically doing the same as the commented out code block below

  /*
  const next = () => {
    if (currentPosition > 0) {
      setCurrentPosition(currentPosition - 1)
    }
  }

  const prev = () => {
    if (currentPosition < totalPages - 1) {
      setCurrentPosition(currentPosition + 1)
    }
  }
 // the total pages - 1 is because currentPosition is zero indexed
  */
};
