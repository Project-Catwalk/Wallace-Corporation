import React from "react";
import axios from "axios";
import ReviewTemplate from "./ReviewTemplate.jsx";

const ReviewsList = ({ productId }) => {
  return (
    <div>
      ReviewsList
      <ReviewTemplate />
    </div>
  );
};

export default ReviewsList;
