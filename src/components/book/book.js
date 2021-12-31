import React from "react";
import { BsChevronCompactDown } from "react-icons/bs";
import "./book.scss";

export const Book = () => {
  return (
    <div className="p-3">
      <h1 className="text-dark">Book list!</h1>
      <div className="d-flex flex-row flex-wrap">
        <div className="d-flex flex-row mx-4">
          <div className="bookTitle d-flex flex-column justify-content-between align-items-center">
            <div>Title: Book Title</div>
            <div className="d-flex flex-column align-items-center">
              <div>Hover to reveal!</div>
              <BsChevronCompactDown color="" size={50} />{" "}
            </div>
          </div>
          <div className="bookDescription position-absolute">
            Description: Book Description
          </div>
        </div>
        <div className="d-flex flex-row mx-4">
          <div className="bookTitle d-flex flex-column justify-content-between align-items-center">
            <div>Title: Book Title</div>
            <div className="d-flex flex-column align-items-center">
              <div>Hover to reveal!</div>
              <BsChevronCompactDown color="" size={50} />{" "}
            </div>
          </div>
          <div className="bookDescription position-absolute">
            Description: Book Description
          </div>
        </div>
        <div className="d-flex flex-row mx-4">
          <div className="bookTitle d-flex flex-column justify-content-between align-items-center">
            <div>Title: Book Title</div>
            <div className="d-flex flex-column align-items-center">
              <div>Hover to reveal!</div>
              <BsChevronCompactDown color="" size={50} />{" "}
            </div>
          </div>
          <div className="bookDescription position-absolute">
            Description: Book Description
          </div>
        </div>
      </div>
    </div>
  );
};

export default Book;
