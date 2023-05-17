import { useEffect, useState } from "react";

import usePagination from "./usePagination";
import { mockData } from "./mockData";

export default function PaginateData(props) {
  const [currentPageCards, setCurrentPageCards] = useState([]);

  const paginate = usePagination(mockData, 6);

  useEffect(() => {
    setCurrentPageCards(paginate.sliceCurrentData());
  }, [paginate.currentPosition]);

  const renderCardsOnPage = () => {
    return currentPageCards.map((cardItem) => {
      return (
        <div className="card-item" key={`card-${cardItem.uid}`}>
          <img
            src={`https://source.unsplash.com/random/900×700/?${cardItem.name}`}
            alt={`${cardItem.name}`}
          ></img>
          <p>
            {cardItem.name} | ${cardItem.price}
          </p>
        </div>
      );
    });
  };

  return (
    <div className="paginate-data">
      <div className="slides-wrapper">{renderCardsOnPage()}</div>

      <div className="control-buttons-wrapper">
        <button
          onClick={() => {
            paginate.prev();
            setCurrentPageCards(paginate.sliceCurrentData());
          }}
        >
          Prev
        </button>

        <button
          onClick={() => {
            paginate.next();
            setCurrentPageCards(paginate.sliceCurrentData());
          }}
        >
          Next
        </button>
      </div>
    </div>
  );
}
