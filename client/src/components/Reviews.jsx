import React from "react";
import axios from "axios";

const Reviews = ({ productId }) => {
  return (
    <div>
      <RatingBreakdown />
      <ReviewsSortFeature />
      <ReviewsListFeature />
      <ReviewsFooter />
    </div>
  );
};

export default Reviews;
