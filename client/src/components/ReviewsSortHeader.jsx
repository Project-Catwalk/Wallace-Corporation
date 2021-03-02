import React from "react";
import axios from "axios";

const ReviewsSortHeader = ({ reviews }) => (
  <div>
    Sort on:
    <select>
      <option>Relevance</option>
      <option>Helpful</option>
      <option>Newest</option>
    </select>
  </div>
);

export default ReviewsSortHeader;
