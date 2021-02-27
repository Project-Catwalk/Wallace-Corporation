import React from "react";
import axios from "axios";
import RatingBreakdown from "./RatingBreakdown.jsx";
import ReviewsList from "./ReviewsList.jsx";
import ReviewsSortHeader from "./ReviewsSortHeader.jsx";
import ReviewsFooter from "./ReviewsFooter.jsx";

const Reviews = ({ productId }) => {
  return (
    <div>
      <RatingBreakdown />
      <ReviewsSortHeader />
      <ReviewsList />
      <ReviewsFooter />
    </div>
  );
};

export default Reviews;
